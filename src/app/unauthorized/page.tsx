import Link from 'next/link'

export default function Unauthorized() {
  return (
    <div>
      <h1>Unauthorized Access</h1>
      <p>You do not have permission to view this page.</p>
      <Link href="/">Return to Home</Link>
    </div>
  )
}