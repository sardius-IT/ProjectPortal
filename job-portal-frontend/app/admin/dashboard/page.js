export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow">Total Users: 1,200</div>
        <div className="bg-white p-6 rounded-lg shadow">Jobs Posted: 340</div>
        <div className="bg-white p-6 rounded-lg shadow">Applications: 875</div>
      </div>
    </div>
  );
}
