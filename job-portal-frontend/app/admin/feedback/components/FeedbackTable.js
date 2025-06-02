import Link from 'next/link';

export default function FeedbackTable({ feedbackList }) {
  return (
    <table className="min-w-full border text-sm">
      <thead className="bg-gray-100 text-left">
        <tr>
          <th className="p-2">Name</th>
          <th className="p-2">Email</th>
          <th className="p-2">Subject</th>
          <th className="p-2">Status</th>
          <th className="p-2">Date</th>
          <th className="p-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {feedbackList.map((f) => (
          <tr key={f.id} className="border-b hover:bg-gray-50">
            <td className="p-2">{f.name}</td>
            <td className="p-2">{f.email}</td>
            <td className="p-2">{f.subject}</td>
            <td className="p-2">{f.status}</td>
            <td className="p-2">{new Date(f.submittedAt).toLocaleDateString()}</td>
            <td className="p-2">
              <Link href={`/admin/feedback/${f.id}`} className="text-blue-600 underline">
                View
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
