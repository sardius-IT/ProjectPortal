'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  FileText,
  Briefcase,
  MessageSquare,
  Users,
  Calendar,
  User,
  BarChart2,
  CreditCard,

  X,
} from 'lucide-react';

export default function EmployeeSidebar({ isOpen, onClose }) {
  const pathname = usePathname();
const navItems = [
  { label: 'Dashboard', icon: <Home size={20} />, href: '/employee/dashboard' },
  { label: 'Post Job', icon: <FileText size={20} />, href: '/employee/post-job' },
  { label: 'My Job Listings', icon: <Briefcase size={20} />, href: '/employee/job-listings' },
  { label: 'Applications', icon: <Users size={20} />, href: '/employee/applications' },
  { label: 'Shortlisted Candidates', icon: <User size={20} />, href: '/employee/shortlisted' },
  { label: 'Interviews', icon: <Calendar size={20} />, href: '/employee/interviews' },
  { label: 'Company Profile', icon: <User size={20} />, href: '/employee/company-profile' },
  { label: 'Billing / Subscription', icon: <CreditCard size={20} />, href: '/employee/billing' },

 
];

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed left-0 h-full w-52 bg-gray-900 text-white z-40 transform transition-transform duration-300 ease-in-out py-14
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
      >
        {/* Close button on mobile */}
        <div className="flex justify-end md:hidden p-4">
          <button onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className="mt-3 px-4 text-xs">
          <nav className="flex flex-col space-y-2">
            {navItems.map(({ label, icon, href }) => (
              <Link
                key={href}
                href={href}
                onClick={onClose}
                className={`flex items-center space-x-3 p-2 rounded hover:bg-blue-600 transition ${
                  pathname === href ? 'bg-blue-700 font-semibold' : ''
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
