import { useState, useEffect } from "react";

function ProfileForm({ schoolId }) {
  const [role, setRole] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  // Fetch subjects from the school
  useEffect(() => {
    fetch(`/api/schools/${schoolId}/subjects`)
      .then((res) => res.json())
      .then((data) => setSubjects(data));
  }, [schoolId]);

  return (
    <form>
      <label>Role:</label>
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="">Select role</option>
        <option value="ADMIN">Admin</option>
        <option value="TEACHER">Teacher</option>
        <option value="STUDENT">Student</option>
      </select>

      <label>Subjects:</label>
      <select
        multiple
        value={selectedSubjects}
        onChange={(e) =>
          setSelectedSubjects([...e.target.selectedOptions].map(o => o.value))
        }
        disabled={role !== "STUDENT"} // Disable if not student
      >
        {subjects.map((subject) => (
          <option key={subject.id} value={subject.id}>
            {subject.name}
          </option>
        ))}
      </select>

      <button type="submit">Create Profile</button>
    </form>
  );
}
