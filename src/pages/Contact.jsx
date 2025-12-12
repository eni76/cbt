import Layout from "../components/layout/Layout";

export default function Contact() {
    return (
        <Layout>
            <div className="min-h-screen bg-gray-50">

                {/* Hero */}
                <section className="py-20 bg-white shadow-sm">
                    <div className="max-w-5xl px-6 mx-auto text-center">
                        <h1 className="mb-4 text-4xl font-bold md:text-5xl text-lime-600">
                            Contact Us
                        </h1>
                        <p className="max-w-3xl mx-auto text-lg text-lime-700 md:text-xl">
                            Have questions, need support, or want to get started?
                            We’re here to help.
                        </p>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="py-16">
                    <div className="grid max-w-6xl grid-cols-1 gap-12 px-6 mx-auto md:grid-cols-2">

                        {/* Info */}
                        <div>
                            <h2 className="mb-4 text-3xl font-bold text-lime-700">Get In Touch</h2>
                            <p className="mb-6 leading-relaxed text-gray-600">
                                Reach out to us for inquiries, technical support, or partnership opportunities.
                                Our team responds quickly.
                            </p>

                            <div className="space-y-4 text-gray-700">

                                <div>
                                    <h3 className="text-lg font-semibold text-lime-700">Email</h3>
                                    <p className="text-gray-600">support@cbtsystem.com</p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-lime-700">Phone</h3>
                                    <p className="text-gray-600">+234 810 000 0000</p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-lime-700">Office</h3>
                                    <p className="text-gray-600">
                                        Lagos, Nigeria
                                        <br />Open Monday – Saturday (8am – 6pm)
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="p-8 bg-white shadow rounded-xl">
                            <h2 className="mb-6 text-2xl font-semibold text-lime-700">
                                Send Us a Message
                            </h2>

                            <form className="space-y-5">

                                <div>
                                    <label className="text-sm font-medium text-gray-700">Full Name</label>
                                    <input
                                        type="text"
                                        className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-600 focus:outline-none"
                                        placeholder="Enter your name"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-700">Email Address</label>
                                    <input
                                        type="email"
                                        className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-600 focus:outline-none"
                                        placeholder="Enter your email"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-700">Message</label>
                                    <textarea
                                        className="w-full h-32 p-3 mt-1 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-lime-600 focus:outline-none"
                                        placeholder="Write your message..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-3 font-semibold text-white transition rounded-lg bg-lime-700 hover:bg-lime-800"
                                >
                                    Send Message
                                </button>

                            </form>
                        </div>

                    </div>
                </section>

                {/* Map Section (Optional) */}
                <section className="mb-20">
                    <div className="max-w-6xl px-6 mx-auto">
                        <div className="overflow-hidden shadow rounded-xl">
                            <iframe
                                title="Google Map"
                                src="https://maps.google.com/maps?q=lagos%20nigeria&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                className="w-full border-0 h-72 md:h-96"
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </section>

            </div>
        </Layout>
    );
}
