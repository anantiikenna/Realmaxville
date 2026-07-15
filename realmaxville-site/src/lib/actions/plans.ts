"use server";

import { createClient } from "@/lib/supabase/server";
import { PlanInsert, PlanUpdate } from "@/lib/types";

export async function createPlan(plan: PlanInsert) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("plans")
    .insert(plan)
    .select()
    .single();

  if (error) {
    return { error: error.message };
  }

  return { data };
}

export async function updatePlan(id: string, updates: PlanUpdate) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("plans")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    return { error: error.message };
  }

  return { data };
}

export async function deletePlan(id: string) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("plans")
    .delete()
    .eq("id", id);

  if (error) {
    return { error: error.message };
  }

  return { success: true };
}

export async function getAllPlans() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("plans")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return { error: error.message };
  }

  return { data };
}
