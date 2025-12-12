import { useNavigate } from "react-router-dom";

export default function ExamList({ exams = [] }) {
  const nav = useNavigate();

  const handleOpen = (exam) => {
    // navigate to the exam page (create page later)
    nav(`/exams/${exam.id}`);
  };

  return (
    <div className="bg-white p-4 shadow rounded">
      <h2 className="font-semibold text-lg">Available Exams</h2>
      {exams.length === 0 ? (
        <div className="mt-3 text-sm text-gray-500">No exams available</div>
      ) : (
        <ul className="mt-3 space-y-2">
          {exams.map((e) => (
            <li
              key={e.id}
              className="p-3 border rounded hover:bg-gray-50 flex justify-between items-center cursor-pointer"
              onClick={() => handleOpen(e)}
            >
              <div>
                <div className="font-medium">{e.title}</div>
                <div className="text-sm text-gray-500">{e.duration || "—"} mins</div>
              </div>
              <div>
                <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">Start</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
