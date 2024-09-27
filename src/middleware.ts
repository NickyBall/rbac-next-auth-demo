import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // We'll implement our role-based access control logic here later
  return NextResponse.next()
}

export const config = {
  matcher: ['/protected/:path*'],
}