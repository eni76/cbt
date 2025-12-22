import React, { useState } from "react";
import LoginForm from "../components/auth/LoginForm";
import Layout from "../components/layout/Layout";

export default function Login() {
  const [loading, setLoading] = useState(false);
  return (
    <Layout>
      <div className="min-h-[calc(100vh-64px)] flex items-center justify-center">

        {loading && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">


            <div className="flex items-center justify-center w-20 h-20 border-4 border-green-600 rounded-full animate-spin ">


              <div className="bg-[url('/images/klaxonimage.png')] bg-cover bg-center w-16 h-16 rounded-full ">
              </div>
            </div>
          </div>
        )}
        <div className="w-full max-w-md p-6 bg-white rounded shadow">
          <h1 className="mb-4 text-2xl font-semibold text-center">Login</h1>
          <LoginForm setLoading={setLoading} loading={loading} />
        </div>
      </div>
    </Layout>
  );
}
