import { Bookmark } from "lucide-react";

export default function CandidateActions() {
  return (
    <div className="flex flex-col gap-2">
      <button className="flex items-center border rounded px-4 py-2 hover:bg-gray-100 space-x-2">
        <Bookmark size={16} />
        <span>Bookmarked</span>
      </button>
      <button className="border rounded px-4 py-2 hover:bg-gray-100">Edit</button>
      <button className="border rounded px-4 py-2 hover:bg-gray-100">Verify</button>
      <button className="border rounded px-4 py-2 hover:bg-gray-100">Block</button>
    </div>
  );
}
