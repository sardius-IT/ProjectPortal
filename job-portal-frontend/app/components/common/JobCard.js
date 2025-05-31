export default function JobCard({ job }) {
  return (
    <div className="p-4 bg-white rounded shadow hover:shadow-lg">
      <h3 className="text-lg font-semibold">{job.title}</h3>
      <p className="text-gray-500">{job.company} - {job.location}</p>
      <a href={`/jobs/${job.id}`} className="text-blue-600 hover:underline">View Details</a>
    </div>
  );
}
