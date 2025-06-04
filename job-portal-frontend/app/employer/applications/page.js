'use client'

import { useEffect, useState } from 'react'
import ApplicationsTable from './components/ApplicationsTable'
import ApplicationModal from './components/ApplicationModal'

export default function EmployerApplicationsPage() {
  const [applications, setApplications] = useState([])
  const [selectedApp, setSelectedApp] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:8080/employer/applications') // Replace with actual endpoint
      .then((res) => res.json())
      .then((data) => {
        setApplications(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Error fetching applications:', err)
        setLoading(false)
      })
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Applications Received</h1>
      {loading ? (
        <p>Loading applications...</p>
      ) : (
        <>
          <ApplicationsTable
            applications={applications}
            onView={(app) => setSelectedApp(app)}
          />
          {selectedApp && (
            <ApplicationModal
              application={selectedApp}
              onClose={() => setSelectedApp(null)}
            />
          )}
        </>
      )}
    </div>
  )
}
