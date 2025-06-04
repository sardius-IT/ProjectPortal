'use client'

import { useEffect, useState } from 'react'

export default function ActivityLog() {
  const [logs, setLogs] = useState([])

  useEffect(() => {
    // Replace with real API
    fetch('http://localhost:8080/employer/dashboard/activity')
      .then(res => res.json())
      .then(data => setLogs(data))
      .catch(err => console.error('Failed to load activity logs:', err))
  }, [])

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
      {logs.length === 0 ? (
        <p className="text-gray-500">No recent activity.</p>
      ) : (
        <ul className="space-y-2">
          {logs.map((log, idx) => (
            <li key={idx} className="text-sm text-gray-700">
              {log.message} <span className="text-gray-400">– {log.timestamp}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
