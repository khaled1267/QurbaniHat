"use client";
import { useState } from "react";
import { authClient } from "../../lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    const loginSuccess = true;

    if (loginSuccess) {
      toast.success("Login Successful!"); 
     
    } else {
      toast.error("Login Failed! Please try again.");
    }
   
    if (name.length < 3) {
      return setError("নাম কমপক্ষে ৩ অক্ষরের হতে হবে");
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      return setError("সঠিক ইমেইল দিন");
    }
    if (password.length < 6) {
      return setError("পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে");
    }

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image: photo,
    });

    if (error) {
      return setError("রেজিস্ট্রেশন ব্যর্থ হয়েছে!");
    }

    router.push("/");
  };

  const handleGoogleLogin = async () => {
    const { data, error } = await authClient.signIn.social({
      provider: "google",
    });
    const loginSuccess = true;

    if (loginSuccess) {
      toast.success("Login Successful!"); 
    } else {
      toast.error("Login Failed! Please try again.");
    }
  };
  

  return (
    <div className="min-h-screen bg-[#0a1f05] flex items-center justify-center px-4 py-10">
      <div className="bg-[#1a3a0a] border border-[#3B6D11] rounded-2xl p-9 w-full max-w-md">
       
        <div className="text-center mb-6">
          <div className="w-14 h-14 bg-[#97C459] rounded-xl inline-flex items-center justify-center text-3xl">
            🐄
          </div>
          <h1 className="text-xl font-semibold text-[#EAF3DE] mt-3">
            নতুন অ্যাকাউন্ট
          </h1>
          <p className="text-xs text-[#639922] mt-1">
            রেজিস্ট্রেশন করুন এবং শুরু করুন
          </p>
        </div>

        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          
          <div>
            <label className="text-xs text-[#97C459] mb-1 block">নাম</label>
            <input
              type="text"
              name="name"
              placeholder="আপনার পুরো নাম"
              className="w-full px-4 py-2.5 rounded-lg border border-[#3B6D11] bg-[#0f2206] text-[#EAF3DE] text-sm placeholder-[#639922] focus:outline-none focus:border-[#97C459]"
            />
          </div>

         
          <div>
            <label className="text-xs text-[#97C459] mb-1 block">ইমেইল</label>
            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              className="w-full px-4 py-2.5 rounded-lg border border-[#3B6D11] bg-[#0f2206] text-[#EAF3DE] text-sm placeholder-[#639922] focus:outline-none focus:border-[#97C459]"
            />
          </div>

         
          <div>
            <label className="text-xs text-[#97C459] mb-1 block">
              ছবির লিংক (Photo URL)
            </label>
            <input
              type="url"
              name="photo"
              placeholder="https://example.com/photo.jpg"
              className="w-full px-4 py-2.5 rounded-lg border border-[#3B6D11] bg-[#0f2206] text-[#EAF3DE] text-sm placeholder-[#639922] focus:outline-none focus:border-[#97C459]"
            />
          </div>

     
          <div>
            <label className="text-xs text-[#97C459] mb-1 block">
              পাসওয়ার্ড
            </label>
            <input
              type="password"
              name="password"
              placeholder="কমপক্ষে ৬ অক্ষর"
              className="w-full px-4 py-2.5 rounded-lg border border-[#3B6D11] bg-[#0f2206] text-[#EAF3DE] text-sm placeholder-[#639922] focus:outline-none focus:border-[#97C459]"
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
            ✅ রেজিস্ট্রেশন করুন
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
          className="w-full bg-[#0f2206] text-[#C0DD97] text-sm py-2.5 rounded-lg border border-[#3B6D11] hover:bg-[#2d5a14] transition flex items-center justify-center gap-2"
        >
          
         <FaGoogle  /> Google দিয়ে Continue করুন
        </button>

     
        <p className="text-center mt-5 text-xs text-[#639922]">
          অ্যাকাউন্ট আছে?{" "}
          <Link
            href="/login"
            className="text-[#97C459] font-medium hover:underline"
          >
            লগইন করুন →
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
