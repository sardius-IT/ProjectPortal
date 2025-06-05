'use client';

import { useEffect, useState, useRef } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from 'recharts';

import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';

export default function AnalyticsDashboard() {
  const [analytics, setAnalytics] = useState(null);
  const [error, setError] = useState(null);
  const stompClient = useRef(null);

  const COLORS = ['#8884d8', '#82ca9d'];

  useEffect(() => {
    const socket = new SockJS('http://localhost:8080/ws');
    stompClient.current = new Client({
      webSocketFactory: () => socket,
      reconnectDelay: 5000,
      onConnect: () => {
        stompClient.current.subscribe('/topic/analytics', (message) => {
          const data = JSON.parse(message.body);
          setAnalytics(data);
          setError(null);
        });
        stompClient.current.publish({ destination: '/app/requestAnalytics' });
      },
      onStompError: (frame) => setError(`Broker error: ${frame.headers['message']}`),
      onWebSocketError: () => setError('WebSocket error'),
    });

    stompClient.current.activate();

    return () => {
      stompClient.current.deactivate();
    };
  }, []);

  if (error) return <div className="p-6 text-red-600">Error: {error}</div>;
  if (!analytics) return <div className="p-6">Connecting to live analytics...</div>;

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Live Analytics Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Total Users</h2>
          <p className="text-2xl font-bold">{analytics.totalUsers}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Jobs Posted</h2>
          <p className="text-2xl font-bold">{analytics.jobsPosted}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Applications</h2>
          <p className="text-2xl font-bold">{analytics.applicationsReceived}</p>
        </div>
      </div>

      {/* Daily Applications Bar Chart */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Applications This Week</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={analytics.dailyApplications}>
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
              data={analytics.userTypes}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {analytics.userTypes.map((entry, index) => (
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
          {analytics.jobCategories.map((cat, index) => (
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
          {analytics.mostAppliedJobs.map((job, index) => (
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

