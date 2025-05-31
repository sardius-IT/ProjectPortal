export default function StatCard({ title, value, icon }) {
  return (
    <div className="bg-white p-6 rounded shadow-md text-center">
      <div className="text-3xl mb-2">{icon}</div>
      <h4 className="text-xl font-semibold">{value}</h4>
      <p className="text-gray-600">{title}</p>
    </div>
  );
}
