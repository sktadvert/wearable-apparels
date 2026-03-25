"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function updateField(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (form.password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          phone: form.phone,
          password: form.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Registration failed");
        return;
      }

      // Auto sign-in after registration
      const result = await signIn("credentials", {
        email: form.email,
        password: form.password,
        redirect: false,
      });

      if (result?.error) {
        setError(result.error);
      } else {
        router.push("/dashboard");
        router.refresh();
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20 relative">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a]" />
      <div className="fixed top-1/3 right-1/4 w-96 h-96 bg-[#c9a96e]/5 rounded-full blur-[120px]" />

      <div className="relative w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex items-center gap-3 group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#c9a96e] to-[#8a6d3b] flex items-center justify-center text-black font-black text-xl">
              WA
            </div>
          </Link>
          <h1 className="text-3xl font-black mt-6 mb-2">Create Account</h1>
          <p className="text-white/35 text-sm">
            Start your manufacturing journey
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 space-y-5">
          {error && (
            <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
              {error}
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Full Name"
              placeholder="John Doe"
              value={form.name}
              onChange={(e) => updateField("name", e.target.value)}
              required
            />
            <Input
              label="Brand / Company"
              placeholder="Your brand"
              value={form.company}
              onChange={(e) => updateField("company", e.target.value)}
            />
          </div>

          <Input
            label="Email"
            type="email"
            placeholder="you@brand.com"
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            required
          />

          <Input
            label="Phone"
            type="tel"
            placeholder="+1 (555) 000-0000"
            value={form.phone}
            onChange={(e) => updateField("phone", e.target.value)}
          />

          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              value={form.password}
              onChange={(e) => updateField("password", e.target.value)}
              required
              hint="Min 8 characters"
            />
            <Input
              label="Confirm"
              type="password"
              placeholder="••••••••"
              value={form.confirmPassword}
              onChange={(e) => updateField("confirmPassword", e.target.value)}
              required
            />
          </div>

          <Button type="submit" loading={loading} className="w-full" size="lg">
            Create Account
          </Button>

          <p className="text-center text-white/20 text-[11px]">
            By creating an account, you agree to our Terms of Service
          </p>
        </form>

        <p className="text-center mt-8 text-white/30 text-sm">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-[#c9a96e] font-medium hover:text-[#e0c992] transition-colors"
          >
            Sign in
          </Link>
        </p>

        <p className="text-center mt-4">
          <Link
            href="/"
            className="text-white/20 text-xs hover:text-white/40 transition-colors"
          >
            ← Back to home
          </Link>
        </p>
      </div>
    </div>
  );
}
