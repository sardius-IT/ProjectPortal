'use client';

import { useEffect, useState } from 'react';

export default function ApplicationsPage() {
  const [applications, setApplications] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filters, setFilters] = useState({ job: '', applicant: '', status: '' });

  // Simulated data
  useEffect(() => {
    const mockApplications = [
      {
        id: 1,
        jobTitle: 'Frontend Developer',
        applicant: 'Alice Johnson',
        status: 'Pending',
        resume: 'https://example.com/resume/alice.pdf',
        score: 88,
      },
      {
        id: 2,
        jobTitle: 'Backend Developer',
        applicant: 'Bob Smith',
        status: 'Shortlisted',
        resume: 'https://example.com/resume/bob.pdf',
        score: 92,
      },
      {
        id: 3,
        jobTitle: 'UI Designer',
        applicant: 'Charlie Brown',
        status: 'Rejected',
        resume: 'https://example.com/resume/charlie.pdf',
        score: 70,
      },
    ];
    setApplications(mockApplications);
    setFiltered(mockApplications);
  }, []);

  // Filter logic
  useEffect(() => {
    const result = applications.filter((app) => {
      return (
        app.jobTitle.toLowerCase().includes(filters.job.toLowerCase()) &&
        app.applicant.toLowerCase().includes(filters.applicant.toLowerCase()) &&
        app.status.toLowerCase().includes(filters.status.toLowerCase())
      );
    });
    setFiltered(result);
  }, [filters, applications]);

  const updateStatus = (id, newStatus) => {
    const updated = applications.map((app) =>
      app.id === id ? { ...app, status: newStatus } : app
    );
    setApplications(updated);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Application Tracking</h1>

      <div className="mb-4 grid grid-cols-1 md:grid-cols-3 gap-2">
        <input
          type="text"
          placeholder="Filter by Job"
          className="border p-2 rounded"
          onChange={(e) => setFilters({ ...filters, job: e.target.value })}
        />
        <input
          type="text"
          placeholder="Filter by Applicant"
          className="border p-2 rounded"
          onChange={(e) => setFilters({ ...filters, applicant: e.target.value })}
        />
        <select
          className="border p-2 rounded"
          onChange={(e) => setFilters({ ...filters, status: e.target.value })}
        >
          <option value="">All Statuses</option>
          <option value="Pending">Pending</option>
          <option value="Shortlisted">Shortlisted</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>

      <div className="bg-white p-4 rounded shadow overflow-x-auto">
        {filtered.length === 0 ? (
          <p>No applications found.</p>
        ) : (
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="border-b">
                <th className="py-2">Job</th>
                <th>Applicant</th>
                <th>Status</th>
                <th>Score</th>
                <th>Resume</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((app) => (
                <tr key={app.id} className="border-b">
                  <td className="py-2">{app.jobTitle}</td>
                  <td>{app.applicant}</td>
                  <td>
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        app.status === 'Shortlisted'
                          ? 'bg-green-200 text-green-800'
                          : app.status === 'Rejected'
                          ? 'bg-red-200 text-red-800'
                          : 'bg-yellow-200 text-yellow-800'
                      }`}
                    >
                      {app.status}
                    </span>
                  </td>
                  <td>{app.score}</td>
                  <td>
                    <a
                      href={app.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      View
                    </a>
                  </td>
                  <td className="text-right space-x-2">
                    {app.status !== 'Shortlisted' && (
                      <button
                        onClick={() => updateStatus(app.id, 'Shortlisted')}
                        className="px-2 py-1 bg-green-600 text-white text-xs rounded"
                      >
                        Shortlist
                      </button>
                    )}
                    {app.status !== 'Rejected' && (
                      <button
                        onClick={() => updateStatus(app.id, 'Rejected')}
                        className="px-2 py-1 bg-red-600 text-white text-xs rounded"
                      >
                        Reject
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
