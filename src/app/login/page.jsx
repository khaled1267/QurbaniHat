"use client";
import { useState } from "react";
import { authClient } from "../../lib/auth-client";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const email = e.target.email.value;
    const password = e.target.password.value;

    // ভ্যালিডেশন
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      return setError("সঠিক ইমেইল দিন");
    }
    if (password.length < 6) {
      return setError("পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে");
    }

    const loadingToast = toast.loading("লগইন হচ্ছে...");

    // SignIn কল (try-catch ছাড়া)
    const { data, error: authError } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });

    if (authError) {
      // যদি এরর থাকে
      toast.update(loadingToast, {
        render: authError.message || "লগইন ব্যর্থ হয়েছে!",
        type: "error",
        isLoading: false,
        autoClose: 2000,
      });
    } else {
      // যদি সফল হয়
      toast.update(loadingToast, {
        render: "সফলভাবে লগইন হয়েছে! 🎉",
        type: "success",
        isLoading: false,
        autoClose: 2000,
      });
      router.push("/");
    }
  };

  const handleGoogleLogin = async () => {
    toast.info("Google লগইন হচ্ছে...");
    const { error: googleError } = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });

    if (googleError) {
      toast.error("গুগল লগইন ব্যর্থ হয়েছে!");
    }
  };

  return (
    <div className="min-h-screen bg-[#0a1f05] flex items-center justify-center px-4 text-[#EAF3DE]">
      <div className="bg-[#1a3a0a] border border-[#3B6D11] rounded-2xl p-9 w-full max-w-md">
        
        <div className="text-center mb-6">
          <div className="w-14 h-14 bg-[#97C459] rounded-xl inline-flex items-center justify-center text-3xl">
            🌙
          </div>
          <h1 className="text-xl font-semibold mt-3">স্বাগতম!</h1>
          <p className="text-xs text-[#639922] mt-1">আপনার অ্যাকাউন্টে লগইন করুন</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            name="email"
            placeholder="ইমেইল দিন"
            required
            className="w-full px-4 py-2.5 rounded-lg border border-[#3B6D11] bg-[#0f2206] outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder="পাসওয়ার্ড দিন"
            required
            className="w-full px-4 py-2.5 rounded-lg border border-[#3B6D11] bg-[#0f2206] outline-none"
          />

          {error && <p className="text-xs text-red-400">{error}</p>}

          <button type="submit" className="w-full bg-[#97C459] text-[#0a1f05] py-2.5 rounded-lg font-bold hover:bg-[#86b34a] transition-colors">
            সাইন ইন
          </button>
        </form>

        <div className="flex flex-col gap-3 mt-4">
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-2 border border-[#3B6D11] py-2.5 rounded-lg hover:bg-[#0f2206] transition-colors"
          >
            <FaGoogle className="text-red-500" /> Google দিয়ে Continue
          </button>

          <button
            type="button"
            onClick={() => { setError(""); document.querySelector("form").reset(); }}
            className="w-full border border-gray-600 py-2.5 rounded-lg text-xs"
          >
            রিসেট করুন
          </button>
        </div>

        <p className="text-center mt-6 text-xs text-[#639922]">
          অ্যাকাউন্ট নেই?{" "}
          <Link href="/register" className="text-[#97C459] font-semibold underline ml-1">
            রেজিস্ট্রেশন করুন
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;