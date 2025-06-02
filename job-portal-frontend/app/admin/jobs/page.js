'use client';

import { useState } from 'react';

export default function JobsPage() {
  const initialJobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'TechCorp',
      status: 'PENDING',
      description: 'Work on building UI components.',
    },
    {
      id: 2,
      title: 'Backend Developer',
      company: 'CodeBase',
      status: 'APPROVED',
      description: 'Handle APIs and DB logic.',
    },
  ];

  const [jobs, setJobs] = useState(initialJobs);
  const [editingJob, setEditingJob] = useState(null);
  const [form, setForm] = useState({ title: '', description: '' });

  const approveJob = (id) => {
    setJobs(jobs.map(job => job.id === id ? { ...job, status: 'APPROVED' } : job));
  };

  const deleteJob = (id) => {
    if (confirm('Are you sure you want to delete this job?')) {
      setJobs(jobs.filter(job => job.id !== id));
    }
  };

  const openEdit = (job) => {
    setForm({ title: job.title, description: job.description });
    setEditingJob(job);
  };

  const handleSave = () => {
    setJobs(jobs.map(job => 
      job.id === editingJob.id ? { ...job, title: form.title, description: form.description } : job
    ));
    setEditingJob(null);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Job Post Management</h1>
      <div className="bg-white p-4 rounded shadow">
        {jobs.length === 0 ? (
          <p>No jobs found.</p>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b text-left">
                <th className="py-2">Title</th>
                <th>Company</th>
                <th>Status</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr key={job.id} className="border-b">
                  <td className="py-2">{job.title}</td>
                  <td>{job.company}</td>
                  <td>
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        job.status === 'APPROVED'
                          ? 'bg-green-200 text-green-800'
                          : 'bg-yellow-200 text-yellow-800'
                      }`}
                    >
                      {job.status}
                    </span>
                  </td>
                  <td className="text-right space-x-2">
                    {job.status !== 'APPROVED' && (
                      <button
                        onClick={() => approveJob(job.id)}
                        className="px-2 py-1 bg-green-600 text-white text-xs rounded"
                      >
                        Approve
                      </button>
                    )}
                    <button
                      onClick={() => openEdit(job)}
                      className="px-2 py-1 border text-xs rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteJob(job.id)}
                      className="px-2 py-1 bg-red-600 text-white text-xs rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {editingJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h2 className="text-lg font-bold mb-4">Edit Job</h2>
            <input
              className="w-full p-2 border mb-2 rounded"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="Job Title"
            />
            <textarea
              className="w-full p-2 border mb-4 rounded"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              placeholder="Job Description"
              rows={4}
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setEditingJob(null)}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
