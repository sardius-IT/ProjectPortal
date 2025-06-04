'use client';

import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function DynamicChartPage() {
  const thisWeekData = [
    { day: 'Mon', applications: 120 },
    { day: 'Tue', applications: 150 },
    { day: 'Wed', applications: 110 },
    { day: 'Thu', applications: 180 },
    { day: 'Fri', applications: 140 },
    { day: 'Sat', applications: 90 },
    { day: 'Sun', applications: 85 },
  ];

  const lastWeekData = [
    { day: 'Mon', applications: 90 },
    { day: 'Tue', applications: 130 },
    { day: 'Wed', applications: 105 },
    { day: 'Thu', applications: 120 },
    { day: 'Fri', applications: 160 },
    { day: 'Sat', applications: 100 },
    { day: 'Sun', applications: 70 },
  ];

  const [dailyApplications, setDailyApplications] = useState(thisWeekData);

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Applications This Week</h1>

      <div className="flex space-x-4 mb-4">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded"
          onClick={() => setDailyApplications(thisWeekData)}
        >
          This Week
        </button>
        <button
          className="px-4 py-2 bg-gray-600 text-white rounded"
          onClick={() => setDailyApplications(lastWeekData)}
        >
          Last Week
        </button>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={dailyApplications}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="applications" fill="#4f46e5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
