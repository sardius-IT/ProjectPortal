'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/seeker/dashboard', label: 'Dashboard' },
  { href: '/seeker/job-browser', label: 'Job Browser' },
  { href: '/seeker/applications', label: 'Applications' },
  { href: '/seeker/messages', label: 'Messages' },
  { href: '/seeker/profile', label: 'Profile' },
  { href: '/seeker/resume-builder', label: 'Resume Builder' },
]

export default function SeekerLayout({ children }) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-60 bg-white shadow-md p-4">
        <h2 className="text-xl font-bold mb-4">Job Seeker</h2>
        <nav className="space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-3 py-2 rounded-md text-sm font-medium ${
                pathname === link.href ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  )
}
