export default function FeedbackStatusFilter({ status, setStatus }) {
  return (
    <div className="mb-4">
      <select
        className="border rounded p-2"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="">All</option>
        <option value="NEW">New</option>
        <option value="READ">Read</option>
        <option value="REPLIED">Replied</option>
      </select>
    </div>
  );
}
