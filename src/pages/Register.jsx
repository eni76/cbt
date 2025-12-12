import React from "react";
import RegisterForm from "../components/auth/RegisterForm";
import Layout from "../components/layout/Layout";

export default function Register() {
    return (
        <Layout>
            <div className="min-h-[calc(100vh-64px)] flex items-center justify-center">
                <div className="w-full max-w-md p-6 bg-white rounded shadow">
                    <h1 className="mb-4 text-2xl font-semibold text-center">Create account</h1>
                    <RegisterForm />
                </div>
            </div>
        </Layout>
    );
}
