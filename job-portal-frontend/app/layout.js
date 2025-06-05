// app/layout.js
import './globals.css'
import SessionWrapper from './components/common/sessionwarapper'
import NavbarWrapper from './components/common/navbarwrapper'

export const metadata = {
  title: 'Job Portal',
  description: 'Find and apply for jobs easily',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionWrapper>
          <NavbarWrapper>
            {children}
          </NavbarWrapper>
        </SessionWrapper>
      </body>
    </html>
  )
}
