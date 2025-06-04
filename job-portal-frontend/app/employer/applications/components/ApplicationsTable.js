'use client'

export default function ApplicationsTable({ applications, onView }) {
  return (
    <div className="bg-white rounded shadow overflow-x-auto">
      <table className="w-full table-auto text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4">Applicant</th>
            <th className="p-4">Job Title</th>
            <th className="p-4">Status</th>
            <th className="p-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <tr key={app.id} className="border-t">
              <td className="p-4">{app.applicantName}</td>
              <td className="p-4">{app.jobTitle}</td>
              <td className="p-4 capitalize">
                <span
                  className={`px-2 py-1 text-sm rounded ${
                    app.status === 'shortlisted'
                      ? 'bg-green-100 text-green-700'
                      : app.status === 'rejected'
                      ? 'bg-red-100 text-red-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}
                >
                  {app.status}
                </span>
              </td>
              <td className="p-4">
                <button
                  className="bg-blue-600 text-white px-3 py-1 rounded"
                  onClick={() => onView(app)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

