'use client';

import { usePathname } from 'next/navigation';
import MainNavbar from '../navbars/MainNavbar';

export default function NavbarWrapper() {
  const pathname = usePathname();

  if (
    ['/admin', '/employer', '/candidate'].some((prefix) =>
      pathname?.startsWith(prefix)
    )
  ) {
    return null;
  }

  return <MainNavbar />;
}
