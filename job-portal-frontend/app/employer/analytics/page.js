'use client'

import { useEffect, useState } from 'react'
import ViewsChart from './components/ViewsChart'
import ApplicationsChart from './components/ApplicationsChart'

export default function EmployerAnalyticsPage() {
  const [analytics, setAnalytics] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3000/employer/analytics')
      .then(res => res.json())
      .then(data => setAnalytics(data))
      .catch(err => console.error('Error loading analytics:', err))
  }, [])

  if (!analytics) return <div className="p-6">Loading...</div>

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ViewsChart data={analytics.views} />
        <ApplicationsChart data={analytics.applications} />
      </div>
    </div>
  )
}
