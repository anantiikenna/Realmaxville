"use client";

import { useState, useRef } from "react";
import { createClient } from "@/lib/supabase/client";

interface Props {
  value: string;
  onChange: (url: string) => void;
}

export default function ImageUpload({ value, onChange }: Props) {
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const upload = async (file: File) => {
    if (!file.type.startsWith("image/")) return;

    setUploading(true);
    const supabase = createClient();

    const ext = file.name.split(".").pop();
    const path = `plans/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;

    const { error } = await supabase.storage
      .from("plan-images")
      .upload(path, file, { contentType: file.type });

    if (!error) {
      const { data } = supabase.storage.from("plan-images").getPublicUrl(path);
      onChange(data.publicUrl);
    }

    setUploading(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) upload(file);
  };

  return (
    <div
      className={`relative rounded-xl border-2 border-dashed transition-all cursor-pointer ${
        dragOver ? "border-[#c7f300] bg-[#c7f300]/5" : "border-white/10 hover:border-white/20"
      }`}
      onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
      onDragLeave={() => setDragOver(false)}
      onDrop={handleDrop}
      onClick={() => inputRef.current?.click()}
    >
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) upload(file);
        }}
      />

      {value ? (
        <div className="relative">
          <img src={value} alt="Plan cover" className="w-full h-48 object-cover rounded-xl" />
          <div className="absolute inset-0 bg-black/50 rounded-xl opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-sm text-white font-[var(--font-space-mono)]">
              {uploading ? "Uploading..." : "Click or drag to replace"}
            </span>
          </div>
        </div>
      ) : (
        <div className="py-12 text-center">
          <div className="text-3xl mb-3" aria-hidden="true">
            {uploading ? "⏳" : "📷"}
          </div>
          <p className="text-sm text-[#b0b3b4]">
            {uploading ? "Uploading..." : "Click or drag an image here"}
          </p>
          <p className="text-[10px] text-[#8e9192] mt-1">PNG, JPG, WebP up to 5MB</p>
        </div>
      )}
    </div>
  );
}
