'use client'

import { useEffect, useState } from 'react'
import MessageTable from './components/MessageTable'
import MessageReply from './components/MessageReply'

export default function EmployerMessagesPage() {
  const [messages, setMessages] = useState([])
  const [selectedMessage, setSelectedMessage] = useState(null)

  useEffect(() => {
    fetch('http://localhost:8080/employer/messages') // Replace with actual API
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((err) => console.error('Error loading messages', err))
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Messages / Feedback</h1>

      <MessageTable
        messages={messages}
        onSelect={(msg) => setSelectedMessage(msg)}
      />

      {selectedMessage && (
        <MessageReply
          message={selectedMessage}
          onClose={() => setSelectedMessage(null)}
        />
      )}
    </div>
  )
}
