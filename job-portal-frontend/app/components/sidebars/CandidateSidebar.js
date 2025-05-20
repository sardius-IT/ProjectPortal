// components/sidebars/CandidateSidebar.js
import Link from 'next/link';

export default function CandidateSidebar() {
  return (
    <aside className="w-64 bg-indigo-900 text-indigo-100 flex flex-col min-h-screen p-6 space-y-6">
      <nav className="flex flex-col space-y-4">
        <Link href="/candidate/dashboard">
          <a className="hover:bg-indigo-700 rounded px-3 py-2">Dashboard</a>
        </Link>
        <Link href="/candidate/jobs">
          <a className="hover:bg-indigo-700 rounded px-3 py-2">Jobs</a>
        </Link>
        <Link href="/candidate/applications">
          <a className="hover:bg-indigo-700 rounded px-3 py-2">Applications</a>
        </Link>
      </nav>
    </aside>
  );
}
