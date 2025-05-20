// components/navbars/CandidateNavbar.js
export default function CandidateNavbar() {
  return (
    <header className="bg-indigo-700 text-white flex justify-between items-center px-6 py-4">
      <h1 className="text-xl font-semibold">Candidate Dashboard</h1>
      <button className="bg-red-600 px-3 py-1 rounded hover:bg-red-700 transition">
        Logout
      </button>
    </header>
  );
}
