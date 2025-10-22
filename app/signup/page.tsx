"use client";

import React, { useEffect, useState } from "react";
import { Mail, Lock, Eye, EyeOff, ShoppingCart, Store } from "lucide-react";
import Image from "next/image";
import useAuth from "@/hooks/useAuth";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function GlassSignupPage() {
  const [accountType, setAccountType] = useState("Buyer");
  const router = useRouter();
  const { signup } = useAuth();
  const [loadingGoogle, setLoadingGoogle] = useState(false);

  const handleGoogleSignup = async () => {
    setLoadingGoogle(true);
    await signIn("google", { callbackUrl: "/onboarding" });
  };

  const [form, setForm] = useState({
    email: "",
    accountType: accountType.toLowerCase(),
    password: "",
  });

  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      accountType: accountType.toLowerCase(),
    }));
  }, [accountType]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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
      const res = await signup(form);
      if (!res?.success) {
        throw new Error(res?.message || "Signup failed");
      }

      toast.success("🎉 Welcome aboard!", {
        description: "Your account has been created successfully.",
        duration: 3000,
        className:
          "bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 text-white shadow-xl backdrop-blur-md border border-white/20",
      });

      console.log(res);

      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
        toast.error(error.message);
      } else {
        setError("Signup failed");
        toast.error("Signup failed");
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

      {/* Right side glassy signup form */}
      <form
        className="flex w-full md:w-1/2 items-center justify-center bg-gradient-to-tr from-blue-100 via-purple-100 to-pink-100 px-6 py-12 min-h-screen"
        onSubmit={handleSubmit}
      >
        <div className="bg-white/10 md:bg-white/30 backdrop-blur-md border border-white/20 rounded-3xl shadow-xl w-full max-w-md p-8">
          <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-8">
            Create Account
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

          {/* Password with Eye toggle */}
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
                value={form.password}
                onChange={handleChange}
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

          {/* Account Type */}
          <div className="mb-6">
            <p className="text-sm text-gray-700 mb-2 font-medium">
              Account Type
            </p>
            <div className="flex gap-4">
              {/* Buyer */}
              <div
                onClick={() => setAccountType("Buyer")}
                className={`flex-1 cursor-pointer flex flex-col items-center justify-center border rounded-xl p-4 transition-all duration-300 hover:scale-105 ${
                  accountType === "Buyer"
                    ? "bg-gradient-to-r from-blue-500 to-blue-400 border-blue-500 shadow-lg"
                    : "bg-white/20 border-white/30"
                }`}
              >
                <ShoppingCart
                  className={`w-8 h-8 mb-2 ${
                    accountType === "Buyer" ? "text-white" : "text-gray-500"
                  }`}
                />
                <span
                  className={`font-medium ${
                    accountType === "Buyer" ? "text-white" : "text-gray-500"
                  }`}
                >
                  Buyer
                </span>
                <p
                  className={`text-xs text-center mt-1 ${
                    accountType === "Buyer" ? "text-white/90" : "text-gray-500"
                  }`}
                >
                  Shop from thousands of products and manage your orders
                </p>
              </div>

              {/* Seller */}
              <div
                onClick={() => setAccountType("Seller")}
                className={`flex-1 cursor-pointer flex flex-col items-center justify-center border rounded-xl p-4 transition-all duration-300 hover:scale-105 ${
                  accountType === "Seller"
                    ? "bg-gradient-to-r from-purple-500 to-purple-400 border-purple-500 shadow-lg"
                    : "bg-white/20 border-white/30"
                }`}
              >
                <Store
                  className={`w-8 h-8 mb-2 ${
                    accountType === "Seller" ? "text-white" : "text-gray-500"
                  }`}
                />
                <span
                  className={`font-medium ${
                    accountType === "Seller" ? "text-white" : "text-gray-500"
                  }`}
                >
                  Seller
                </span>
                <p
                  className={`text-xs text-center mt-1 ${
                    accountType === "Seller" ? "text-white/90" : "text-gray-500"
                  }`}
                >
                  Sell your products and manage your online store
                </p>
              </div>
            </div>
          </div>

          {/* Sign Up */}
          <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-xl font-semibold hover:scale-105 transition-transform mb-4 shadow-lg">
            {loading ? "Loading..." : "Sign Up"}
          </button>

          {/* Divider */}
          <div className="flex items-center my-4 text-gray-300">
            <hr className="flex-1 border-gray-300/50" />
            <span className="mx-2 text-sm">OR</span>
            <hr className="flex-1 border-gray-300/50" />
          </div>

          {/* Google Signup */}
          <button
            type="button"
            onClick={handleGoogleSignup}
            disabled={loadingGoogle}
            className={`w-full flex items-center justify-center border border-white/30 rounded-xl py-2 backdrop-blur-sm bg-white/20 text-gray-800 hover:bg-white/25 transition ${
              loadingGoogle ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            <Image
              src="/images/—Pngtree—google internet icon vector_12256707.png"
              alt="Google"
              width={20}
              height={20}
              className="mr-2"
            />
            {loadingGoogle ? "Signing in..." : "Sign up with Google"}
          </button>

          {/* Footer */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <a href="#" className="text-gray-800 font-medium hover:underline">
              Log in
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
