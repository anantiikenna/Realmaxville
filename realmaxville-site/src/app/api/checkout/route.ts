import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { designSlug, designName, priceUSD } = await req.json();

  if (!designSlug || !designName || !priceUSD) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const apiKey = process.env.DODO_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "DODO_API_KEY not configured" }, { status: 500 });
  }

  try {
    const res = await fetch("https://api.dodopayments.com/checkout/session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        product_name: designName,
        quantity: 1,
        price: priceUSD * 100, // Dodo expects cents
        currency: "USD",
        redirect_url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://realmaxville.netlify.app"}/designs/${designSlug}?success=true`,
        metadata: {
          designSlug,
          designName,
        },
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("Dodo checkout error:", data);
      return NextResponse.json({ error: data.message || "Checkout creation failed" }, { status: res.status });
    }

    return NextResponse.json({ url: data.url || data.checkout_url });
  } catch (error) {
    console.error("Dodo checkout error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
