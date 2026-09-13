import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { designSlug, designName, dodoProductId, country } = await req.json();

  if (!designSlug || !designName || !dodoProductId) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const apiKey = process.env.DODO_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "DODO_API_KEY not configured" }, { status: 500 });
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://realmaxville.netlify.app";

  // Build checkout session payload
  const payload: Record<string, unknown> = {
    product_cart: [
      {
        product_id: dodoProductId,
        quantity: 1,
      },
    ],
    return_url: `${siteUrl}/designs/${designSlug}/success`,
    customization: {
      theme: "dark",
      show_order_details: true,
    },
    feature_flags: {
      allow_currency_selection: true,
    },
    metadata: {
      designSlug,
      designName,
    },
  };

  // If user is in Nigeria, pre-fill billing currency to NGN
  if (country === "NG") {
    payload.billing_currency = "NGN";
  }

  try {
    const res = await fetch("https://api.dodopayments.com/checkout/session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("Dodo checkout error:", data);
      return NextResponse.json({ error: data.message || "Checkout creation failed" }, { status: res.status });
    }

    return NextResponse.json({ url: data.checkout_url });
  } catch (error) {
    console.error("Dodo checkout error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
