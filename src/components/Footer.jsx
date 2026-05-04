
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-[#0f2206] border-t border-[#2d5a14] mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">

      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-[#97C459] rounded-lg flex items-center justify-center text-lg">
                🌙
              </div>
              <span className="text-[#C0DD97] font-semibold text-lg">
                <div className="flex items-center gap-1">
                  <div>🐄</div>
                  <div><Image src="https://i.ibb.co.com/tp2GDrpg/min-main-logoo.png" alt="Logo" width={80} height={80} /></div>
                  </div> 
              </span>
            </Link>
            <p className="text-xs text-[#639922] leading-relaxed mb-4">
              বাংলাদেশের বিশ্বস্ত কোরবানির পশু বুকিং প্ল্যাটফর্ম। সরাসরি খামার থেকে আপনার দোরগোড়ায়।
            </p>
            
            
            <div className="flex gap-3">
              <a
                href="#"
                className="w-8 h-8 bg-[#2d5a14] border border-[#3B6D11] rounded-lg flex items-center justify-center text-sm text-[#C0DD97] hover:bg-[#3B6D11] transition"
              >
               <FaFacebook />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-[#2d5a14] border border-[#3B6D11] rounded-lg flex items-center justify-center text-sm text-[#C0DD97] hover:bg-[#3B6D11] transition"
              >
               <FaInstagramSquare />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-[#2d5a14] border border-[#3B6D11] rounded-lg flex items-center justify-center text-sm text-[#C0DD97] hover:bg-[#3B6D11] transition"
              >
               <FaTwitter />
              </a>
            </div>
          </div>

         

  
          <div>
            <h3 className="text-sm font-semibold text-[#C0DD97] mb-4">
              পশুর ধরন
            </h3>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link
                  href="/animals"
                  className="text-xs text-[#639922] hover:text-[#97C459] transition flex items-center gap-1.5"
                >
                  🐄 গরু
                </Link>
              </li>
              <li>
                <Link
                  href="/animals"
                  className="text-xs text-[#639922] hover:text-[#97C459] transition flex items-center gap-1.5"
                >
                  🐐 ছাগল
                </Link>
              </li>
              <li>
                <span className="text-xs text-[#639922] flex items-center gap-1.5">
                  🏷️ Large Animal
                </span>
              </li>
              <li>
                <span className="text-xs text-[#639922] flex items-center gap-1.5">
                  🏷️ Small Animal
                </span>
              </li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-sm font-semibold text-[#C0DD97] mb-4">
              যোগাযোগ করুন
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2">
                <span className="text-sm mt-0.5">📞</span>
                <div>
                  <p className="text-[10px] text-[#639922]">ফোন</p>
                  <p className="text-xs text-[#C0DD97]">01700-000000</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sm mt-0.5">✉️</span>
                <div>
                  <p className="text-[10px] text-[#639922]">ইমেইল</p>
                  <p className="text-xs text-[#C0DD97]">info@qurbanihat.com</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sm mt-0.5">📍</span>
                <div>
                  <p className="text-[10px] text-[#639922]">ঠিকানা</p>
                  <p className="text-xs text-[#C0DD97]">ঢাকা, বাংলাদেশ</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sm mt-0.5">🕐</span>
                <div>
                  <p className="text-[10px] text-[#639922]">সময়</p>
                  <p className="text-xs text-[#C0DD97]">সকাল ৯টা — রাত ৯টা</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

     
        <div className="h-px bg-[#2d5a14] mb-6"></div>

       
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#639922]">
            © 2025 QurbaniHat. সর্বস্বত্ব সংরক্ষিত।
          </p>

        
          <div className="flex items-center gap-2 bg-[#2d5a14] border border-[#3B6D11] px-4 py-2 rounded-full animate-pulse">
            <span className="text-sm">🌙</span>
            <span className="text-xs text-[#C0DD97] font-medium animate-pulse">
              Eid ul-Adha 2025 Mubarak
            </span>
            <span className="text-sm">🐄</span>
          </div>

          <div className="flex gap-4">
            <span className="text-xs text-[#639922] hover:text-[#97C459] cursor-pointer transition">
              Privacy Policy
            </span>
            <span className="text-xs text-[#639922] hover:text-[#97C459] cursor-pointer transition">
              Terms of Service
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;