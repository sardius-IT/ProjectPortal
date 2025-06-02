'use client';

import { useState } from 'react';

export default function SettingsForm({ initialSettings }) {
  const [form, setForm] = useState(initialSettings);
  const [saving, setSaving] = useState(false);

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleFileChange = async (e, key) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch('/api/admin/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();
    handleChange(key, data.url);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    await fetch('/api/admin/settings', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    setSaving(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block font-semibold">Homepage Title</label>
        <input
          type="text"
          value={form.homepageTitle || ''}
          onChange={(e) => handleChange('homepageTitle', e.target.value)}
          className="border rounded p-2 w-full"
        />
      </div>

      <div>
        <label className="block font-semibold">Homepage Subtitle</label>
        <textarea
          value={form.homepageSubtitle || ''}
          onChange={(e) => handleChange('homepageSubtitle', e.target.value)}
          className="border rounded p-2 w-full"
        />
      </div>

      <div>
        <label className="block font-semibold">Upload Banner</label>
        <input
          type="file"
          onChange={(e) => handleFileChange(e, 'bannerImage')}
          className="mt-1"
        />
        {form.bannerImage && (
          <img src={form.bannerImage} alt="Banner" className="mt-2 h-24 object-contain" />
        )}
      </div>

      <div>
        <label className="block font-semibold">Logo</label>
        <input
          type="file"
          onChange={(e) => handleFileChange(e, 'logo')}
        />
        {form.logo && (
          <img src={form.logo} alt="Logo" className="mt-2 h-12 object-contain" />
        )}
      </div>

      <div>
        <label className="block font-semibold">Enable User Registration</label>
        <input
          type="checkbox"
          checked={form.registrationEnabled || false}
          onChange={(e) => handleChange('registrationEnabled', e.target.checked)}
          className="ml-2"
        />
      </div>

      <div>
        <label className="block font-semibold">Terms and Policies</label>
        <textarea
          value={form.terms || ''}
          onChange={(e) => handleChange('terms', e.target.value)}
          className="border rounded p-2 w-full"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        disabled={saving}
      >
        {saving ? 'Saving...' : 'Save Settings'}
      </button>
    </form>
  );
}
