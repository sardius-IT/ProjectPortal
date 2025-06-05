'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function SeekerDashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/login')
    }
  }, [status])

  if (status === 'loading') {
    return <div className="p-6">Loading your dashboard...</div>
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Welcome, {session?.user?.name || 'Job Seeker'} 👋</h1>

      {/* 🎯 My Applications */}
      <section className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2">🎯 My Applications</h2>
        <p className="text-sm text-gray-600">You’ve applied to 5 jobs. 2 are under review.</p>
      </section>

      {/* 💾 Saved Jobs */}
      <section className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2">💾 Saved Jobs</h2>
        <p className="text-sm text-gray-600">3 jobs saved for later.</p>
      </section>

      {/* 👤 Profile Completion */}
      <section className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2">👤 Profile Completion</h2>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
          <div className="bg-blue-600 h-2.5 rounded-full w-[80%]"></div>
        </div>
        <p className="text-sm text-gray-600">Your profile is 80% complete.</p>
      </section>

      {/* 📅 Recent Jobs */}
      <section className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2">📅 Recent Jobs</h2>
        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
          <li>Frontend Developer at TechCorp</li>
          <li>UI/UX Designer at CreativeSoft</li>
        </ul>
      </section>

      {/* 🛎️ Notifications */}
      <section className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2">🛎️ Notifications</h2>
        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
          <li>Interview scheduled for Backend Dev - June 10</li>
          <li>New job matches based on your profile</li>
        </ul>
      </section>
    </div>
  )
}
