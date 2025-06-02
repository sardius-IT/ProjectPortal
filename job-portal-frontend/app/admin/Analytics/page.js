'use client';

import { useEffect, useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from 'recharts';

export default function AnalyticsDashboard() {
  const [stats, setStats] = useState({
    totalUsers: 1200,
    jobsPosted: 340,
    applicationsReceived: 875,
  });

  const dailyApplications = [
    { day: 'Mon', applications: 120 },
    { day: 'Tue', applications: 150 },
    { day: 'Wed', applications: 110 },
    { day: 'Thu', applications: 180 },
    { day: 'Fri', applications: 140 },
    { day: 'Sat', applications: 90 },
    { day: 'Sun', applications: 85 },
  ];

  const userTypes = [
    { name: 'Employers', value: 300 },
    { name: 'Job Seekers', value: 900 },
  ];

  const jobCategories = [
    { name: 'Engineering', count: 120 },
    { name: 'Design', count: 90 },
    { name: 'Marketing', count: 70 },
  ];

  const mostAppliedJobs = [
    { title: 'Frontend Developer', count: 150 },
    { title: 'UI/UX Designer', count: 100 },
    { title: 'Backend Developer', count: 95 },
  ];

  const COLORS = ['#8884d8', '#82ca9d'];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Analytics Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Total Users</h2>
          <p className="text-2xl font-bold">{stats.totalUsers}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Jobs Posted</h2>
          <p className="text-2xl font-bold">{stats.jobsPosted}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Applications</h2>
          <p className="text-2xl font-bold">{stats.applicationsReceived}</p>
        </div>
      </div>

      {/* Daily Applications Bar Chart */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Applications This Week</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={dailyApplications}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="applications" fill="#4f46e5" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart for User Types */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">User Type Distribution</h2>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={userTypes}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {userTypes.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Top Job Categories */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Top Job Categories</h2>
        <ul className="space-y-1">
          {jobCategories.map((cat, index) => (
            <li key={index} className="flex justify-between">
              <span>{cat.name}</span>
              <span>{cat.count}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Most Applied Jobs */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Most Applied Jobs</h2>
        <ul className="space-y-1">
          {mostAppliedJobs.map((job, index) => (
            <li key={index} className="flex justify-between">
              <span>{job.title}</span>
              <span>{job.count}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
