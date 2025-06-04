'use client'

import { useState, useEffect } from 'react'

export default function LogoUploader() {
  const [logoUrl, setLogoUrl] = useState(null)
  const [preview, setPreview] = useState(null)

  useEffect(() => {
    // Load existing logo (if any)
    fetch('http://localhost:8080/employer/logo')
      .then(res => res.json())
      .then(data => setLogoUrl(data.logoUrl))
      .catch(err => console.error('Load logo failed:', err))
  }, [])

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (!file) return
    setPreview(URL.createObjectURL(file))

    const formData = new FormData()
    formData.append('file', file)

    fetch('http://localhost:8080/employer/logo', {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(data => {
        setLogoUrl(data.logoUrl)
        alert('Logo uploaded successfully!')
      })
      .catch(err => alert('Upload failed'))
  }

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Company Logo</h2>
      {preview || logoUrl ? (
        <img
          src={preview || logoUrl}
          alt="Logo"
          className="h-24 w-24 object-cover rounded mb-2 border"
        />
      ) : (
        <p className="text-gray-500 mb-2">No logo uploaded.</p>
      )}
      <input type="file" accept="image/*" onChange={handleFileChange} />
    </div>
  )
}
