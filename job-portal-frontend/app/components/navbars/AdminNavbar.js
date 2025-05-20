'use client';

import { Menu, Search } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function AdminNavbar({ onToggleSidebar }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-gray-950 text-white flex items-center justify-between py-4 px-6 fixed top-0 left-0 w-full z-50 shadow-md">
      {/* Left: Sidebar Toggle + Title */}
      <div className="flex items-center space-x-4 min-w-[150px]">
        <button onClick={onToggleSidebar} className="md:hidden">
          <Menu size={24} />
        </button>
        <h1 className="text-xl font-semibold hidden md:block">Admin Panel</h1>
      </div>

      {/* Center: Search Input */}
      <div className="flex-1 flex justify-center px-4">
        <div className="hidden md:flex items-center bg-gray-800 px-3 py-1 rounded w-full max-w-md">
          <Search size={18} className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none text-sm text-white placeholder-gray-400 w-full"
          />
        </div>
      </div>

      {/* Right: Profile Section */}
      <div className="relative min-w-[100px] flex justify-end" ref={dropdownRef}>
        <div
          className="w-14 h-14 rounded-full overflow-hidden cursor-pointer"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <img
            src="/Screenshot 2025-05-03 124630.png"
            alt="Admin Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Dropdown */}
        {isDropdownOpen && (
          <div className="absolute right-0 mt-12 w-48 bg-white text-gray-800 rounded shadow-lg z-50">
            <Link
              href="/admin/profile"
              className="block px-4 py-2 hover:bg-gray-100"
              onClick={() => setIsDropdownOpen(false)}
            >
              Profile Details
            </Link>
            <Link
              href="/admin/change-password"
              className="block px-4 py-2 hover:bg-gray-100"
              onClick={() => setIsDropdownOpen(false)}
            >
              Change Password
            </Link>
            <button
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              onClick={() => {
                setIsDropdownOpen(false);
                console.log('Logging out...');
              }}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
