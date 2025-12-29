// Replace with your backend endpoint

import { toast } from "react-toastify";
import { baseUrl } from "../App";
import axios from "axios";

export const registerUser = async (formData) => {
  try {
    const response = await axios.post(`${baseUrl}/register`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (response.status == 200 || response.status == 201) {
      return {
        ok: true, // ✅ explicitly set success
        data: response.data,
      };
    } else {
      return {
        ok: false,
        error: response.data.message || "Registration failed",
      };
    }
  } catch (error) {
    if (error.response?.data) {
      return {
        ok: false,
        error: error.response.data.message,
      };
    }
    return {
      ok: false,
      error: "Network error",
    };
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${baseUrl}/login`, {
      email,
      password,
    });

    if (response.status === 200 || response.status === 201) {
      console.log("Login successful:", response.data);
      return { ok: true, data: response.data }; // { user, token, message? }
    } else {
      console.log("Unexpected response:", response.data);
      return { ok: false, error: response.data.message || "Login failed" };
    }
  } catch (error) {
    console.log("Login error:", error);
    if (error.response && error.response.data) {
      // Backend returned an error (e.g., 400, 401)
      return { ok: false, error: error.response.data.message };
    } else {
      return { ok: false, error: "Network error" };
    }
  }
};
