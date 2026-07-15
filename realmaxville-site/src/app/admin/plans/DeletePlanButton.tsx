"use client";

import { useState, useTransition } from "react";
import { deletePlan } from "@/lib/actions/admin";

export default function DeletePlanButton({ planId, planName }: { planId: string; planName: string }) {
  const [confirming, setConfirming] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    startTransition(async () => {
      await deletePlan(planId);
      setConfirming(false);
    });
  };

  if (confirming) {
    return (
      <div className="flex items-center gap-2">
        <span className="text-[10px] text-red-400">Delete?</span>
        <button
          onClick={handleDelete}
          disabled={isPending}
          className="px-2 py-1 rounded text-[10px] bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors disabled:opacity-50"
        >
          {isPending ? "..." : "Yes"}
        </button>
        <button
          onClick={() => setConfirming(false)}
          className="px-2 py-1 rounded text-[10px] bg-white/5 text-[#8e9192] hover:bg-white/10 transition-colors"
        >
          No
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => setConfirming(true)}
      className="px-3 py-1.5 rounded-lg text-[10px] font-[var(--font-space-mono)] tracking-wider text-[#8e9192] hover:text-red-400 hover:bg-red-500/5 transition-all"
    >
      DELETE
    </button>
  );
}
