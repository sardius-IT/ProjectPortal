// ✅ Correct
export default function CandidateSidebar() {
  return (
    <aside className="w-64 bg-gray-100 p-4 border-r">
      <ul className="space-y-4">
        <li><a href="/candidate/dashboard">Dashboard</a></li>
        <li><a href="/candidate/profile">Profile</a></li>
      </ul>
    </aside>
  );
}
