'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  Search,
  MessageSquare,
  BarChart2,
  FileText,
  X,
} from 'lucide-react';

export default function AdminSidebar({ isOpen, onClose }) {
  const pathname = usePathname();

  const navItems = [
    { label: 'Dashboard', icon: <Home size={20} />, href: '/admin/dashboard' },
    { label: 'User Management', icon: <Search size={20} />, href: '/admin/users' },
    { label: 'job post Management ', icon: <FileText size={20} />, href: '/admin/jobs' },
    { label: 'Applications', icon: <FileText size={20} />, href: '/admin/applications' },
    { label: 'feedback', icon: <BarChart2 size={20} />, href: '/admin/feedback' },
    { label: 'setting', icon: <FileText size={20} />, href: '/admin/setting' },

  ];

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed   left-0 h-full w-60 bg-gray-950 text-white z-40 transform transition-transform duration-300 ease-in-out  py-14
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
      >
        {/* Close button on mobile */}
        <div className="flex justify-end md:hidden p-4">
          <button onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className="mt-4 px-4 text-xs">
          <nav className="flex flex-col space-y-2">
            {navItems.map(({ label, icon, href }) => (
              <Link
                key={href}
                href={href}
                onClick={onClose}
                className={`flex items-center space-x-3 p-2 rounded hover:bg-purple-600 transition ${
                  pathname === href ? 'bg-purple-700 font-semibold' : ''
                }`}
              >
                {icon}
                <span>{label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      {/* Overlay when sidebar is open (on mobile) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={onClose}
        />
      )}
    </>
  );
}

