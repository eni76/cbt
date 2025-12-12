export default function LeaderboardMini({ top = null }) {
  const topStudents = top || [
    { name: "John Doe", score: 98 },
    { name: "Mary Jay", score: 95 },
    { name: "Paul Ike", score: 92 },
  ];

  return (
    <div className="bg-white p-4 shadow rounded">
      <h2 className="font-semibold text-lg">Top Students</h2>
      <ul className="mt-3 space-y-2">
        {topStudents.map((s, i) => (
          <li key={i} className="flex justify-between">
            <span className="truncate">{i + 1}. {s.name}</span>
            <span className="font-medium">{s.score}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
