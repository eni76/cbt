const Footer = () => {
    return (
        <footer className="w-full text-gray-300 bg-black">
            <div className="grid max-w-6xl grid-cols-1 gap-10 px-6 py-10 mx-auto md:grid-cols-4">

                {/* Brand */}
                <div>
                    <h2 className="text-xl font-bold text-white">CBT System</h2>
                    <p className="mt-3 text-sm text-gray-400">
                        Smart & automated CBT exams for schools.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="mb-3 text-lg font-semibold text-white">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/" className="hover:text-lime-500">Home</a></li>
                        <li><a href="/login" className="hover:text-lime-500">Login</a></li>
                        <li><a href="/register" className="hover:text-lime-500">Register</a></li>
                    </ul>
                </div>

                {/* Features */}
                <div>
                    <h3 className="mb-3 text-lg font-semibold text-white">Features</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-lime-500">Automated Marking</li>
                        <li className="hover:text-lime-500">Student Dashboard</li>
                        <li className="hover:text-lime-500">Admin Management</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="mb-3 text-lg font-semibold text-white">Contact</h3>
                    <p className="text-sm text-gray-400">support@cbtsystem.com</p>
                    <p className="mt-1 text-sm text-gray-400">+234 810 000 0000</p>
                </div>
            </div>

            {/* Bottom */}
            <div className="py-4 text-sm text-center text-gray-500 border-t border-gray-800">
                © {new Date().getFullYear()} CBT System — All Rights Reserved.
            </div>
        </footer>
    );
}

export default Footer;
