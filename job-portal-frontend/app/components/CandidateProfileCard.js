import Image from "next/image";

export default function CandidateProfileCard({ candidate }) {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="flex-shrink-0">
        <Image
          src={candidate.image}
          alt="Profile"
          width={120}
          height={120}
          className="rounded-full"
        />
      </div>
      <div className="flex-1 space-y-2">
        <h3 className="text-xl font-bold">{candidate.name}</h3>
        <p className="text-sm text-gray-600">{candidate.title}</p>
        <p className="text-sm text-gray-600">{candidate.email}</p>
        <p className="text-sm text-gray-600">{candidate.phone}</p>
        <p className="text-sm text-gray-600">{candidate.location}</p>
        <p className="text-sm text-gray-600">
          <strong>Skills:</strong> {candidate.skills.join(", ")}
        </p>
      </div>
    </div>
  );
}
