import { NextRequest, NextResponse } from "next/server";
import { getPlansPaginated } from "@/lib/plans";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = parseInt(searchParams.get("page") || "1", 10);
  const type = searchParams.get("type") || undefined;
  const search = searchParams.get("search") || undefined;

  const result = await getPlansPaginated(page, type, search);

  return NextResponse.json(result);
}
