"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

const AnimalDetails = ({ animal }) => {
  const router = useRouter();

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [submitted, setSubmitted] = useState(false);

  // যদি animal ডেটা না থাকে তবে এই লোডিং/এরর স্টেট দেখাবে

  const handleBooking = (e) => {
    e.preventDefault();
    if (!user) {
      toast.error("বুকিং করতে আগে লগইন করুন!");
      router.push("/login");
      return;
    }
    toast.success("বুকিং সফল হয়েছে! 🎉");
    setSubmitted(true);
    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-[#0a1f05] py-8 px-4">
      <div className="max-w-6xl mx-auto">
      
      

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEFT SIDE - Info */}
          <div className="flex flex-col gap-4">
            <div className="bg-[#1a3a0a] border border-[#3B6D11] rounded-2xl p-4 relative">
              <div className="flex justify-between items-center mb-3">
                <span className="bg-[#2d5a14] text-[#97C459] text-xs px-3 py-1 rounded-full">
                  {animal.category}
                </span>
                <span className="bg-[#97C459] text-[#173404] text-xs font-semibold px-3 py-1 rounded-full">
                  {animal.type === "Cow" ? "🐄" : "🐐"} {animal.type}
                </span>
              </div>

              <div className="h-80  relative flex items-center justify-center overflow-hidden rounded-xl">
                {animal.image && (
                  <Image
                    src={animal.image}
                    alt={animal.name || "Animal Image"}
                    fill
                    className="object-contain"
                  />
                )}
              </div>

              <div className="flex justify-end mt-3">
                <span className="bg-[#3B6D11] text-[#C0DD97] text-xs px-3 py-1 rounded-full">
                  ✅ Available
                </span>
              </div>
            </div>

            <div className="bg-[#1a3a0a] border border-[#3B6D11] rounded-2xl p-6">
              <h1 className="text-2xl font-bold text-[#EAF3DE] mb-2">
                {animal.name}
              </h1>
              <span className="text-xs text-[#639922] bg-[#2d5a14] px-3 py-1 rounded-full inline-block mb-4">
                {animal.breed} Breed
              </span>

              {/* Price with Optional Chaining */}
              <div className="text-3xl font-bold text-[#97C459] mb-5">
                ৳{animal.price?.toLocaleString() || "0"}
              </div>

              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="bg-[#0f2206] border border-[#2d5a14] rounded-xl p-3">
                  <p className="text-[10px] text-[#639922] mb-1">⚖️ ওজন</p>
                  <p className="text-base font-bold text-[#EAF3DE]">
                    {animal.weight}{" "}
                    <span className="text-xs font-normal">kg</span>
                  </p>
                </div>
                <div className="bg-[#0f2206] border border-[#2d5a14] rounded-xl p-3">
                  <p className="text-[10px] text-[#639922] mb-1">🎂 বয়স</p>
                  <p className="text-base font-bold text-[#EAF3DE]">
                    {animal.age}{" "}
                    <span className="text-xs font-normal">বছর</span>
                  </p>
                </div>
                <div className="bg-[#0f2206] border border-[#2d5a14] rounded-xl p-3">
                  <p className="text-[10px] text-[#639922] mb-1">📍 লোকেশন</p>
                  <p className="text-base font-bold text-[#EAF3DE]">
                    {animal.location}
                  </p>
                </div>
                <div className="bg-[#0f2206] border border-[#2d5a14] rounded-xl p-3">
                  <p className="text-[10px] text-[#639922] mb-1">🏷️ ধরন</p>
                  <p className="text-base font-bold text-[#EAF3DE]">
                    {animal.category}
                  </p>
                </div>
              </div>

              <div className="bg-[#0f2206] border border-[#2d5a14] rounded-xl p-4 mb-4">
                <p className="text-[10px] text-[#639922] mb-2">📝 বিবরণ</p>
                <p className="text-sm text-[#C0DD97] leading-relaxed">
                  {animal.description}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Booking Form */}
          <div>
            <div className="bg-[#1a3a0a] border border-[#97C459] rounded-2xl p-6 sticky top-8">
              <h2 className="text-lg font-semibold text-[#EAF3DE] mb-1">
                📋 বুকিং ফর্ম
              </h2>
              <p className="text-xs text-[#639922] mb-5">
                নিচের তথ্য দিয়ে বুকিং নিশ্চিত করুন
              </p>

              {!user && (
                <div className="bg-red-900/20 border border-red-800 rounded-xl px-4 py-3 mb-5">
                  <p className="text-xs text-red-400">
                    ⚠️ বুকিং করতে আগে{" "}
                    <span
                      onClick={() => router.push("/login")}
                      className="text-[#97C459] underline cursor-pointer"
                    >
                      লগইন করুন
                    </span>
                  </p>
                </div>
              )}

              {submitted && (
                <div className="bg-green-900/20 border border-green-700 rounded-xl px-4 py-4 mb-5 text-center">
                  <div className="text-3xl mb-2">🎉</div>
                  <p className="text-sm font-semibold text-[#97C459]">
                    বুকিং সফল হয়েছে!
                  </p>
                </div>
              )}

              <form onSubmit={handleBooking} className="flex flex-col gap-4">
                <div>
                  <label className="text-xs text-[#97C459] mb-1 block">
                    আপনার নাম
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    defaultValue={user?.name || ""}
                    className="w-full px-4 py-3 rounded-xl border border-[#3B6D11] bg-[#0f2206] text-[#EAF3DE] text-sm focus:outline-none focus:border-[#97C459]"
                  />
                </div>

                <div>
                  <label className="text-xs text-[#97C459] mb-1 block">
                    ইমেইল
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    defaultValue={user?.email || ""}
                    className="w-full px-4 py-3 rounded-xl border border-[#3B6D11] bg-[#0f2206] text-[#EAF3DE] text-sm focus:outline-none focus:border-[#97C459]"
                  />
                </div>

                <div>
                  <label className="text-xs text-[#97C459] mb-1 block">
                    ফোন নম্বর
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="01XXXXXXXXX"
                    className="w-full px-4 py-3 rounded-xl border border-[#3B6D11] bg-[#0f2206] text-[#EAF3DE] text-sm focus:outline-none focus:border-[#97C459]"
                  />
                </div>

                <div>
                  <label className="text-xs text-[#97C459] mb-1 block">
                    ঠিকানা
                  </label>
                  <textarea
                    name="address"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-[#3B6D11] bg-[#0f2206] text-[#EAF3DE] text-sm focus:outline-none focus:border-[#97C459] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#97C459] text-[#173404] font-semibold text-sm py-3 rounded-xl hover:bg-[#C0DD97] transition"
                >
                  ✅ বুকিং নিশ্চিত করুন
                </button>
              </form>

              {/* Price Summary with Optional Chaining */}
              <div className="mt-5 bg-[#0f2206] rounded-xl p-4 border border-[#2d5a14]">
                <p className="text-xs text-[#639922] mb-3">
                  💰 মূল্য সারসংক্ষেপ
                </p>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-[#C0DD97]">{animal.name}</span>
                  <span className="text-sm font-semibold text-[#97C459]">
                    ৳{animal.price?.toLocaleString() || "0"}
                  </span>
                </div>
                <div className="h-px bg-[#2d5a14] my-2"></div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-[#EAF3DE]">মোট</span>
                  <span className="text-base font-bold text-[#97C459]">
                    ৳{animal.price?.toLocaleString() || "0"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimalDetails;
