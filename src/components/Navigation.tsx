'use client'

import Link from 'next/link'
import { useSession } from 'next-auth/react'

export default function Navigation() {
  const { data: session } = useSession()

  return (
    <nav>
      <Link href="/">Home</Link>
      {session?.user.role === 'admin' && <Link href="/admin">Admin</Link>}
      {session?.user && <Link href="/user">User Area</Link>}
      {!session && <Link href="/api/auth/signin">Sign In</Link>}
      {session && <Link href="/api/auth/signout">Sign Out</Link>}
    </nav>
  )
}