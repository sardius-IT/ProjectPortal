export default function SettingsPage() {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Site Settings</h1>
      <div className="bg-white p-6 rounded-lg shadow space-y-4">
        <label className="block">
          <span className="text-gray-700">Homepage Banner Text</span>
          <input type="text" className="mt-1 block w-full border rounded p-2" />
        </label>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Save Changes</button>
      </div>
    </div>
  );
}
