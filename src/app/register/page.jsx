"use client"
import { useState } from 'react'
import { authClient } from '../lib/auth-client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Register = () => {
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const photo = e.target.photo.value
    const password = e.target.password.value

    // Validation
    if (name.length < 3) {
      return setError('নাম কমপক্ষে ৩ অক্ষরের হতে হবে')
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      return setError('সঠিক ইমেইল দিন')
    }
    if (password.length < 6) {
      return setError('পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে')
    }

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image: photo,
    })

    if (error) {
      return setError('রেজিস্ট্রেশন ব্যর্থ হয়েছে!')
    }

    router.push('/login')
  }

  const handleGoogleLogin = async () => {
    const { data, error } = await authClient.signIn.social({
      provider: "google",
    })
  }

  return (
    <div className="min-h-screen bg-[#0a1f05] flex items-center justify-center px-4 py-10">
      <div className="bg-[#1a3a0a] border border-[#3B6D11] rounded-2xl p-9 w-full max-w-md">

        {/* TOP ICON */}
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

        {/* FORM */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          {/* Name */}
          <div>
            <label className="text-xs text-[#97C459] mb-1 block">
              নাম
            </label>
            <input
              type="text"
              name="name"
              placeholder="আপনার পুরো নাম"
              className="w-full px-4 py-2.5 rounded-lg border border-[#3B6D11] bg-[#0f2206] text-[#EAF3DE] text-sm placeholder-[#639922] focus:outline-none focus:border-[#97C459]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-xs text-[#97C459] mb-1 block">
              ইমেইল
            </label>
            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              className="w-full px-4 py-2.5 rounded-lg border border-[#3B6D11] bg-[#0f2206] text-[#EAF3DE] text-sm placeholder-[#639922] focus:outline-none focus:border-[#97C459]"
            />
          </div>

          {/* Photo URL */}
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

          {/* Password */}
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

          {/* Error */}
          {error && (
            <p className="text-xs text-red-400 bg-red-900/20 border border-red-800 px-3 py-2 rounded-lg">
              ⚠️ {error}
            </p>
          )}

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-[#97C459] text-[#173404] font-semibold text-sm py-2.5 rounded-lg hover:bg-[#C0DD97] transition mt-1"
          >
            ✅ রেজিস্ট্রেশন করুন
          </button>

          {/* Reset Button */}
          <button
            type="reset"
            onClick={() => setError('')}
            className="w-full bg-transparent text-[#97C459] text-sm py-2.5 rounded-lg border border-[#3B6D11] hover:bg-[#2d5a14] transition"
          >
            রিসেট করুন
          </button>

        </form>

        {/* DIVIDER */}
        <div className="flex items-center gap-3 my-5">
          <hr className="flex-1 border-[#3B6D11]" />
          <span className="text-xs text-[#639922]">অথবা</span>
          <hr className="flex-1 border-[#3B6D11]" />
        </div>

        {/* GOOGLE LOGIN */}
        <button
          onClick={handleGoogleLogin}
          className="w-full bg-[#0f2206] text-[#C0DD97] text-sm py-2.5 rounded-lg border border-[#3B6D11] hover:bg-[#2d5a14] transition flex items-center justify-center gap-2"
        >
          <svg width="16" height="16" viewBox="0 0 48 48">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
          </svg>
          Google দিয়ে Continue করুন
        </button>

        {/* Login Link */}
        <p className="text-center mt-5 text-xs text-[#639922]">
          অ্যাকাউন্ট আছে?{' '}
          <Link href="/login" className="text-[#97C459] font-medium hover:underline">
            লগইন করুন →
          </Link>
        </p>

      </div>
    </div>
  )
}

export default Register