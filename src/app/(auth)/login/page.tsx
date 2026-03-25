"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError(result.error);
      } else {
        router.push(callbackUrl);
        router.refresh();
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a]" />
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-[#c9a96e]/5 rounded-full blur-[120px]" />
      <div className="fixed bottom-1/4 right-1/4 w-72 h-72 bg-[#c9a96e]/3 rounded-full blur-[100px]" />

      <div className="relative w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex items-center gap-3 group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#c9a96e] to-[#8a6d3b] flex items-center justify-center text-black font-black text-xl">
              WA
            </div>
          </Link>
          <h1 className="text-3xl font-black mt-6 mb-2">Welcome Back</h1>
          <p className="text-white/35 text-sm">
            Sign in to manage your projects
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 space-y-5">
          {error && (
            <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
              {error}
            </div>
          )}

          <Input
            label="Email"
            type="email"
            placeholder="you@brand.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Button type="submit" loading={loading} className="w-full" size="lg">
            Sign In
          </Button>
        </form>

        <p className="text-center mt-8 text-white/30 text-sm">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="text-[#c9a96e] font-medium hover:text-[#e0c992] transition-colors"
          >
            Create one
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
