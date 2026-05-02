"use client";

import { authClient } from "@/app/lib/auth-client";
import { Avatar, AvatarFallback, AvatarImage } from "@heroui/react";
import Image from "next/image";
import logoimg from "../../public/min_main-logoo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const pathname = usePathname();
  const isActive = (path) => pathname === path;

  const handleLogout = async () => {
    await authClient.signOut();
  };

  return (
    <div className="bg-[#1a3a0a] px-4 sticky top-0 z-50">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-[#97C459] rounded-lg flex items-center justify-center text-lg">
            🌙
          </div>
          <h3 className="text-[#C0DD97] font-semibold text-lg">
            <Image
              src={logoimg}
              alt="Logo"
              width={110}
              height={110}
              className="ml-2"
            />
          </h3>
        </Link>

        {/* LINKS */}
        <ul className="flex items-center gap-8 text-sm">
          <li>
            <Link
              href="/"
              className={`pb-0.5 transition px-3 py-1 rounded-md ${
                isActive("/")
                  ? "bg-[#97C459] text-[#173404]"
                  : "text-[#97C459] hover:text-[#C0DD97]"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/all-animals"
              className={`px-3 py-1 rounded-md transition ${
                isActive("/all-animals")
                  ? "bg-[#97C459] text-[#173404]"
                  : "text-[#97C459] hover:text-[#C0DD97]"
              }`}
            >
              All Animals
            </Link>
          </li>

          {/* Profile link — only when logged in */}
          {user && (
            <li>
              {user && (
                <li>
                  <Link
                    href="/profile"
                    className={`px-3 py-1 rounded-md transition ${
                      isActive("/profile")
                        ? "bg-[#97C459] text-[#173404]"
                        : "text-[#97C459] hover:text-[#C0DD97]"
                    }`}
                  >
                    My Profile
                  </Link>
                </li>
              )}
            </li>
          )}
        </ul>

        {/* AUTH */}
        <div className="flex items-center gap-3">
          {isPending ? (
            <span className="text-xs text-[#639922]">Loading...</span>
          ) : user ? (
            // LOGGED IN
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-xs text-[#EAF3DE] font-medium leading-none">
                  {user?.name}
                </p>
                <p className="text-[10px] text-[#639922] mt-0.5">
                  {user?.email}
                </p>
              </div>
              <div className="relative">
                <Avatar>
                  <AvatarImage
                    src={user?.image || "/default-avatar.png"}
                    alt={user?.name || "User"}
                    referrerPolicy="no-referrer"
                    className="border-2 border-[#97C459] rounded-full"
                  />
                  <AvatarFallback className="bg-[#97C459] text-[#173404] font-bold">
                    {user?.name?.[0] || "U"}
                  </AvatarFallback>
                </Avatar>
                {/* Online dot */}
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#97C459] rounded-full border-2 border-[#1a3a0a]"></div>
              </div>
              <button
                onClick={handleLogout}
                className="text-xs text-[#97C459] border border-[#3B6D11] px-3 py-1.5 rounded-lg hover:bg-[#2d5a14] transition"
              >
                Logout
              </button>
            </div>
          ) : (
            // LOGGED OUT
            <div className="flex items-center gap-2">
              <Link
                href="/login"
                className="text-sm text-[#C0DD97] border border-[#3B6D11] px-4 py-1.5 rounded-lg hover:bg-[#2d5a14] transition"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="text-sm bg-[#97C459] text-[#173404] font-semibold px-4 py-1.5 rounded-lg hover:bg-[#C0DD97] transition"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
