'use client';

import { useState } from 'react';
import EmployerNavbar from '../components/navbars/EmployerNavbar';
import EmployerSidebar from '../components/sidebars/EmployerSidebar';

export default function EmployerLayoutClient({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen flex">
      <EmployerSidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
      <div className="flex flex-col flex-1 ml-0 md:ml-40">
        <EmployerNavbar onToggleSidebar={handleToggleSidebar} />
        <main className="mt-16 p-4 bg-gray-500 flex-grow">{children}</main>
      </div>
    </div>
  );
}

