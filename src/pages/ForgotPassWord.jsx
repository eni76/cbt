import { useState } from "react";
import CustomInput from "../shared/CustomInput";
import Layout from "../components/layout/Layout";
import { toast } from "react-toastify";
import { recoverAccount } from "../services/userServices"; // <-- your new service

const ForgetPass = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!form.email) {
      setError("Please enter your email");
      return;
    }

    setLoading(true);
    try {
      const res = await recoverAccount(form.email); // <-- call recover service

      if (res.ok) {
        toast.success(res.data.message || "Recovery email sent");
        setForm({ email: "" });
      } else {
        toast.error(res.error || "Failed to send recovery email");
      }
    } catch (err) {
      setError(err.message || "Something went wrong");
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
          <h1 className="font-semibold text-center">Enter your email</h1>

          <CustomInput
            label="Email"
            name="email"
            type="email"
            placeholder="Email address"
            value={form.email}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="relative flex items-center justify-center w-full py-2 text-white transition bg-green-600 rounded hover:bg-green-700 disabled:opacity-60"
          >
            {loading ? "Sending..." : "Recover Account"}
          </button>

          {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
        </form>
      </div>
    </Layout>
  );
};

export default ForgetPass;
