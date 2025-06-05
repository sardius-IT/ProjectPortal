'use client'

import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'

export default function NavbarWrapper({ children }) {
  const { data: session } = useSession()

  return (
    <div>
      <nav className="bg-white shadow p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span className="font-bold text-xl text-blue-600">Job Portal</span>
          <div className="space-x-4">
            {session ? (
              <>
                <span className="text-gray-700">Hi, {session.user.email}</span>
                <button
                  onClick={() => signOut()}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/auth/login" className="text-blue-600 font-medium hover:underline">
                  Login
                </Link>
                <Link
                  href="/auth/register"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  )
}
