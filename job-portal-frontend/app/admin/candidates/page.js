"use client"; // ✅ Mark as client component

import { useRouter } from "next/navigation"; // ✅ Correct import for App Router
import { useEffect, useState } from "react";
import CandidateProfileCard from "../../components/CandidateProfileCard";
import CandidateActions from "../../components/CandidateActions";
export default function CandidatesPage() {
  const router = useRouter();
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    // Fetch example data
    async function fetchCandidates() {
      const res = await fetch("/api/candidates"); // Replace with your real API
      const data = await res.json();
      setCandidates(data);
    }
    fetchCandidates();
  }, []);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Candidates</h1>
      {candidates.map((candidate) => (
        <CandidateProfileCard key={candidate.id} candidate={candidate}>
          <CandidateActions candidateId={candidate.id} />
        </CandidateProfileCard>
      ))}
    </div>
  );
}
