"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import Input, { Textarea, Select } from "@/components/ui/Input";
import Card from "@/components/ui/Card";
import { PROJECT_TYPES, FABRIC_TYPES, BUDGET_RANGES, TIMELINE_OPTIONS } from "@/types";

const steps = [
  { id: 1, title: "Project Type", desc: "What are we making?" },
  { id: 2, title: "Details", desc: "Specs & requirements" },
  { id: 3, title: "Files", desc: "Tech packs & references" },
  { id: 4, title: "Timeline", desc: "Budget & delivery" },
];

export default function NewRFQPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [files, setFiles] = useState<File[]>([]);

  const [form, setForm] = useState({
    projectType: "",
    quantity: "",
    description: "",
    fabricType: "",
    colors: "",
    sizes: "",
    budget: "",
    timeline: "",
  });

  function updateField(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function nextStep() {
    if (step < 4) setStep(step + 1);
  }

  function prevStep() {
    if (step > 1) setStep(step - 1);
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  }

  async function handleSubmit() {
    setLoading(true);
    setError("");

    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value);
      });
      files.forEach((file) => {
        formData.append("files", file);
      });

      const res = await fetch("/api/rfq", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to submit request");
        return;
      }

      router.push(`/dashboard/rfq/${data.id}`);
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-black">New Project Request</h1>
        <p className="text-white/30 text-sm mt-1">
          Tell us about your project and we&apos;ll get you a quote within 24-48 hours
        </p>
      </div>

      {/* Step indicator */}
      <div className="flex items-center gap-2 mb-10">
        {steps.map((s, i) => (
          <div key={s.id} className="flex items-center gap-2 flex-1">
            <button
              onClick={() => s.id < step && setStep(s.id)}
              className={`flex items-center gap-3 ${
                s.id <= step ? "opacity-100" : "opacity-30"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-all ${
                  s.id === step
                    ? "bg-[#c9a96e] text-black"
                    : s.id < step
                    ? "bg-[#c9a96e]/20 text-[#c9a96e]"
                    : "bg-white/5 text-white/30"
                }`}
              >
                {s.id < step ? "✓" : s.id}
              </div>
              <div className="hidden sm:block">
                <p className="text-xs font-medium text-white/60">{s.title}</p>
              </div>
            </button>
            {i < steps.length - 1 && (
              <div
                className={`flex-1 h-px ${
                  s.id < step ? "bg-[#c9a96e]/30" : "bg-white/[0.06]"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {error && (
        <div className="mb-6 p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
          {error}
        </div>
      )}

      {/* Form Steps */}
      <Card padding="lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Step 1: Project Type */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-bold mb-1">What are we manufacturing?</h2>
                  <p className="text-white/25 text-sm">Select your garment type</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {PROJECT_TYPES.map((type) => (
                    <button
                      key={type}
                      onClick={() => updateField("projectType", type)}
                      className={`p-4 rounded-xl border text-left text-sm font-medium transition-all ${
                        form.projectType === type
                          ? "border-[#c9a96e]/50 bg-[#c9a96e]/10 text-[#c9a96e]"
                          : "border-white/[0.06] text-white/40 hover:border-white/20 hover:text-white/60"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
                <Input
                  label="Quantity (units)"
                  type="number"
                  placeholder="e.g. 200"
                  value={form.quantity}
                  onChange={(e) => updateField("quantity", e.target.value)}
                  hint="Minimum order: 50 pieces per style"
                />
              </div>
            )}

            {/* Step 2: Details */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-bold mb-1">Project Details</h2>
                  <p className="text-white/25 text-sm">The more detail, the better your quote</p>
                </div>
                <Select
                  label="Fabric Type"
                  options={FABRIC_TYPES.map((f) => ({ value: f, label: f }))}
                  placeholder="Select fabric"
                  value={form.fabricType}
                  onChange={(e) => updateField("fabricType", e.target.value)}
                />
                <Input
                  label="Colors"
                  placeholder="e.g. Black, Off-White, Forest Green"
                  value={form.colors}
                  onChange={(e) => updateField("colors", e.target.value)}
                />
                <Input
                  label="Sizes"
                  placeholder="e.g. S, M, L, XL, XXL"
                  value={form.sizes}
                  onChange={(e) => updateField("sizes", e.target.value)}
                />
                <Textarea
                  label="Project Description"
                  placeholder="Describe your project — design details, special requirements, finishing techniques, references..."
                  rows={5}
                  value={form.description}
                  onChange={(e) => updateField("description", e.target.value)}
                />
              </div>
            )}

            {/* Step 3: Files */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-bold mb-1">Upload Files</h2>
                  <p className="text-white/25 text-sm">
                    Tech packs, design mockups, reference images
                  </p>
                </div>
                <div className="border-2 border-dashed border-white/[0.08] rounded-2xl p-12 text-center hover:border-[#c9a96e]/30 transition-all cursor-pointer">
                  <input
                    type="file"
                    multiple
                    accept=".pdf,.png,.jpg,.jpeg,.ai,.psd,.svg,.zip"
                    onChange={handleFileChange}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    style={{ position: "relative" }}
                  />
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="1" className="mx-auto mb-4 opacity-50">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" />
                  </svg>
                  <p className="text-white/30 text-sm">
                    Drop files here or click to browse
                  </p>
                  <p className="text-white/15 text-xs mt-2">
                    PDF, PNG, JPG, AI, PSD, SVG, ZIP — Max 10MB each
                  </p>
                </div>
                {files.length > 0 && (
                  <div className="space-y-2">
                    {files.map((file, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-[#c9a96e]/10 flex items-center justify-center">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="1.5">
                              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                              <polyline points="14,2 14,8 20,8" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-xs text-white/60">{file.name}</p>
                            <p className="text-[10px] text-white/20">
                              {(file.size / 1024).toFixed(0)} KB
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => setFiles(files.filter((_, j) => j !== i))}
                          className="text-white/20 hover:text-red-400 transition-colors"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 6L6 18M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
                <p className="text-white/15 text-xs">
                  No files ready? No problem — you can always upload later from your dashboard.
                </p>
              </div>
            )}

            {/* Step 4: Timeline & Budget */}
            {step === 4 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-bold mb-1">Timeline & Budget</h2>
                  <p className="text-white/25 text-sm">
                    Helps us prioritize and match the right production line
                  </p>
                </div>
                <Select
                  label="Desired Timeline"
                  options={TIMELINE_OPTIONS.map((t) => ({ value: t, label: t }))}
                  placeholder="Select timeline"
                  value={form.timeline}
                  onChange={(e) => updateField("timeline", e.target.value)}
                />
                <div>
                  <p className="text-white/30 text-xs tracking-wider uppercase mb-3">
                    Budget Range
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {BUDGET_RANGES.map((range) => (
                      <button
                        key={range}
                        onClick={() => updateField("budget", range)}
                        className={`p-3 rounded-xl border text-sm font-medium transition-all ${
                          form.budget === range
                            ? "border-[#c9a96e]/50 bg-[#c9a96e]/10 text-[#c9a96e]"
                            : "border-white/[0.06] text-white/30 hover:border-white/20"
                        }`}
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Summary */}
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-3">
                  <h3 className="text-sm font-bold text-white/60 uppercase tracking-wider">
                    Summary
                  </h3>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="text-white/25 text-xs">Type</p>
                      <p className="text-white/70">{form.projectType || "—"}</p>
                    </div>
                    <div>
                      <p className="text-white/25 text-xs">Quantity</p>
                      <p className="text-white/70">{form.quantity || "—"} units</p>
                    </div>
                    <div>
                      <p className="text-white/25 text-xs">Fabric</p>
                      <p className="text-white/70">{form.fabricType || "—"}</p>
                    </div>
                    <div>
                      <p className="text-white/25 text-xs">Files</p>
                      <p className="text-white/70">{files.length} attached</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/[0.06]">
          <Button
            variant="ghost"
            onClick={prevStep}
            disabled={step === 1}
          >
            ← Back
          </Button>
          {step < 4 ? (
            <Button onClick={nextStep} disabled={step === 1 && !form.projectType}>
              Continue →
            </Button>
          ) : (
            <Button onClick={handleSubmit} loading={loading}>
              Submit Request
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}
