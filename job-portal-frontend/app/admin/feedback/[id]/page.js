'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function FeedbackDetailPage() {
  const { id } = useParams();
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/admin/feedback/${id}`);
      const data = await res.json();
      setFeedback(data);
    };
    fetchData();
  }, [id]);

  const updateStatus = async (newStatus) => {
    await fetch(`/api/admin/feedback/${id}/status?status=${newStatus}`, {
      method: 'PUT',
    });
    setFeedback(prev => ({ ...prev, status: newStatus }));
  };

  if (!feedback) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Feedback from {feedback.name}</h1>
      <p><strong>Email:</strong> {feedback.email}</p>
      <p><strong>Subject:</strong> {feedback.subject}</p>
      <p><strong>Submitted:</strong> {new Date(feedback.submittedAt).toLocaleString()}</p>
      <div className="mt-4 p-4 border bg-gray-50 rounded">
        <strong>Message:</strong><br />{feedback.message}
      </div>
      <div className="mt-4">
        <label className="block mb-1 font-semibold">Update Status:</label>
        <select
          value={feedback.status}
          onChange={(e) => updateStatus(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="NEW">New</option>
          <option value="READ">Read</option>
          <option value="REPLIED">Replied</option>
        </select>
      </div>
    </div>
  );
}
