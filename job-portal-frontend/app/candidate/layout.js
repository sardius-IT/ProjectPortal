// app/candidate/layout.js
import CandidateNavbar from '../components/navbars/CandidateNavbar';
import CandidateSidebar from '../components/sidebars/CandidateSidebar';

export const metadata = {
  title: 'Candidate Dashboard',
};

export default function CandidateLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <CandidateNavbar />
      <div className="flex flex-1">
        <CandidateSidebar />
        <main className="flex-grow p-6 bg-white">{children}</main>
      </div>
    </div>
  );
}

