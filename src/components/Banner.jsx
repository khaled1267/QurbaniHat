"use client";
import Link from "next/link";
import { GiCow } from "react-icons/gi";
import "animate.css";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="bg-[#1a3a0a] rounded-2xl px-6 md:px-8 py-8 md:py-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden mt-7 w-11/12 mx-auto">

      <div className="absolute -top-14 -right-14 w-52 h-52 bg-[#2d5a14] rounded-full"></div>
      <div className="absolute -bottom-10 left-1/3 w-36 h-36 bg-[#2d5a14] rounded-full opacity-50"></div>

      
      <div className="flex-1 z-10 text-center md:text-left w-full">

        <span className="animate__animated animate__fadeInDown inline-block bg-[#3B6D11] text-[#C0DD97] text-xs px-3 py-1 rounded-full font-medium mb-4">
          🌙 Eid ul-Adha 2025
        </span>

       
        <h1 className="animate__animated animate__fadeInLeft animate__delay-1s text-2xl sm:text-3xl font-semibold text-[#EAF3DE] leading-snug mb-3">
          বিশ্বস্ত{" "}
          <span className="text-[#97C459]">Qurbani</span>
          <br />
          পশুর বাজার
        </h1>

        <p className="animate__animated animate__fadeInLeft animate__delay-1s text-sm text-[#97C459] leading-relaxed mb-6 max-w-sm mx-auto md:mx-0">
          গরু, ছাগল, — সরাসরি খামার থেকে।
          সহজে বুকিং দিন, ঘরে বসেই।
        </p>

        <div className="animate__animated animate__fadeInUp animate__delay-1s flex gap-3 flex-wrap justify-center md:justify-start">
          <Link
            href="/all-animals"
            className="bg-[#97C459] text-[#173404] font-semibold text-sm px-6 py-2.5 rounded-lg hover:bg-[#C0DD97] transition"
          >
            <div className="flex items-center gap-2">
              <GiCow size={22} />
              <span>Browse Animals</span>
            </div>
          </Link>
          <Link
            href="/about"
            className="bg-transparent text-[#C0DD97] border border-[#3B6D11] text-sm px-5 py-2.5 rounded-lg hover:bg-[#2d5a14] transition"
          >
            আরও জানুন →
          </Link>
        </div>

        <div className="animate__animated animate__fadeInUp animate__delay-2s flex gap-6 mt-7 justify-center md:justify-start">
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

      <div className="animate__animated animate__fadeInRight z-10 text-center flex-shrink-0 w-full md:w-auto">
        <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 relative mx-auto animate-pulse">
          <Image
            src="https://i.ibb.co.com/60wsd8zD/giant-277504-removebg-preview.png"
            alt="Qurbani Cow"
            fill
            className="object-contain drop-shadow-lg"
            style={{
              filter: "drop-shadow(0px 10px 30px rgba(151, 196, 89, 0.5))"
            }}
          />
        </div>
        <p className="text-[#97C459] text-xs font-medium mt-2 md:mr-4">
          Premium Livestock
        </p>
      </div>

    </div>
  );
};

export default Banner;