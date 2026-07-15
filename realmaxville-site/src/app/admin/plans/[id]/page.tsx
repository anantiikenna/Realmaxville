import { getPlanById } from "@/lib/plans";
import { notFound } from "next/navigation";
import PlanEditor from "./PlanEditor";

export default async function EditPlanPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  if (id === "new") {
    return <PlanEditor />;
  }

  const plan = await getPlanById(id);
  if (!plan) notFound();

  return <PlanEditor plan={plan} />;
}
