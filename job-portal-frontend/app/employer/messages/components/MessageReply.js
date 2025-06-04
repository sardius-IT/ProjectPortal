'use client'

import { useState } from 'react'

export default function MessageReply({ message, onClose }) {
  const [reply, setReply] = useState('')

  const handleSendReply = () => {
    fetch(`http://localhost:8080/employer/messages/${message.id}/reply`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ reply })
    })
      .then(() => {
        alert('Reply sent!')
        onClose()
      })
      .catch(() => {
        alert('Failed to send reply')
      })
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-xl">
        <h2 className="text-xl font-bold mb-2">Message from {message.senderName}</h2>
        <p className="mb-2 text-sm text-gray-600">{message.senderEmail}</p>
        <p className="mb-4 border p-3 bg-gray-50 rounded">{message.content}</p>

        <textarea
          className="w-full p-2 border rounded mb-4"
          rows="4"
          placeholder="Type your reply..."
          value={reply}
          onChange={(e) => setReply(e.target.value)}
        />

        <div className="flex justify-end space-x-2">
          <button
            className="px-4 py-2 bg-gray-200 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded"
            onClick={handleSendReply}
          >
            Send Reply
          </button>
        </div>
      </div>
    </div>
  )
}
