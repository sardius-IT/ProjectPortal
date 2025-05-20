'use client';

import { useState } from 'react';
import AdminNavbar from '../components/navbars/AdminNavbar';
import AdminSidebar from '../components/sidebars/AdminSidebar';

export default function AdminLayoutClient({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen flex">
      <AdminSidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
      <div className="flex flex-col flex-1 ml-0 md:ml-48">
        <AdminNavbar onToggleSidebar={handleToggleSidebar} />
        <main className="mt-16 p-4 bg-gray-400 flex-grow">{children}</main>
      </div>
    </div>
  );
}


