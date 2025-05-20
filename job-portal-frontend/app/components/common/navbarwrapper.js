'use client';

import { usePathname } from 'next/navigation';
import MainNavbar from '../navbars/MainNavbar';

export default function NavbarWrapper() {
  const pathname = usePathname();

  // Hide MainNavbar on dashboard routes:
  if (
    pathname.startsWith('/admin') ||
    pathname.startsWith('/employer') ||
    pathname.startsWith('/candidate')
  ) {
    return null; // don't render MainNavbar on dashboards
  }

  return <MainNavbar />;
}
