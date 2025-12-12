import Layout from "../components/layout/Layout";

export default function Services() {
    return (
        <Layout>
            <div className="min-h-screen bg-gray-50">

                {/* Hero Section */}
                <section className="py-20 bg-white shadow-sm">
                    <div className="max-w-5xl px-6 mx-auto text-center">
                        <h1 className="mb-4 text-4xl font-bold md:text-5xl text-lime-600">
                            Our Services
                        </h1>
                        <p className="max-w-3xl mx-auto text-lg text-lime-700 md:text-xl">
                            We provide smart, automated digital examination solutions tailored for schools,
                            colleges, and training centers across the world.
                        </p>
                    </div>
                </section>

                {/* Services List */}
                <section className="py-16">
                    <div className="max-w-6xl px-6 mx-auto">
                        <h2 className="mb-12 text-3xl font-bold text-center text-lime-700">
                            What We Offer
                        </h2>

                        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

                            {/* 1 Automated Exam System */}
                            <div className="p-8 transition bg-white shadow rounded-xl hover:shadow-lg">
                                <h3 className="mb-3 text-xl font-semibold text-lime-700">
                                    Automated CBT Exams
                                </h3>
                                <p className="text-gray-600">
                                    Schools can create, schedule, and conduct computer-based exams easily
                                    with automatic grading and instant feedback.
                                </p>
                            </div>

                            {/* 2 Student Portal */}
                            <div className="p-8 transition bg-white shadow rounded-xl hover:shadow-lg">
                                <h3 className="mb-3 text-xl font-semibold text-lime-700">
                                    Student Exam Portal
                                </h3>
                                <p className="text-gray-600">
                                    Students can log in to take tests, view scores, track
                                    progress, and compete on leaderboards.
                                </p>
                            </div>

                            {/* 3 Admin Tools */}
                            <div className="p-8 transition bg-white shadow rounded-xl hover:shadow-lg">
                                <h3 className="mb-3 text-xl font-semibold text-lime-700">
                                    Full Admin Management
                                </h3>
                                <p className="text-gray-600">
                                    Admin panels for uploading questions, managing subjects,
                                    monitoring exam activity, and generating digital reports.
                                </p>
                            </div>

                            {/* 4 Intelligent Marking */}
                            <div className="p-8 transition bg-white shadow rounded-xl hover:shadow-lg">
                                <h3 className="mb-3 text-xl font-semibold text-lime-700">
                                    Intelligent Auto-Marking
                                </h3>
                                <p className="text-gray-600">
                                    No more manual marking. Our AI-based system scores answers instantly
                                    with full accuracy and fairness.
                                </p>
                            </div>

                            {/* 5 Result Generation */}
                            <div className="p-8 transition bg-white shadow rounded-xl hover:shadow-lg">
                                <h3 className="mb-3 text-xl font-semibold text-lime-700">
                                    Instant Result Generation
                                </h3>
                                <p className="text-gray-600">
                                    Results are generated automatically with analysis such as strengths,
                                    weaknesses, and performance breakdown.
                                </p>
                            </div>

                            {/* 6 School-Level Integration */}
                            <div className="p-8 transition bg-white shadow rounded-xl hover:shadow-lg">
                                <h3 className="mb-3 text-xl font-semibold text-lime-700">
                                    School Integration Setup
                                </h3>
                                <p className="text-gray-600">
                                    We help schools deploy the CBT system across classrooms,
                                    labs, and student devices with full technical support.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-16 bg-white">
                    <div className="max-w-6xl px-6 mx-auto">
                        <h2 className="mb-12 text-3xl font-bold text-center text-lime-700">
                            Why Schools Choose Our CBT System
                        </h2>

                        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

                            <div className="p-6 transition shadow bg-gray-50 rounded-xl hover:shadow-lg">
                                <h3 className="text-lg font-semibold text-lime-700">Fast & Accurate</h3>
                                <p className="mt-2 text-sm text-gray-600">
                                    Automated grading ensures 100% accuracy and eliminates exam delays.
                                </p>
                            </div>

                            <div className="p-6 transition shadow bg-gray-50 rounded-xl hover:shadow-lg">
                                <h3 className="text-lg font-semibold text-lime-700">Easy to Use</h3>
                                <p className="mt-2 text-sm text-gray-600">
                                    Intuitive dashboards for admins, teachers, and students.
                                </p>
                            </div>

                            <div className="p-6 transition shadow bg-gray-50 rounded-xl hover:shadow-lg">
                                <h3 className="text-lg font-semibold text-lime-700">Secure System</h3>
                                <p className="mt-2 text-sm text-gray-600">
                                    Safe exam environment with anti-malpractice and monitoring tools.
                                </p>
                            </div>

                            <div className="p-6 transition shadow bg-gray-50 rounded-xl hover:shadow-lg">
                                <h3 className="text-lg font-semibold text-lime-700">24/7 Support</h3>
                                <p className="mt-2 text-sm text-gray-600">
                                    We provide full technical support to ensure smooth exam operations.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 text-center text-white bg-lime-700">
                    <h2 className="mb-4 text-3xl font-bold">Ready to Digitize Your Exams?</h2>
                    <p className="mb-8 text-lg">
                        Join schools using our automated system to run stress-free CBT exams.
                    </p>

                    <a
                        href="/register"
                        className="px-8 py-3 text-xl font-semibold bg-white rounded-lg text-lime-700 hover:bg-gray-100"
                    >
                        Get Started Today
                    </a>
                </section>

            </div>
        </Layout>
    );
}
