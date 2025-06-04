'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { href: '/employer/dashboard', label: 'Dashboard' },
  { href: '/employer/job-posts', label: 'Job Posts' },
  { href: '/employer/applications', label: 'Applications' },
  { href: '/employer/messages', label: 'Messages' },
  { href: '/employer/analytics', label: 'Analytics' },
  { href: '/employer/profile', label: 'Profile' },
];

export default function EmployerLayout({ children }) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [desktopSidebarVisible, setDesktopSidebarVisible] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileSidebarOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-gray-100">
      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-transform duration-300 ${
          mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div
          className="absolute inset-0 bg-black opacity-50"
          onClick={() => setMobileSidebarOpen(false)}
        />
        <aside className="relative w-64 bg-blue-800 text-white h-full p-5 z-50 space-y-8">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold">Employer</span>
            <button
              onClick={() => setMobileSidebarOpen(false)}
              className="text-white"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileSidebarOpen(false)}
                className={`px-4 py-2 rounded transition ${
                  pathname === item.href
                    ? "bg-gray-700 text-white"
                    : 'text-gray-300 hover:bg-blue-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>
      </div>

      {/* Desktop Sidebar */}
      <aside
        className={`hidden md:flex flex-col ${
          desktopSidebarVisible ? 'w-64' : 'w-16'
        } transition-all duration-300 bg-gray-900 text-white p-3 space-y-4`}
      >
        {/* Toggle Button */}
        <div className="flex justify-end">
          <button
            onClick={() => setDesktopSidebarVisible(!desktopSidebarVisible)}
            className="text-white hover:text-gray-300"
          >
            {desktopSidebarVisible ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Logo */}
        {desktopSidebarVisible && (
          <div className="text-2xl font-bold px-1">Employer</div>
        )}

        {/* Navigation */}
        <nav className="flex flex-col space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setDesktopSidebarVisible(false)}
              className={`px-4 py-2 rounded transition ${
                pathname === item.href
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-blue-700'
              }`} 
            >
              {desktopSidebarVisible ? item.label : item.label.charAt(0)}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow px-4 py-3 flex items-center justify-between md:justify-end">
          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileSidebarOpen(true)}
          >
            <Menu size={24} />
          </button>

          {/* Employer Profile Link */}
          <div className="flex items-center space-x-3">
            <Link
              href="/employer/profile"
              className="flex items-center space-x-2 text-gray-700"
            >
              <span className="text-lg">• Employer</span>
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4 scrollbar-hide">
          {children}
        </main>
      </div>
    </div>
  );
}

