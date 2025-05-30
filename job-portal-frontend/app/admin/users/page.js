export default function UsersPage() {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">User Management</h1>
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Role</th>
              <th className="p-4">Status</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-4">John Doe</td>
              <td className="p-4">Job Seeker</td>
              <td className="p-4">Active</td>
              <td className="p-4 space-x-2">
                <button className="bg-green-500 text-white px-3 py-1 rounded">Approve</button>
                <button className="bg-red-500 text-white px-3 py-1 rounded">Ban</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
