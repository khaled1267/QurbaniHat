"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, AvatarFallback, AvatarImage } from "@heroui/react";
import Image from "next/image";
import logoimg from "../../public/min_main-logoo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const pathname = usePathname();
  const isActive = (path) => pathname === path;
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    await authClient.signOut();
    setMenuOpen(false);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/all-animals", label: "All Animals" },
    { href: "/profile", label: "My Profile" },
  ];

  return (
    <div className="bg-[#1a3a0a] px-4 sticky top-0 z-50">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
        
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-[#97C459] rounded-lg flex items-center justify-center text-lg">
            🌙
          </div>
          <Image
            src={logoimg}
            alt="Logo"
            width={110}
            height={110}
            className="ml-2"
          />
        </Link>

       
        <ul className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`pb-0.5 transition px-3 py-1 rounded-md ${
                  isActive(link.href)
                    ? "bg-[#97C459] text-[#173404]"
                    : "text-[#97C459] hover:text-[#C0DD97]"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        
        <div className="hidden md:flex items-center gap-3">
          {isPending ? (
          <div className="flex items-center gap-2">
  
  <div className="w-4 h-4 border-2 border-[#639922] border-t-transparent rounded-full animate-spin"></div>
  
  <span className="text-xs text-[#639922] animate__animated animate__fadeIn animate__infinite">
    Loading...
  </span>
</div>
          ) : user ? (
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-xs text-[#EAF3DE] font-medium leading-none">
                  Hello, {user?.name}
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

        
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 z-50"
        >
          <span
            className={`w-6 h-0.5 bg-[#97C459] rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`w-4 h-0.5 bg-[#97C459] rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-[#97C459] rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </button>
      </nav>

     
      {menuOpen && (
        <div className="md:hidden bg-[#1a3a0a] border-t border-[#2d5a14] pb-4 px-4">
          
          <ul className="flex flex-col gap-1 mt-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-4 py-2.5 rounded-lg text-sm transition ${
                    isActive(link.href)
                      ? "bg-[#97C459] text-[#173404] font-semibold"
                      : "text-[#97C459] hover:bg-[#2d5a14]"
                  }`}
                >
                  {link.href === "/"
                    ? "🏠"
                    : link.href === "/all-animals"
                      ? "🐄"
                      : "👤"}{" "}
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

         
          <div className="h-px bg-[#2d5a14] my-3"></div>

          
          {isPending ? (
            <p className="text-xs text-[#639922] px-4">Loading...</p>
          ) : user ? (
            <div className="flex flex-col gap-3 px-2">
              
              <div className="flex items-center gap-3 bg-[#0f2206] rounded-xl p-3">
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
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#97C459] rounded-full border-2 border-[#0f2206]"></div>
                </div>
                <div>
                  <p className="text-xs text-[#EAF3DE] font-medium">
                    Hello, {user?.name}
                  </p>
                  <p className="text-[10px] text-[#639922] mt-0.5">
                    {user?.email}
                  </p>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="w-full text-sm text-[#97C459] border border-[#3B6D11] py-2.5 rounded-lg hover:bg-[#2d5a14] transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-2 px-2">
              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="w-full text-center text-sm text-[#C0DD97] border border-[#3B6D11] py-2.5 rounded-lg hover:bg-[#2d5a14] transition"
              >
                Login
              </Link>
              <Link
                href="/register"
                onClick={() => setMenuOpen(false)}
                className="w-full text-center text-sm bg-[#97C459] text-[#173404] font-semibold py-2.5 rounded-lg hover:bg-[#C0DD97] transition"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
