// ✅ Correct
export default function CandidateNavbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">Candidate Dashboard</h1>
        <a href="/auth/logout" className="hover:underline">Logout</a>
      </div>
    </nav>
  );
}
