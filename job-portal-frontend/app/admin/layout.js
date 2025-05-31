import Link from 'next/link';

const navItems = [
  { href: "/admin/dashboard", label: "Dashboard" },
  { href: "/admin/users", label: "Users" },
  { href: "/admin/jobs", label: "Jobs" },
  { href: "/admin/applications", label: "Applications" },
  { href: "/admin/feedback", label: "Feedback" },
  { href: "/admin/setting", label: "Settings" },
];

export default function AdminLayout({ children }) {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-900 text-white p-5 space-y-8">
        <div className="text-2xl font-bold">Sardius Admin</div>
        <nav className="flex flex-col space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-300 hover:bg-gray-700 px-4 py-2 rounded transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
      <div className="flex-1 bg-gray-100 overflow-y-auto">
        <header className="bg-white shadow p-4 text-right">
          <span className="text-sm text-gray-600">Admin • Logout</span>
        </header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}


