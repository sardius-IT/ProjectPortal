'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { isAdmin } from '@/lib/checkAdminRole'; // ✅ Added
import { toast } from 'react-hot-toast';

export default function UsersPage() {
  const router = useRouter();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (!isAdmin()) {
      router.push('/login');
    } else {
      setUsers([
        { id: 1, name: 'John Doe', role: 'Job Seeker', status: 'Active' },
        { id: 2, name: 'Jane Smith', role: 'Employer', status: 'Pending' },
      ]);
    }
  }, []);

  const handleApprove = (id) => {
    toast.success(`User ${id} approved`);
    // TODO: connect API
  };

  const handleBan = (id) => {
    toast.error(`User ${id} banned`);
    // TODO: connect API
  };

  return (
    <div className="dark:text-white">
      <h1 className="text-xl font-bold mb-4">User Management</h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-x-auto">
        <table className="w-full text-left border-collapse text-sm">
          <thead className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Role</th>
              <th className="p-4">Status</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t dark:border-gray-700">
                <td className="p-4">{user.name}</td>
                <td className="p-4">{user.role}</td>
                <td className="p-4">{user.status}</td>
                <td className="p-4 space-x-2">
                  <button
                    onClick={() => handleApprove(user.id)}
                    className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleBan(user.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
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
  );
}
