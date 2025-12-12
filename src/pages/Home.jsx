import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">

        {/* Hero Section */}
        <div className="py-20 bg-white shadow-sm">
          <div className="max-w-6xl px-6 mx-auto text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl text-lime-600">
              Smart & Automated CBT System for Schools
            </h1>

            <p className="max-w-3xl mx-auto text-lg text-lime-700 md:text-xl">
              Conduct exams, automatically mark scripts, generate results,
              and manage your school CBT system in one place.
            </p>

            <div className="flex justify-center gap-4 mt-8">
              <Link
                to="/register"
                className="px-6 py-3 text-lg text-white rounded-lg bg-lime-700 hover:bg-lime-800"
              >
                Get Started
              </Link>
              <Link
                to="/login"
                className="px-6 py-3 text-lg border rounded-lg border-lime-600 text-lime-700 hover:bg-lime-50"
              >
                Login
              </Link>
            </div>
          </div>
        </div>

        {/* Features */}
        <section className="py-16">
          <div className="max-w-6xl px-6 mx-auto">
            <h2 className="mb-12 text-3xl font-bold text-center text-lime-700 ">App Features</h2>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

              {/* Feature 1 */}
              <div className="p-8 transition bg-white shadow rounded-xl hover:shadow-lg">
                <h3 className="mb-2 text-xl font-semibold text-lime-700">
                  Automated Marking
                </h3>
                <p className="text-gray-600">
                  Upload answer keys and let the system grade all students instantly.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="p-8 transition bg-white shadow rounded-xl hover:shadow-lg">
                <h3 className="mb-2 text-xl font-semibold text-lime-700">
                  Student Dashboard
                </h3>
                <p className="text-gray-600">
                  Students login to take exams, check results, and see leaderboard.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="p-8 transition bg-white shadow rounded-xl hover:shadow-lg">
                <h3 className="mb-2 text-xl font-semibold text-lime-700">
                  Admin Management
                </h3>
                <p className="text-gray-600">
                  Admin uploads questions, monitors performance, and manages all students.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 text-center text-white bg-lime-700">
          <h2 className="mb-4 text-3xl font-bold">Ready to Transform Your School?</h2>
          <p className="mb-8 text-lg">
            Start using our CBT system today and save hours of manual grading.
          </p>

          <Link
            to="/register"
            className="px-8 py-3 text-xl font-semibold bg-white rounded-lg text-lime-700 hover:bg-gray-100"
          >
            Create School Account
          </Link>
        </section>

        {/* Footer */}
      
      </div>
    </Layout>
  );
}
