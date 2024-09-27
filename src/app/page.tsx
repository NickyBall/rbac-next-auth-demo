import { getServerSession } from 'next-auth/next'
import Navigation from '@/components/Navigation'
import { authOptions } from '@/lib/auth'

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <div>
      <Navigation />
      <h1>Welcome to our Role-Based Access Control Demo</h1>
      {session ? (
        <p>You are logged in as {session.user?.name} with role: {session.user?.role}</p>
      ) : (
        <p>You are not logged in</p>
      )}
    </div>
  )
}