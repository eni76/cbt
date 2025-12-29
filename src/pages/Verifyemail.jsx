import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../App";

export default function VerifyEmail() {
    const { token } = useParams()
    

    const [loading, setLoading] = useState(true);
    const [status, setStatus] = useState("verifying"); // verifying | success | error
    const [message, setMessage] = useState("");

    useEffect(() => {
        const verifyEmail = async () => {
            try {
                const res = await axios.post(
                    `${baseUrl}/verifyemail/${token}`
                );

                if (res.data.success) {
                    setStatus("success");
                    setMessage(res.data.message || "Email verified successfully");
                } else {
                    setStatus("error");
                    setMessage(res.data.message || "Verification failed");
                }
            } catch (err) {
                setStatus("error");
                setMessage(
                    err.response?.data?.message || "Invalid or expired verification link"
                );
            } finally {
                setLoading(false);
            }
        };

        if (token) {
            verifyEmail();
        } else {
            setLoading(false);
            setStatus("error");
            setMessage("Invalid verification link");
        }
    }, [token]);

    return (
        <div className="flex items-center justify-center min-h-screen px-4 bg-white">
            {/* Loader */}
            {loading && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
                    <div className="flex items-center justify-center w-20 h-20 border-4 border-green-600 rounded-full animate-spin">
                        <div className="bg-[url('/images/klaxonimage.png')] bg-cover bg-center w-16 h-16 rounded-full" />
                    </div>
                </div>
            )}

            {/* Card */}
            {!loading && (
                <div className="w-full max-w-md p-8 text-center bg-white border shadow-xl rounded-2xl border-lime-200">
                    {/* Icon */}
                    <div
                        className={`mx-auto flex items-center justify-center w-16 h-16 rounded-full mb-4
              ${status === "success"
                                ? "bg-lime-100 text-lime-6500"
                                : "bg-red-100 text-red-600"
                            }`}
                    >
                        {status === "success" ? (
                            <svg
                                className="w-8 h-8"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="w-8 h-8"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        )}
                    </div>

                    {/* Title */}
                    <h1 className="mb-2 text-2xl font-bold text-gray-800">
                        {status === "success" ? "Email Verified 🎉" : "Verification Failed"}
                    </h1>

                    {/* Message */}
                    <p className="mb-6 text-gray-600">{message}</p>

                    {/* Action */}
                    {status === "success" ? (
                        <a
                            href="/login"
                            className="inline-block w-full py-2.5 rounded-lg bg-lime-6500 text-white font-semibold hover:bg-lime-700 transition"
                        >
                            Continue to Login
                        </a>
                    ) : (
                        <a
                            href="/resend-verification"
                            className="inline-block w-full py-2.5 rounded-lg border border-lime-6500 text-lime-6500 font-semibold hover:bg-lime-50 transition"
                        >
                            Resend Verification Email
                        </a>
                    )}
                </div>
            )}
        </div>
    );
}
