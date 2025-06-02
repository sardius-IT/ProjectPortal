'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import FeedbackStatusFilter from './components/FeedbackStatusFilter';
import FeedbackTable from './components/FeedbackTable';

export default function FeedbackPage() {
  const [feedbackList, setFeedbackList] = useState([]);
  const [status, setStatus] = useState('');

  useEffect(() => {
    const fetchFeedback = async () => {
      const res = await fetch(`/api/admin/feedback${status ? `?status=${status}` : ''}`);
      const data = await res.json();
      setFeedbackList(data);
    };
    fetchFeedback();
  }, [status]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Feedback Inbox</h1>
      <FeedbackStatusFilter status={status} setStatus={setStatus} />
      <FeedbackTable feedbackList={feedbackList} />
    </div>
  );
}
