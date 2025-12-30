import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CustomInput from "../shared/CustomInput";
import Layout from "../components/layout/Layout";
import { toast } from "react-toastify";
import { resetPassword } from "../services/userServices"; // Service to call backend

const ResetPasswordPage = () => {
  const { token } = useParams(); // Get the token from URL
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const submit = async (e) => {
    e.preventDefault();
    setError(null);

    const { password, confirmPassword } = form;

    if (!password || !confirmPassword) {
      setError("Please fill all required fields");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      // Call the resetPassword service with token and passwords
      const res = await resetPassword(token, password, confirmPassword);

      if (res.ok) {
        toast.success(res.data.message || "Password reset successfully");
        navigate("/login"); // Redirect user to login page
      } else {
        toast.error(res.error || "Failed to reset password");
      }
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>

        {loading && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">


            <div className="flex items-center justify-center w-20 h-20 border-4 border-green-600 rounded-full animate-spin ">


              <div className="bg-[url('/images/klaxonimage.png')] bg-cover bg-center w-16 h-16 rounded-full ">
              </div>
            </div>
          </div>
        )}
      <div className="w-full max-w-md py-10 mx-auto mt-6">
        <form
          onSubmit={submit}
          className="p-6 space-y-5 bg-white rounded-lg shadow-lg sm:p-8"
        >
          <h1 className="text-xl font-semibold text-center">
            Reset Your Password
          </h1>

          <CustomInput
            label="New Password"
            name="password"
            type="password"
            placeholder="Enter new password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <CustomInput
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            placeholder="Confirm new password"
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="relative flex items-center justify-center w-full py-2 text-white transition bg-green-600 rounded hover:bg-green-700 disabled:opacity-60"
          >
            {loading ? "Resetting..." : "Reset Password"}
          </button>

          {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
        </form>
      </div>
    </Layout>
  );
};

export default ResetPasswordPage;
