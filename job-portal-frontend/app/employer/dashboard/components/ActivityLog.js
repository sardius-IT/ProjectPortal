'use client'

import { useEffect, useState } from 'react'

export default function StatsCards() {
  const [stats, setStats] = useState({
    totalJobs: 0,
    totalApplications: 0,
    totalViews: 0
  })

  useEffect(() => {
    // Replace with real API
    fetch('http://localhost:8080/employer/dashboard/stats')
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(err => console.error('Failed to load stats:', err))
  }, [])

  const cards = [
    { label: 'Jobs Posted', value: stats.totalJobs, color: 'bg-blue-100 text-blue-700' },
    { label: 'Applications', value: stats.totalApplications, color: 'bg-green-100 text-green-700' },
    { label: 'Profile Views', value: stats.totalViews, color: 'bg-yellow-100 text-yellow-700' }
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {cards.map((card, idx) => (
        <div key={idx} className={`p-4 rounded shadow ${card.color}`}>
          <div className="text-sm font-semibold">{card.label}</div>
          <div className="text-2xl font-bold">{card.value}</div>
        </div>
      ))}
    </div>
  )
}
