"use client";
import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@heroui/react";
import { Profileupdate } from "@/components/Profileupdate";
import { authClient } from "../../lib/auth-client";
import Image from "next/image";

const ProfileCard = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  if (isPending) {
    return (
      <div className="min-h-screen bg-[#0a1f05] flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-3 animate-bounce">🐄</div>
          <p className="text-[#639922] text-sm">লোড হচ্ছে...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a1f05] flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        {/* TOP CARD */}
        <div className="bg-[#1a3a0a] border border-[#3B6D11] rounded-2xl p-8 text-center relative overflow-hidden">
          {/* BG decoration */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#2d5a14] rounded-full opacity-40"></div>
          <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-[#2d5a14] rounded-full opacity-30"></div>

          {/* Tag */}
          <div className="flex justify-center mb-5 z-10 relative">
            <span className="bg-[#3B6D11] text-[#C0DD97] text-xs px-3 py-1 rounded-full">
              🌙 আমার প্রোফাইল
            </span>
          </div>

          {/* Avatar */}
          <div className="flex justify-center mb-5 z-10 relative">
            <div className="relative">
              <Avatar
                style={{ width: "100px", height: "100px" }}
                className="border-4 border-[#97C459]"
              >
                <AvatarImage
                  src={user?.image}
                  alt={user?.name || "User"}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <AvatarFallback className="text-3xl font-bold bg-[#97C459] text-[#173404]">
                  {user?.name?.[0] || "U"}
                </AvatarFallback>
              </Avatar>
              {/* Online dot */}
              <div className="absolute bottom-1 right-1 w-4 h-4 bg-[#97C459] rounded-full border-2 border-[#1a3a0a]"></div>
            </div>
          </div>

          {/* Name & Email */}
          <div className="mb-6 z-10 relative">
            <h2 className="text-2xl font-bold text-[#EAF3DE] mb-1">
              {user?.name}
            </h2>
            <p className="text-sm text-[#639922]">{user?.email}</p>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-2 gap-3 mb-6 z-10 relative">
            <div className="bg-[#0f2206] border border-[#2d5a14] rounded-xl p-3">
              <p className="text-[10px] text-[#639922] mb-1">📧 ইমেইল</p>
              <p className="text-xs text-[#EAF3DE] font-medium truncate">
                {user?.email}
              </p>
            </div>
            <div className="bg-[#0f2206] border border-[#2d5a14] rounded-xl p-3">
              <p className="text-[10px] text-[#639922] mb-1">👤 নাম</p>
              <p className="text-xs text-[#EAF3DE] font-medium truncate">
                {user?.name}
              </p>
            </div>
          </div>

          {/* Update Button */}
          <div className="z-10 relative">
            <Profileupdate />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
