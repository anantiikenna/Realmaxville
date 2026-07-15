import { createClient } from "@/lib/supabase/server";
import { Plan, PaginatedResponse } from "@/lib/types";

const PAGE_SIZE = 9;

export async function getPlansPaginated(
  page: number = 1,
  type?: string,
  search?: string
): Promise<PaginatedResponse<Plan>> {
  const supabase = await createClient();
  const from = (page - 1) * PAGE_SIZE;
  const to = from + PAGE_SIZE - 1;

  let query = supabase
    .from("plans")
    .select("*", { count: "exact" })
    .eq("is_published", true)
    .order("created_at", { ascending: false })
    .range(from, to);

  if (type && type !== "All") {
    query = query.eq("type", type);
  }

  if (search) {
    query = query.or(`name.ilike.%${search}%,description.ilike.%${search}%`);
  }

  const { data, count, error } = await query;

  if (error) {
    console.error("Error fetching plans:", error.message);
    return { data: [], total: 0, page, pageSize: PAGE_SIZE, totalPages: 0 };
  }

  return {
    data: data ?? [],
    total: count ?? 0,
    page,
    pageSize: PAGE_SIZE,
    totalPages: Math.ceil((count ?? 0) / PAGE_SIZE),
  };
}

export async function getPlans(type?: string): Promise<Plan[]> {
  const result = await getPlansPaginated(1, type);
  return result.data;
}

export async function getPlanBySlug(slug: string): Promise<Plan | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("plans")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .single();

  if (error) return null;
  return data;
}

export async function getPlanById(id: string): Promise<Plan | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("plans")
    .select("*")
    .eq("id", id)
    .single();

  if (error) return null;
  return data;
}

export async function getPlanTypes(): Promise<string[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("plans")
    .select("type")
    .eq("is_published", true);

  if (error || !data) return ["All"];
  const types = [...new Set(data.map((p) => p.type))];
  return ["All", ...types];
}
