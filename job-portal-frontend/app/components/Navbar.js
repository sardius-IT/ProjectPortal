export default function Navbar() {
  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">JobPortal</h1>
      <div className="space-x-4">
        <a href="/" className="text-gray-600 hover:text-blue-600">Home</a>
        <a href="/auth/login" className="text-gray-600 hover:text-blue-600">Login</a>
        <a href="/auth/register" className="text-gray-600 hover:text-blue-600">Register</a>
      </div>
    </nav>
  )
}
