"use client";

import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth"; // assuming same hook used for signup

export default function GlassSignInPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { login } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await login(form);
      if (!res?.success) {
        throw new Error(res?.message || "Login failed");
      }

      toast.success("✨ Welcome back!", {
        description: "Redirecting to your dashboard...",
        duration: 3000,
        className:
          "bg-gradient-to-tr from-green-500 via-emerald-500 to-teal-500 text-white shadow-xl backdrop-blur-md border border-white/20",
      });

      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
        toast.error(error.message, {
          className:
            "bg-gradient-to-tr from-red-500 via-rose-500 to-pink-500 text-white shadow-lg backdrop-blur-md border border-white/20",
        });
      } else {
        setError("Login failed");
        toast.error("Login failed", {
          className:
            "bg-gradient-to-tr from-red-500 via-rose-500 to-pink-500 text-white shadow-lg backdrop-blur-md border border-white/20",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side image */}
      <div className="hidden md:flex w-1/2 relative">
        <Image
          src="/images/kayle-kaupanger-J8ksCswaBYo-unsplash.jpg"
          alt="E-commerce illustration"
          fill
          className="object-cover"
        />
      </div>

      {/* Right side glassy login form */}
      <form
        onSubmit={handleSubmit}
        className="flex w-full md:w-1/2 items-center justify-center bg-gradient-to-tr from-blue-100 via-purple-100 to-pink-100 px-6 py-12 min-h-screen"
      >
        <div className="bg-white/10 md:bg-white/30 backdrop-blur-md border border-white/20 rounded-3xl shadow-xl w-full max-w-md p-8">
          <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-8">
            Login
          </h2>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700 mb-2 block"
            >
              Email
            </label>
            <div className="flex items-center border border-white/40 rounded-lg px-3 py-2 backdrop-blur-sm bg-white/20 focus-within:ring-2 focus-within:ring-blue-400 transition">
              <Mail className="w-5 h-5 text-gray-200 mr-2" />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                onChange={handleChange}
                value={form.email}
                className="w-full outline-none bg-transparent text-gray-700 placeholder-gray-400"
                required
              />
            </div>
          </div>

          {/* Password with Eye Toggle */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700 mb-2 block"
            >
              Password
            </label>
            <div className="flex items-center border border-white/40 rounded-lg px-3 py-2 backdrop-blur-sm bg-white/20 focus-within:ring-2 focus-within:ring-blue-400 transition">
              <Lock className="w-5 h-5 text-gray-200 mr-2" />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="••••••••"
                onChange={handleChange}
                value={form.password}
                className="w-full outline-none bg-transparent text-gray-700 placeholder-gray-400"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="focus:outline-none"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5 text-gray-400 hover:text-gray-600 transition" />
                ) : (
                  <Eye className="w-5 h-5 text-gray-400 hover:text-gray-600 transition" />
                )}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-xl font-semibold hover:scale-105 transition-transform mb-4 shadow-lg disabled:opacity-70"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {/* Divider */}
          <div className="flex items-center my-4 text-gray-300">
            <hr className="flex-1 border-gray-300/50" />
            <span className="mx-2 text-sm">OR</span>
            <hr className="flex-1 border-gray-300/50" />
          </div>

          {/* Google Login */}
          <button
            type="button"
            className="w-full flex items-center justify-center border border-white/30 rounded-xl py-2 backdrop-blur-sm bg-white/20 text-gray-800 hover:bg-white/25 transition"
          >
            <Image
              src="/images/—Pngtree—google internet icon vector_12256707.png"
              alt="Google"
              width={20}
              height={20}
              className="mr-2"
            />
            Sign in with Google
          </button>

          {/* Footer */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Don’t have an account?{" "}
            <a
              href="/signup"
              className="text-gray-800 font-medium hover:underline"
            >
              Sign up
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
