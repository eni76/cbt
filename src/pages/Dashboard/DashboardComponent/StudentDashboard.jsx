import React, { useContext, useState } from "react";
import DashboardStats from "../../../components/student/DashboardStats";
import ExamList from "../../../components/student/ExamList";
import LeaderboardMini from "../../../components/student/LeaderboardMini";

import AuthContext from "../../../context/AuthProvider";

export default function StudentDashboard() {
  const { user } = useContext(AuthContext)

  // Dummy exams data
  const [exams] = useState([
    { id: 1, title: "Math Exam", subject: "Mathematics", duration: 60 },
    { id: 2, title: "Physics Quiz", subject: "Physics", duration: 45 },
    { id: 3, title: "English Test", subject: "English", duration: 30 },
  ]);

  // Dummy stats
  const [stats] = useState({
    examsCount: exams.length,
    completed: 2,
    bestScore: 92,
  });

  // Dummy leaderboard (can be static component)
  const leaderboard = [
    { id: 1, name: "Alice", score: 95 },
    { id: 2, name: "Bob", score: 92 },
    { id: 3, name: "Charlie", score: 90 },
  ];

  return (
    <div className="max-w-6xl p-6 mx-auto">

      <div className="mb-4 text-2xl font-bold">Hello, <span className="font-medium">{user.name || user.email}</span></div>
      {user?.name || "Student"} Dashboard

      <DashboardStats stats={stats} />

      <div className="grid grid-cols-1 gap-6 mt-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ExamList exams={exams} />
        </div>

        <LeaderboardMini leaderboard={leaderboard} />
      </div>
    </div>
  );
}
