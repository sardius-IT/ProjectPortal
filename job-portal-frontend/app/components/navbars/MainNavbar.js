import Link from 'next/link';

export default function MainNavbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold">
        JobPortal
      </Link>
      <div className="space-x-6">
        <Link href="/auth/login" className="hover:underline">
          Login
        </Link>
        <Link href="/auth/register" className="hover:underline">
          Register
        </Link>
      </div>
    </nav>
  );
}
