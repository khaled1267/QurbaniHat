import { NextResponse } from 'next/server'

export function proxy(request) {

  
  const session = request.cookies.get('better-auth.session_token')?.value

  if (!session) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/all-animals/:path", "/profile"],
}