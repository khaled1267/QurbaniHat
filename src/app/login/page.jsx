"use client";
import { useState } from "react";
import { authClient } from "../../lib/auth-client";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation"; // রিডাইরেক্টের জন্য
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const [error, setError] = useState("");
  const router = useRouter(); // রাউটার ইনিশিয়ালাইজেশন

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // আগের এরর ক্লিয়ার করা
    
    const email = e.target.email.value;
    const password = e.target.password.value;

    // ১. ভ্যালিডেশন (সবার আগে)
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      return setError("সঠিক ইমেইল দিন");
    }
    if (password.length < 6) {
      return setError("পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে");
    }

    // ২. লগইন রিকোয়েস্ট (উদাহরণস্বরূপ authClient ব্যবহার করে)
    try {
      const { data, error: authError } = await authClient.signIn.email({
        email,
        password,
        callbackURL: "/", // লগইন শেষে যেখানে যাবে
      });

      if (authError) {
        toast.error(authError.message || "লগইন ব্যর্থ হয়েছে!");
      } else {
        toast.success("সফলভাবে লগইন হয়েছে! 🎉");
        router.push("/"); // হোম পেজে নিয়ে যাবে
      }
    } catch (err) {
      toast.error("কিছু একটা ভুল হয়েছে। আবার চেষ্টা করুন।");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/", // সফল হলে হোম পেজে যাবে
      });
      // গুগল লগইনের ক্ষেত্রে সাধারণত রিডাইরেক্ট হয়ে যায়, 
      // তাই আলাদা করে টোস্ট এখানে নাও দেখতে পারেন যদি না সেটা সাকসেস পেজ হয়।
    } catch (err) {
      toast.error("গুগল লগইন ব্যর্থ হয়েছে!");
    }
  };

  return (
    <div className="min-h-screen bg-[#0a1f05] flex items-center justify-center px-4">
      <div className="bg-[#1a3a0a] border border-[#3B6D11] rounded-2xl p-9 w-full max-w-md">
        {/* TOP ICON */}
        <div className="text-center mb-6">
          <div className="w-14 h-14 bg-[#97C459] rounded-xl inline-flex items-center justify-center text-3xl">
            🌙
          </div>
          <h1 className="text-xl font-semibold text-[#EAF3DE] mt-3">
            স্বাগতম!
          </h1>
          <p className="text-xs text-[#639922] mt-1">
            আপনার অ্যাকাউন্টে লগইন করুন
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="text-xs text-[#97C459] mb-1 block">ইমেইল</label>
            <input
              type="email"
              name="email"
              required
              placeholder="john@example.com"
              className="w-full px-4 py-2.5 rounded-lg border border-[#3B6D11] bg-[#0f2206] text-[#EAF3DE] text-sm focus:outline-none focus:border-[#97C459]"
            />
          </div>

          <div>
            <label className="text-xs text-[#97C459] mb-1 block">পাসওয়ার্ড</label>
            <input
              type="password"
              name="password"
              required
              placeholder="আপনার পাসওয়ার্ড দিন"
              className="w-full px-4 py-2.5 rounded-lg border border-[#3B6D11] bg-[#0f2206] text-[#EAF3DE] text-sm focus:outline-none focus:border-[#97C459]"
            />
          </div>

          {error && (
            <p className="text-xs text-red-400 bg-red-900/20 border border-red-800 px-3 py-2 rounded-lg">
              ⚠️ {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-[#97C459] text-[#173404] font-semibold text-sm py-2.5 rounded-lg hover:bg-[#C0DD97] transition mt-1"
          >
            ✅ সাইন ইন
          </button>

          <button
            type="reset"
            onClick={() => setError("")}
            className="w-full bg-transparent text-[#97C459] text-sm py-2.5 rounded-lg border border-[#3B6D11] hover:bg-[#2d5a14] transition"
          >
            রিসেট করুন
          </button>
        </form>

        <div className="flex items-center gap-3 my-5">
          <hr className="flex-1 border-[#3B6D11]" />
          <span className="text-xs text-[#639922]">অথবা</span>
          <hr className="flex-1 border-[#3B6D11]" />
        </div>

        <button
          onClick={handleGoogleLogin}
          type="button"
          className="w-full bg-[#0f2206] text-[#C0DD97] text-sm py-2.5 rounded-lg border border-[#3B6D11] hover:bg-[#2d5a14] transition flex items-center justify-center gap-2"
        >
          {/* Google Icon SVG (same as yours) */}
           <FaGoogle />
          Google দিয়ে Continue করুন
        </button>

        <p className="text-center mt-5 text-xs text-[#639922]">
          অ্যাকাউন্ট নেই?{" "}
          <Link href="/register" className="text-[#97C459] font-medium hover:underline">
            রেজিস্ট্রেশন করুন →
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;