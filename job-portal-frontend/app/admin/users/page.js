'use client';

import { useEffect, useState } from 'react';

export default function UsersPage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/api/users') // Replace with your actual API route
      .then(res => res.json())
      .then(data => setUser(data));
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'In progress': return 'bg-blue-500';
      case 'Rejected': return 'bg-red-400';
      case 'Hired': return 'bg-green-500';
      default: return 'bg-gray-400';
    }
  };

  if (!user) return <div className="p-6 text-black">Loading...</div>;

  return (
    <div className="p-6 text-black">
      {/* Header with Profile */}
      <div className="bg-indigo-900 text-white p-6 rounded-lg flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src="/profile.jpg" alt="Profile" className="w-16 h-16 rounded-full" />
          <div>
            <h2 className="text-lg font-semibold">{user.name}</h2>
            <p className="text-sm">{user.title}</p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex space-x-4">
          <div className="bg-blue-500 px-4 py-2 rounded-lg text-center">
            <p className="text-xl font-bold">{user.referrals.filter(r => r.status === 'In progress').length}</p>
            <p className="text-sm">In progress</p>
          </div>
          <div className="bg-red-400 px-4 py-2 rounded-lg text-center">
            <p className="text-xl font-bold">{user.referrals.filter(r => r.status === 'Rejected').length}</p>
            <p className="text-sm">Rejected</p>
          </div>
          <div className="bg-green-500 px-4 py-2 rounded-lg text-center">
            <p className="text-xl font-bold">{user.referrals.filter(r => r.status === 'Hired').length}</p>
            <p className="text-sm">Hired</p>
          </div>
          <div className="text-center ml-4">
            <p className="text-2xl font-bold">{user.points}</p>
            <p className="text-sm">Points</p>
            <div className="w-32 bg-gray-300 rounded-full h-2 mt-2">
              <div
                className="bg-green-400 h-2 rounded-full"
                style={{ width: `${(user.points / 2000) * 100}%` }}
              />
            </div>
            <p className="text-xs mt-1">{2000 - user.points} left until level {user.level + 1}</p>
          </div>
        </div>
      </div>

      {/* Referrals List */}
      <h3 className="mt-8 text-xl font-bold">Your referrals</h3>
      <div className="mt-4 space-y-4">
        {user.referrals.map((ref, index) => (
          <div key={index} className="flex items-center justify-between bg-gray-50 p-4 rounded-md shadow-sm">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 font-bold text-gray-700">
                {ref.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className="font-semibold">{ref.name}</p>
                <p className="text-sm text-gray-600">{ref.email}</p>
              </div>
            </div>
            <span className={`px-4 py-1 rounded-full text-white ${getStatusColor(ref.status)}`}>
              {ref.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
