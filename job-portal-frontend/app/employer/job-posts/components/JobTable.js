'use client';

import { useEffect, useState } from 'react';
import { Pencil, Trash2 } from 'lucide-react';

export default function JobTable({ jobs, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border rounded-md shadow">
        <thead>
          <tr className="bg-gray-100 text-gray-700 text-left text-sm">
            <th className="py-2 px-4">Title</th>
            <th className="py-2 px-4">Company</th>
            <th className="py-2 px-4">Location</th>
            <th className="py-2 px-4">Status</th>
            <th className="py-2 px-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.id} className="border-t hover:bg-gray-50 text-sm">
              <td className="py-2 px-4">{job.title}</td>
              <td className="py-2 px-4">{job.company}</td>
              <td className="py-2 px-4">{job.location}</td>
              <td className="py-2 px-4">{job.status}</td>
              <td className="py-2 px-4 text-right space-x-2">
                <button
                  className="text-blue-500 hover:text-blue-700"
                  onClick={() => onEdit(job)}
                >
                  <Pencil size={16} />
                </button>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => onDelete(job.id)}
                >
                  <Trash2 size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
