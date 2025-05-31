// app/admin/layout.js
import '../globals.css'; // make sure global styles are applied
import AdminLayout from './AdminLayout';

export default function AdminRootLayout({ children }) {
  return (
    <html lang="en">
      <body className="m-0 p-0 overflow-hidden h-screen w-screen">
        <AdminLayout>{children}</AdminLayout>
      </body>
    </html>
  );
}
