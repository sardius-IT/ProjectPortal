'use client'

import { useEffect, useState } from 'react'

export default function UsersPage() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:8080/admin/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Failed to load users:', err)
        setLoading(false)
      })
  }, [])

  const handleApprove = (id) => {
    // Optionally: call backend to update status
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, status: 'Active' } : user
      )
    )
  }

  const handleBan = (id) => {
    // Optionally: call backend to update status
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, status: 'Banned' } : user
      )
    )
  }

  if (loading) return <div className="p-6">Loading users...</div>

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-4">Profile</th>
              <th className="p-4">Name</th>
              <th className="p-4">Role</th>
              <th className="p-4">Status</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t">
                <td className="p-4">
                  <img
                    src={user.profileImage}
                    alt={user.name}
                    className="w-10 h-10 rounded-full"
                  />
                </td>
                <td className="p-4">{user.name}</td>
                <td className="p-4">{user.role}</td>
                <td className="p-4">
                  <span
                    className={`px-2 py-1 rounded text-sm ${
                      user.status === 'Active'
                        ? 'bg-green-100 text-green-700'
                        : user.status === 'Banned'
                        ? 'bg-red-100 text-red-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="p-4 space-x-2">
                  <button
                    className="bg-green-500 text-white px-3 py-1 rounded disabled:opacity-50"
                    onClick={() => handleApprove(user.id)}
                    disabled={user.status === 'Active'}
                  >
                    Approve
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded disabled:opacity-50"
                    onClick={() => handleBan(user.id)}
                    disabled={user.status === 'Banned'}
                  >
                    Ban
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
