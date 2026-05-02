"use client";
import Link from "next/link";
import { GiCow } from "react-icons/gi";

const Banner = () => {
  return (
    <div className="bg-[#1a3a0a] rounded-2xl px-8 py-12 flex items-center justify-between gap-6 relative overflow-hidden mt-7 w-11/12 mx-auto">

      {/* Background circles */}
      <div className="absolute -top-14 -right-14 w-52 h-52 bg-[#2d5a14] rounded-full"></div>
      <div className="absolute -bottom-10 left-1/3 w-36 h-36 bg-[#2d5a14] rounded-full opacity-50"></div>

      {/* LEFT SIDE */}
      <div className="flex-1 z-10">

        {/* Tag */}
        <span className="inline-block bg-[#3B6D11] text-[#C0DD97] text-xs px-3 py-1 rounded-full font-medium mb-4">
          🌙 Eid ul-Adha 2025
        </span>

        {/* Title */}
        <h1 className="text-3xl font-semibold text-[#EAF3DE] leading-snug mb-3">
          বিশ্বস্ত{" "}
          <span className="text-[#97C459]">Qurbani</span>
          <br />
          পশুর বাজার
        </h1>

        {/* Description */}
        <p className="text-sm text-[#97C459] leading-relaxed mb-6 max-w-sm">
          গরু, ছাগল, ভেড়া — সরাসরি খামার থেকে।
          সহজে বুকিং দিন, ঘরে বসেই।
        </p>

        {/* Buttons */}
        <div className="flex gap-3 flex-wrap">
          <Link
            href="/all-animals"
            className="bg-[#97C459] text-[#173404] font-semibold text-sm px-6 py-2.5 rounded-lg hover:bg-[#C0DD97] transition" 
          >
             <div className="flex items-center gap-2">
             <div><GiCow size={25}/></div> 
             <div>সব পশু দেখুন</div>
             </div>
          </Link>
          <Link
            href="/about"
            className="bg-transparent text-[#C0DD97] border border-[#3B6D11] text-sm px-5 py-2.5 rounded-lg hover:bg-[#2d5a14] transition"
          >
            আরও জানুন →
          </Link>
        </div>

        {/* Stats */}
        <div className="flex gap-6 mt-7">
          <div>
            <h3 className="text-lg font-semibold text-[#C0DD97]">120+</h3>
            <p className="text-[10px] text-[#639922] mt-0.5">পশু উপলব্ধ</p>
          </div>
          <div className="w-px bg-[#2d5a14]"></div>
          <div>
            <h3 className="text-lg font-semibold text-[#C0DD97]">18</h3>
            <p className="text-[10px] text-[#639922] mt-0.5">জেলা</p>
          </div>
          <div className="w-px bg-[#2d5a14]"></div>
          <div>
            <h3 className="text-lg font-semibold text-[#C0DD97]">500+</h3>
            <p className="text-[10px] text-[#639922] mt-0.5">সফল বুকিং</p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="z-10 text-center flex-shrink-0">
        <div className="w-40 h-40 bg-[#2d5a14] rounded-full flex items-center justify-center border-4 border-[#3B6D11] animate-bounce">
          <span className="text-7xl">🐄</span>
        </div>
        <p className="text-[#97C459] text-xs font-medium mt-3">
          Premium Livestock
        </p>
      </div>

    </div>
  );
};

export default Banner;