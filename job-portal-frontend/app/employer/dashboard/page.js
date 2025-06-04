'use client'

import StatsCards from './components/StatsCards'
import ActivityLog from './components/ActivityLog'

export default function EmployerDashboardPage() {
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold">Employer Dashboard</h1>
      <StatsCards />
      <ActivityLog />
    </div>
  )
}
