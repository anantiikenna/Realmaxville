"use server";

import { createClient } from "@/lib/supabase/server";
import { PlanInsert, PlanUpdate } from "@/lib/types";
import { revalidatePath } from "next/cache";

async function checkAdmin() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Not authenticated");

  const { data } = await supabase
    .from("profiles")
    .select("is_admin")
    .eq("id", user.id)
    .single();

  if (!data?.is_admin) throw new Error("Not authorized");
  return supabase;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export async function createPlan(plan: Omit<PlanInsert, "slug"> & { slug?: string }) {
  const supabase = await checkAdmin();

  const slug = plan.slug || slugify(plan.name);

  const { data, error } = await supabase
    .from("plans")
    .insert({ ...plan, slug })
    .select()
    .single();

  if (error) return { error: error.message };

  revalidatePath("/plans");
  revalidatePath("/admin/plans");
  return { data };
}

export async function updatePlan(id: string, updates: PlanUpdate) {
  const supabase = await checkAdmin();

  if (updates.name && !updates.slug) {
    updates.slug = slugify(updates.name);
  }

  const { data, error } = await supabase
    .from("plans")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) return { error: error.message };

  revalidatePath("/plans");
  revalidatePath("/admin/plans");
  revalidatePath(`/admin/plans/${id}`);
  return { data };
}

export async function deletePlan(id: string) {
  const supabase = await checkAdmin();

  const { error } = await supabase.from("plans").delete().eq("id", id);
  if (error) return { error: error.message };

  revalidatePath("/plans");
  revalidatePath("/admin/plans");
  return { success: true };
}

export async function getAllPlansAdmin() {
  const supabase = await checkAdmin();

  const { data, error } = await supabase
    .from("plans")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) return { error: error.message };
  return { data };
}

export async function getOrdersAdmin() {
  const supabase = await checkAdmin();

  const { data, error } = await supabase
    .from("orders")
    .select("*, profiles(email, full_name), order_items(*, plans(name, sku))")
    .order("created_at", { ascending: false });

  if (error) return { error: error.message };
  return { data };
}

export async function getDashboardStats() {
  const supabase = await checkAdmin();

  const [plansCount, ordersCount, revenueResult] = await Promise.all([
    supabase.from("plans").select("id", { count: "exact", head: true }),
    supabase.from("orders").select("id", { count: "exact", head: true }),
    supabase.from("orders").select("total").eq("status", "paid"),
  ]);

  const totalRevenue = (revenueResult.data ?? []).reduce(
    (sum, o) => sum + Number(o.total),
    0
  );

  return {
    totalPlans: plansCount.count ?? 0,
    totalOrders: ordersCount.count ?? 0,
    totalRevenue,
  };
}
