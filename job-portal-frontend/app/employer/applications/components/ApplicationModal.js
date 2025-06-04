'use client'

export default function ApplicationModal({ application, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-xl">
        <h2 className="text-xl font-bold mb-2">
          Application for {application.jobTitle}
        </h2>
        <p className="mb-2"><strong>Applicant:</strong> {application.applicantName}</p>
        <p className="mb-2"><strong>Email:</strong> {application.applicantEmail}</p>
        <p className="mb-4"><strong>Status:</strong> {application.status}</p>

        <div className="mb-4">
          <h3 className="font-semibold mb-1">Resume:</h3>
          <a
            href={application.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            View Resume
          </a>
        </div>

        <div className="flex justify-end space-x-2">
          <button
            className="border px-4 py-1 rounded"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
