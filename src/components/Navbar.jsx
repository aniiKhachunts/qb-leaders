import { Link } from "react-router-dom";

function Navbar() {
    const links = ["Home", "Services", "About", "Testimonials", "Contact"];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/50 backdrop-blur-md border-b border-white/30 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link
                    to="/"
                    className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent"
                >
                    QB Leaders
                </Link>

                {/* Navigation Links */}
                <ul className="flex space-x-8 text-gray-800 font-medium">
                    {links.map((link, i) => (
                        <li key={i} className="relative group">
                            <Link
                                to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                                className="transition-colors duration-200 hover:text-green-600"
                            >
                                {link}
                            </Link>
                            {/* Subtle underline */}
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
