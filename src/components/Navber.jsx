import Link from "next/link"


const Navbar = () => {
  return (
    <nav className="bg-[#1a3a0a] px-6 py-3 flex items-center justify-between sticky top-0 z-50">

      {/* LOGO */}
      

      {/* LINKS */}
      <div className="flex items-center gap-8">
        <Link href="/" className="text-[#EAF3DE] text-sm border-b border-[#97C459] pb-0.5">
          Home
        </Link>
        <Link href="/all-animals" className="text-[#97C459] text-sm">
          All Animals
        </Link>
      </div>

      {/* AUTH BUTTONS */}
      <div className="flex items-center gap-2">
        <Link href="/login" className="text-sm text-[#C0DD97] border border-[#3B6D11] px-4 py-1.5 rounded-lg">
          Login
        </Link>
        <Link href="/register" className="text-sm bg-[#97C459] text-[#173404] font-semibold px-4 py-1.5 rounded-lg">
          Register
        </Link>
      </div>

    </nav>
  )
}

export default Navbar