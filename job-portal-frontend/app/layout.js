// app/layout.js
import './globals.css';
import NavbarWrapper from './components/common/navbarwrapper';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <NavbarWrapper />
        <main className="flex-grow container mx-auto px-4 py-6">{children}</main>
     
      </body>
    </html>
  );
}
