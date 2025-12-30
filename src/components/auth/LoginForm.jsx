import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthProvider";
import { loginUser } from "../../services/userServices"; // new login function
import CustomInput from "../../shared/CustomInput";
import { toast } from "react-toastify";

export default function LoginForm({ setLoading, loading }) {
  const { setUser, setToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!form.email || !form.password) {
      setError("Please fill all required fields");
      return;
    }

    setLoading(true);
    try {
      const res = await loginUser(form.email, form.password);

      if (res.ok) {
        toast.success(res.data.message || "Login successful");
        setUser(res.data.user);
        setToken(res.data.token);
        navigate("/");
        console.log("daa", res?.data);

      } else {
        toast.error(res.error || "Login failed");
      }
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-6">
      <form
        onSubmit={submit}
        className="p-6 space-y-5 bg-white rounded-lg shadow-lg sm:p-8"
      >


        <CustomInput
          label="Email"
          name="email"
          type="email"
          placeholder="Email address"
          value={form.email}
          onChange={handleChange}
          required
        />
        <CustomInput
          label="Password"
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="relative flex items-center justify-center w-full py-2 text-white transition bg-green-600 rounded hover:bg-green-700 disabled:opacity-60"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <div className="items-center justify-between mt-4 text-sm text-gray-600 sm:flex-row sm:text-base">
          <p>
            Don’t have an account?{" "}
            <Link to="/register" className="text-green-600 hover:underline">
              Register
            </Link>
          </p>
          <p>
            <Link to="/forgotpassword" className="text-green-600 hover:underline">
              Forgot Password?
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
