'use client';

import { useState } from 'react';
import JobTable from './components/JobTable';
import JobForm from './components/JobForm';

export default function JobPostsPage() {
  // Mock job data — replace with API fetch later
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'TechCorp',
      location: 'Remote',
      description: 'React, Tailwind, Next.js',
      status: 'active',
    },
    {
      id: 2,
      title: 'Backend Engineer',
      company: 'DataFlow Inc.',
      location: 'Bangalore',
      description: 'Spring Boot, Java, MySQL',
      status: 'draft',
    },
  ]);

  const [selectedJob, setSelectedJob] = useState(null); // for edit
  const [showForm, setShowForm] = useState(false);

  const handleCreateClick = () => {
    setSelectedJob(null);
    setShowForm(true);
  };

  const handleSubmit = (jobData) => {
    if (selectedJob) {
      // Edit existing job
      setJobs((prev) =>
        prev.map((job) =>
          job.id === selectedJob.id ? { ...job, ...jobData } : job
        )
      );
    } else {
      // Create new job
      const newJob = {
        id: Date.now(),
        ...jobData,
      };
      setJobs((prev) => [newJob, ...prev]);
    }
    setShowForm(false);
    setSelectedJob(null);
  };

  const handleEdit = (job) => {
    setSelectedJob(job);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    const confirmDelete = confirm('Are you sure you want to delete this job?');
    if (confirmDelete) {
      setJobs((prev) => prev.filter((job) => job.id !== id));
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setSelectedJob(null);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Job Posts</h1>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={handleCreateClick}
        >
          + Create Job
        </button>
      </div>

      {showForm && (
        <JobForm
          initialData={selectedJob}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
        />
      )}

      <JobTable jobs={jobs} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}
