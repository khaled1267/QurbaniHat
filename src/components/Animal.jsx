import Image from "next/image";
import Link from "next/link";
import React from "react";
import "animate.css";

const Animal = ({ animal }) => {
  return (
    <div className="animate__animated animate__fadeInUp">
      <div className="bg-[#1a3a0a] border border-[#3B6D11] rounded-xl overflow-hidden hover:border-[#97C459] transition group hover:animate__pulse">
        
        <div className="relative h-69 bg-[#2d5a14] flex items-center justify-center overflow-hidden">
          <Image
            src={animal.image}
            alt={animal.name}
            fill
            className="object-cover group-hover:scale-105 transition duration-300"
          />

          <span className="absolute top-2 left-2 bg-[#1a3a0a]/80 text-[#97C459] text-[10px] px-2 py-1 rounded-full animate__animated animate__fadeInLeft">
            {animal.category}
          </span>

          <span className="absolute top-2 right-2 bg-[#97C459] text-[#173404] text-[10px] font-semibold px-2 py-1 rounded-full animate__animated animate__fadeInRight">
            {animal.type === "Cow" ? "🐄" : "🐐"} {animal.type}
          </span>
        </div>

        <div className="p-4 animate__animated animate__fadeInUp animate__delay-1s">
          <h3 className="text-sm font-semibold text-[#EAF3DE] mb-1">
            {animal.name}
          </h3>

          <div className="flex items-center gap-3 text-[10px] text-[#639922] mb-3">
            📍 {animal.location}
          </div>

          <p className="text-[10px] text-[#3B6D11] bg-[#0f2206] px-2 py-1 rounded-md mb-3 inline-block">
            {animal.breed}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-[#97C459] animate__animated animate__zoomIn">
              ৳{animal.price.toLocaleString()}
            </span>

            <Link
              href={`/all-animals/${animal.id}`}
              className="text-xs bg-[#97C459] text-[#173404] font-semibold px-3 py-1.5 rounded-lg hover:bg-[#C0DD97] transition hover:animate__bounce"
            >
              Details →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Animal;