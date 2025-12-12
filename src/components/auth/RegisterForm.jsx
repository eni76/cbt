import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthProvider";

export default function RegisterForm() {
  const { setUser, setToken } = useContext(AuthContext); // we use dummy set
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const submit = (e) => {
    e.preventDefault();
    setError(null);

    // basic validation
    if (!form.name || !form.email || !form.password) {
      setError("Please fill all fields");
      return;
    }

    if (form.password !== form.confirm) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    // simulate delay
    setTimeout(() => {
      // dummy user and token
      const dummyUser = { name: form.name, email: form.email };
      setUser(dummyUser);
      setToken("dummy-token-123");

      // navigate to dashboard
      navigate("/dashboard");
      setLoading(false);
    }, 1000);
  };

  return (
    <form
      onSubmit={submit}
      className="max-w-md p-6 mx-auto mt-10 space-y-4 bg-white rounded shadow"
    >
      {error && <div className="text-sm text-red-600">{error}</div>}

      <input
        required
        className="w-full p-2 border rounded"
        placeholder="Full name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        required
        type="email"
        className="w-full p-2 border rounded"
        placeholder="Email address"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        required
        type="password"
        className="w-full p-2 border rounded"
        placeholder="Password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <input
        required
        type="password"
        className="w-full p-2 border rounded"
        placeholder="Confirm password"
        value={form.confirm}
        onChange={(e) => setForm({ ...form, confirm: e.target.value })}
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full py-2 text-white bg-green-600 rounded disabled:opacity-60"
      >
        {loading ? "Creating account..." : "Create account"}
      </button>
    </form>
  );
}
