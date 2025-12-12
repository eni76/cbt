export default function DashboardStats({ stats = { examsCount: 0, completed: 0, bestScore: 0 } }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="bg-white shadow p-4 rounded">
        <div className="text-sm text-gray-500">Exams</div>
        <div className="text-2xl font-semibold">{stats.examsCount}</div>
      </div>

      <div className="bg-white shadow p-4 rounded">
        <div className="text-sm text-gray-500">Completed</div>
        <div className="text-2xl font-semibold">{stats.completed}</div>
      </div>

      <div className="bg-white shadow p-4 rounded">
        <div className="text-sm text-gray-500">Best Score</div>
        <div className="text-2xl font-semibold">{stats.bestScore}%</div>
      </div>
    </div>
  );
}
