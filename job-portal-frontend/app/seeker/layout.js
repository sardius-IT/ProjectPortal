// app/seeker/layout.js
import '../globals.css'
import SeekerLayout from './seekerlayout' // ✅ Remove the extra './.' and match casing

export default function SeekerRootLayout({ children }) {
  return (
    <html lang="en">
      <body className="m-0 p-0 overflow-hidden h-screen w-screen">
        <SeekerLayout>{children}</SeekerLayout>
      </body>
    </html>
  )
}
