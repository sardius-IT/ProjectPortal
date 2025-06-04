// app/employer/layout.js
import '../globals.css'; // Reuse global styles (Tailwind, resets, etc.)
import EmployerLayout from './EmployerLayout'; // Import the layout we defined earlier

export default function EmployerRootLayout({ children }) {
  return (
    <html lang="en">
      <body className="m-0 p-0 overflow-hidden h-screen w-screen">
        <EmployerLayout>{children}</EmployerLayout>
      </body>
    </html>
  );
}
