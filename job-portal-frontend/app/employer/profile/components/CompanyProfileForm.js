'use client'

import { useState, useEffect } from 'react'

export default function CompanyProfileForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    website: '',
    description: ''
  })

  useEffect(() => {
    // Load existing data (replace URL with real one)
    fetch('http://localhost:8080/employer/profile')
      .then(res => res.json())
      .then(data => setFormData(data))
      .catch(err => console.error('Load profile failed:', err))
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:8080/employer/profile', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(res => {
        if (!res.ok) throw new Error('Failed to save')
        alert('Profile updated!')
      })
      .catch(err => alert(err.message))
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow space-y-4">
      <div>
        <label className="block font-semibold">Company Name</label>
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded mt-1"
        />
      </div>
      <div>
        <label className="block font-semibold">Website</label>
        <input
          type="url"
          name="website"
          value={formData.website}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded mt-1"
        />
      </div>
      <div>
        <label className="block font-semibold">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          className="w-full border px-3 py-2 rounded mt-1"
        />
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Save Changes
      </button>
    </form>
  )
}
