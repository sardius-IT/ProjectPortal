'use client'

export default function MessageTable({ messages, onSelect }) {
  return (
    <div className="bg-white rounded shadow overflow-x-auto">
      <table className="w-full table-auto text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4">From</th>
            <th className="p-4">Subject</th>
            <th className="p-4">Status</th>
            <th className="p-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((msg) => (
            <tr key={msg.id} className="border-t">
              <td className="p-4">{msg.senderName} ({msg.senderEmail})</td>
              <td className="p-4">{msg.subject}</td>
              <td className="p-4 capitalize">
                <span
                  className={`px-2 py-1 text-sm rounded ${
                    msg.status === 'replied'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}
                >
                  {msg.status}
                </span>
              </td>
              <td className="p-4">
                <button
                  className="bg-blue-600 text-white px-3 py-1 rounded"
                  onClick={() => onSelect(msg)}
                >
                  View / Reply
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
