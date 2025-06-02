'use client';

import { useEffect, useState } from 'react';
import SettingsForm from './components/SettingsForm';

export default function SiteSettingsPage() {
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    const fetchSettings = async () => {
      const res = await fetch('/api/admin/settings');
      const data = await res.json();
      setSettings(data);
    };
    fetchSettings();
  }, []);

  if (!settings) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Site Settings</h1>
      <SettingsForm initialSettings={settings} />
    </div>
  );
}

