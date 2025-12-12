import Layout from "../components/layout/Layout";

export default function About() {
    return (
        <Layout>
            <div className="min-h-screen bg-gray-50">

                {/* Hero Section */}
                <section className="py-20 bg-white shadow-sm">
                    <div className="max-w-5xl px-6 mx-auto text-center">
                        <h1 className="mb-4 text-4xl font-bold md:text-5xl text-lime-600">
                            About Our CBT System
                        </h1>
                        <p className="max-w-3xl mx-auto text-lg text-lime-700 md:text-xl">
                            A modern and automated exam solution designed to help schools
                            conduct tests efficiently, accurately, and with zero stress.
                        </p>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="py-16">
                    <div className="grid max-w-6xl grid-cols-1 gap-10 px-6 mx-auto md:grid-cols-2">

                        {/* Mission */}
                        <div className="p-8 transition bg-white shadow rounded-xl hover:shadow-lg">
                            <h2 className="mb-3 text-2xl font-bold text-lime-700">Our Mission</h2>
                            <p className="leading-relaxed text-gray-600">
                                To simplify the way schools conduct examinations by providing
                                a system that automates marking, improves accuracy, and gives
                                students and teachers a smooth digital exam experience.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="p-8 transition bg-white shadow rounded-xl hover:shadow-lg">
                            <h2 className="mb-3 text-2xl font-bold text-lime-700">Our Vision</h2>
                            <p className="leading-relaxed text-gray-600">
                                To become the leading CBT platform for educational institutions,
                                helping schools transition fully into smart, computer-based testing.
                            </p>
                        </div>

                    </div>
                </section>

                {/* What We Offer */}
                <section className="py-16 bg-white">
                    <div className="max-w-6xl px-6 mx-auto">
                        <h2 className="mb-10 text-3xl font-bold text-center text-lime-700">
                            What We Offer
                        </h2>

                        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

                            {/* Feature Card */}
                            <div className="p-8 transition shadow bg-gray-50 rounded-xl hover:shadow-lg">
                                <h3 className="mb-3 text-xl font-semibold text-lime-700">Automated Marking</h3>
                                <p className="text-gray-600">
                                    Our system instantly grades all exam submissions,
                                    saving hours of manual marking time.
                                </p>
                            </div>

                            <div className="p-8 transition shadow bg-gray-50 rounded-xl hover:shadow-lg">
                                <h3 className="mb-3 text-xl font-semibold text-lime-700">Student Dashboard</h3>
                                <p className="text-gray-600">
                                    Students can take exams, check their results,
                                    and track performance in one place.
                                </p>
                            </div>

                            <div className="p-8 transition shadow bg-gray-50 rounded-xl hover:shadow-lg">
                                <h3 className="mb-3 text-xl font-semibold text-lime-700">Admin Control</h3>
                                <p className="text-gray-600">
                                    Admins manage exams, upload questions, monitor performance
                                    and generate reports effortlessly.
                                </p>
                            </div>

                        </div>

                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 text-center text-white bg-lime-700">
                    <h2 className="mb-4 text-3xl font-bold">
                        Join Hundreds of Schools Using Our CBT System
                    </h2>
                    <p className="mb-6 text-lg">
                        Start today and enjoy seamless exams, instant results, and full automation.
                    </p>
                    <a
                        href="/register"
                        className="px-8 py-3 text-xl font-semibold bg-white rounded-lg text-lime-700 hover:bg-gray-100"
                    >
                        Get Started
                    </a>
                </section>

            </div>
        </Layout>
    );
}
