"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { createPlan, updatePlan } from "@/lib/actions/admin";
import { Plan } from "@/lib/types";
import ImageUpload from "@/components/ImageUpload";

const planTypes = ["Residential", "Commercial", "Multi-Family"];

interface Props {
  plan?: Plan;
}

export default function PlanEditor({ plan }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState("");
  const [featureInput, setFeatureInput] = useState("");

  const [form, setForm] = useState({
    name: plan?.name || "",
    type: plan?.type || "Residential",
    description: plan?.description || "",
    price: plan?.price || 0,
    est_build_cost: plan?.est_build_cost || "",
    beds: plan?.beds || 0,
    baths: plan?.baths || 0,
    sqft: plan?.sqft || 0,
    sku: plan?.sku || "",
    features: plan?.features || [],
    image_url: plan?.image_url || "",
    is_published: plan?.is_published || false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!form.name || !form.sku || !form.price) {
      setError("Name, SKU, and Price are required");
      return;
    }

    startTransition(async () => {
      const result = plan
        ? await updatePlan(plan.id, form)
        : await createPlan(form);

      if ("error" in result) {
        setError(result.error);
      } else {
        router.push("/admin/plans");
      }
    });
  };

  const addFeature = () => {
    if (featureInput.trim() && !form.features.includes(featureInput.trim())) {
      setForm({ ...form, features: [...form.features, featureInput.trim()] });
      setFeatureInput("");
    }
  };

  const removeFeature = (f: string) => {
    setForm({ ...form, features: form.features.filter((feat) => feat !== f) });
  };

  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold">
          {plan ? "Edit Plan" : "New Plan"}
        </h1>
        <p className="text-[#8e9192] text-sm mt-1">
          {plan ? `Editing ${plan.name}` : "Create a new building plan"}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {error && (
          <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
            {error}
          </div>
        )}

        {/* Image */}
        <div className="glass-panel rounded-xl p-6 cyber-border">
          <label className="font-[var(--font-space-mono)] text-[10px] tracking-[0.2em] text-[#8e9192] uppercase mb-3 block">
            Cover Image
          </label>
          <ImageUpload
            value={form.image_url}
            onChange={(url) => setForm({ ...form, image_url: url })}
          />
        </div>

        {/* Basic info */}
        <div className="glass-panel rounded-xl p-6 cyber-border space-y-6">
          <h3 className="text-sm font-bold text-[#e5e2e1]">Basic Information</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="font-[var(--font-space-mono)] text-[10px] tracking-[0.2em] text-[#8e9192] uppercase mb-2 block">
                Plan Name *
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-[#e5e2e1] text-sm focus:border-[#c7f300] focus:outline-none transition-colors"
                placeholder="e.g. Modern Villa Plan"
              />
            </div>
            <div>
              <label className="font-[var(--font-space-mono)] text-[10px] tracking-[0.2em] text-[#8e9192] uppercase mb-2 block">
                SKU *
              </label>
              <input
                type="text"
                required
                value={form.sku}
                onChange={(e) => setForm({ ...form, sku: e.target.value.toUpperCase() })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-[#e5e2e1] text-sm focus:border-[#c7f300] focus:outline-none transition-colors font-[var(--font-space-mono)]"
                placeholder="e.g. RMV-2024-VR"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="font-[var(--font-space-mono)] text-[10px] tracking-[0.2em] text-[#8e9192] uppercase mb-2 block">
                Type
              </label>
              <select
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value as Plan["type"] })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-[#e5e2e1] text-sm focus:border-[#c7f300] focus:outline-none transition-colors"
              >
                {planTypes.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="font-[var(--font-space-mono)] text-[10px] tracking-[0.2em] text-[#8e9192] uppercase mb-2 block">
                Price (₦) *
              </label>
              <input
                type="number"
                required
                min={0}
                value={form.price}
                onChange={(e) => setForm({ ...form, price: Number(e.target.value) })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-[#e5e2e1] text-sm focus:border-[#c7f300] focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="font-[var(--font-space-mono)] text-[10px] tracking-[0.2em] text-[#8e9192] uppercase mb-2 block">
              Description
            </label>
            <textarea
              rows={3}
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-[#e5e2e1] text-sm focus:border-[#c7f300] focus:outline-none transition-colors resize-none"
              placeholder="Describe the building plan..."
            />
          </div>
        </div>

        {/* Specs */}
        <div className="glass-panel rounded-xl p-6 cyber-border space-y-6">
          <h3 className="text-sm font-bold text-[#e5e2e1]">Specifications</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { key: "beds", label: "Bedrooms", min: 0 },
              { key: "baths", label: "Bathrooms", min: 0 },
              { key: "sqft", label: "Square Feet", min: 0 },
            ].map((field) => (
              <div key={field.key}>
                <label className="font-[var(--font-space-mono)] text-[10px] tracking-[0.2em] text-[#8e9192] uppercase mb-2 block">
                  {field.label}
                </label>
                <input
                  type="number"
                  min={field.min}
                  value={form[field.key as keyof typeof form] as number}
                  onChange={(e) => setForm({ ...form, [field.key]: Number(e.target.value) })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-[#e5e2e1] text-sm focus:border-[#c7f300] focus:outline-none transition-colors"
                />
              </div>
            ))}
            <div>
              <label className="font-[var(--font-space-mono)] text-[10px] tracking-[0.2em] text-[#8e9192] uppercase mb-2 block">
                Est. Build Cost
              </label>
              <input
                type="text"
                value={form.est_build_cost}
                onChange={(e) => setForm({ ...form, est_build_cost: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-[#e5e2e1] text-sm focus:border-[#c7f300] focus:outline-none transition-colors"
                placeholder="e.g. ₦15M+"
              />
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="glass-panel rounded-xl p-6 cyber-border space-y-6">
          <h3 className="text-sm font-bold text-[#e5e2e1]">Features</h3>
          <div className="flex gap-3">
            <input
              type="text"
              value={featureInput}
              onChange={(e) => setFeatureInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addFeature())}
              className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-[#e5e2e1] text-sm focus:border-[#c7f300] focus:outline-none transition-colors"
              placeholder="Add a feature and press Enter"
            />
            <button
              type="button"
              onClick={addFeature}
              className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-[#b0b3b4] text-sm hover:bg-white/10 hover:text-[#c7f300] transition-all"
            >
              Add
            </button>
          </div>
          {form.features.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {form.features.map((f) => (
                <span
                  key={f}
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-[#b0b3b4] flex items-center gap-2"
                >
                  {f}
                  <button
                    type="button"
                    onClick={() => removeFeature(f)}
                    className="text-[#8e9192] hover:text-red-400 transition-colors"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Status */}
        <div className="glass-panel rounded-xl p-6 cyber-border">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={form.is_published}
              onChange={(e) => setForm({ ...form, is_published: e.target.checked })}
              className="w-5 h-5 rounded border-white/20 bg-white/5 text-[#c7f300] focus:ring-[#c7f300]"
            />
            <div>
              <span className="text-sm font-semibold text-[#e5e2e1]">Publish immediately</span>
              <p className="text-[10px] text-[#8e9192]">Uncheck to save as draft</p>
            </div>
          </label>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={isPending}
            className="bg-[#c7f300] text-[#171e00] px-8 py-3 rounded-xl font-[var(--font-space-mono)] text-xs tracking-wider uppercase font-bold hover:shadow-[0_0_20px_rgba(199,243,0,0.3)] transition-all active:scale-95 disabled:opacity-60"
          >
            {isPending ? "Saving..." : plan ? "Update Plan" : "Create Plan"}
          </button>
          <button
            type="button"
            onClick={() => router.push("/admin/plans")}
            className="text-[#8e9192] text-sm hover:text-[#e5e2e1] transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
