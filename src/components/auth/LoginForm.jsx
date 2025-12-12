import React, { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthProvider";

export default function LoginForm() {
  const { setUser, setToken } = useContext(AuthContext); // we’ll use dummy set
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);



  return (
    <form className="max-w-md p-6 mx-auto mt-10 space-y-4 bg-white rounded shadow">
      {error && <div className="text-sm text-red-600">{error}</div>}

      <input
        type="email"
        required
        className="w-full p-2 border rounded"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        type="password"
        required
        className="w-full p-2 border rounded"
        placeholder="Password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full py-2 text-white bg-blue-600 rounded disabled:opacity-60"
      >
        {loading ? "Signing in..." : "Sign in"}
      </button>

      <div className="text-sm text-center">
        <a className="text-blue-600 hover:underline" href="/register">
          Create an account
        </a>
      </div>
      <div className="text-sm text-center">
        <a className="text-blue-600 hover:underline" href="/register">
          Forgot password?
        </a>
      </div>
    </form>
  );
}
