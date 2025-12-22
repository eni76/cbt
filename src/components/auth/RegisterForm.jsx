import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import AuthContext from "../../context/AuthProvider";
import { registerUser } from "../../services/userServices";
import CustomInput from "../../shared/CustomInput";
import { toast } from "react-toastify";

export default function RegisterForm({ setLoading, loading }) {
  const { setUser, setToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    phone: "",
    address: "",
    description: "",
    image: null,
  });
  const [imagePreview, setImagePreview] = useState(null);

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Dropzone for image
  const onDrop = (acceptedFiles) => {
    if (acceptedFiles.length === 0) return;
    const file = acceptedFiles[0];
    setForm({ ...form, image: file });
    setImagePreview(URL.createObjectURL(file));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
  });

  const submit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!form.name || !form.email || !form.password) {
      setError("Please fill all required fields");
      return;
    }
    if (form.password !== form.confirmpassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      Object.keys(form).forEach((key) => formData.append(key, form[key]));

      const res = await registerUser(formData);
      console.log("formRes:", res);

      if (res.ok) {
        toast.success(res.data.message || "Registration successful");
      } else {
        toast.error(res.error || "Registration failed");
        console.log("res",  res.error );
        
      }

      setUser(res.data.user);
      setToken(res.data.token);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={submit}
      className="w-full max-w-md p-6 mx-auto mt-6 space-y-5 bg-white rounded-lg shadow-lg sm:p-8"
      encType="multipart/form-data"
    >
    

      <CustomInput
        label="Full Name"
        name="name"
        placeholder="Full name"
        value={form.name}
        onChange={handleChange}
        required
      />
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
      <CustomInput
        label="Confirm Password"
        name="confirmpassword"
        type="password"
        placeholder="Confirm password"
        value={form.confirmpassword}
        onChange={handleChange}
        required
      />
      <CustomInput
        label="Phone"
        name="phone"
        type="tel"
        placeholder="Phone number"
        value={form.phone}
        onChange={handleChange}
      />
      <CustomInput
        label="Description"
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
      />
      <CustomInput
        label="Address"
        name="address"
        placeholder="Address"
        value={form.address}
        onChange={handleChange}
      />

      {/* Dropzone for image */}
      <div
        {...getRootProps()}
        className={`flex flex-col items-center justify-center p-4 border-2 border-dashed rounded-lg cursor-pointer transition-colors
        ${isDragActive ? "border-green-600 bg-green-50" : "border-gray-300 bg-gray-50"}`}
      >
        <input {...getInputProps()} />
        {imagePreview ? (
          <img
            src={imagePreview}
            alt="Preview"
            className="object-cover w-32 h-32 mt-2 border rounded-lg"
          />
        ) : (
          <p className="text-gray-500">
            {isDragActive
              ? "Drop the image here..."
              : "Drag and drop image here, or click to select"}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="relative flex items-center justify-center w-full py-2 text-white transition bg-green-600 rounded hover:bg-green-700 disabled:opacity-60"
      >
        {loading ? "Creating account..." : "Create Account"}
      </button>
    </form>
  );
}
