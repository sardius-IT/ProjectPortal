// app/layout.js
import './globals.css';
import NavbarWrapper from './components/common/navbarwrapper';

export const metadata = {
  title: 'Sardius Job Portal',
  description: 'Job portal for employers and candidates',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <NavbarWrapper />
        <main className="flex-grow container mx-auto ">
          {children}
        </main>
      </body>
    </html>
  );
}

