"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function SettingsPage() {
  const { data: session } = useSession();
  const user = session?.user as any;

  const [form, setForm] = useState({
    name: user?.name || "",
    company: user?.company || "",
    phone: "",
  });
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  function updateField(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    // API call to update profile would go here
    await new Promise((r) => setTimeout(r, 1000));
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  return (
    <div className="max-w-2xl space-y-8">
      <div>
        <h1 className="text-2xl font-black">Settings</h1>
        <p className="text-white/30 text-sm mt-1">
          Manage your account and preferences
        </p>
      </div>

      {/* Profile */}
      <Card padding="lg">
        <h2 className="text-lg font-bold mb-6">Profile</h2>
        <form onSubmit={handleSave} className="space-y-5">
          <Input
            label="Email"
            value={user?.email || ""}
            disabled
            hint="Email cannot be changed"
          />
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Full Name"
              value={form.name}
              onChange={(e) => updateField("name", e.target.value)}
            />
            <Input
              label="Company / Brand"
              value={form.company}
              onChange={(e) => updateField("company", e.target.value)}
            />
          </div>
          <Input
            label="Phone"
            type="tel"
            value={form.phone}
            onChange={(e) => updateField("phone", e.target.value)}
          />
          <div className="flex items-center gap-3">
            <Button type="submit" loading={saving}>
              Save Changes
            </Button>
            {saved && (
              <span className="text-green-400 text-xs font-medium">
                ✓ Saved
              </span>
            )}
          </div>
        </form>
      </Card>

      {/* Notifications */}
      <Card padding="lg">
        <h2 className="text-lg font-bold mb-4">Notifications</h2>
        <div className="space-y-4">
          {[
            { label: "Email notifications for new quotes", enabled: true },
            { label: "Order status updates", enabled: true },
            { label: "Marketing & tips", enabled: false },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between py-2"
            >
              <span className="text-sm text-white/50">{item.label}</span>
              <button
                className={`w-10 h-6 rounded-full transition-all ${
                  item.enabled
                    ? "bg-[#c9a96e]"
                    : "bg-white/10"
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full bg-white transition-transform ${
                    item.enabled ? "translate-x-5" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
