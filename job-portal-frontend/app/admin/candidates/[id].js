import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CandidateProfileCard from "@/components/CandidateProfileCard";
import CandidateActions from "@/components/CandidateActions";
import CandidateSummary from "@/components/CandidateSummary";

export default function AdminCandidateProfile() {
  const router = useRouter();
  const { id } = router.query;

  const [candidate, setCandidate] = useState(null);

  useEffect(() => {
    if (!id) return;

    // Simulated fetch — replace with real API
    setCandidate({
      id,
      image: "/Screenshot 2025-05-03 124630.png",
      name: "Robert Johnson",
      title: "Marketing Manager",
      email: "robert.johnson@example.com",
      phone: "(555) 987-6543",
      location: "San Francisco, CA",
      skills: ["Marketing", "Social Media"],

    });
  }, [id]);

  if (!candidate) return <div className="p-4">Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-xl shadow-md flex flex-col md:flex-row gap-8">
      <main className="flex-1 space-y-6">
        <div className="flex justify-between items-start">
          <h2 className="text-2xl font-semibold">Candidate Profile</h2>
          <button className="border px-4 py-2 rounded hover:bg-gray-100">Log Out</button>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <CandidateProfileCard candidate={candidate} />
          <CandidateActions />
        </div>

        
      </main>
    </div>
  );
}
