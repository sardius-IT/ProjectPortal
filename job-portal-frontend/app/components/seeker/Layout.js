
// app/seeker/layout.js
import '../globals.css'; // Reuse global styles (Tailwind, resets, etc.)
import SeekerLayout from '@/components/seeker/Layout'; // Adjust path if needed

export default function SeekerRootLayout({ children }) {
  return (
    <html lang="en">
      <body className="m-0 p-0 overflow-hidden h-screen w-screen">
        <SeekerLayout>{children}</SeekerLayout>
      </body>
    </html>
  );
}
