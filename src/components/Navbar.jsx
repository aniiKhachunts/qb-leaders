import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { pathname } = useLocation();
    const links = ["Home", "Services", "About", "Testimonials", "Contact"];
    const getPath = (label) => (label === "Home" ? "/" : `/${label.toLowerCase()}`);

    const toggleMenu = () => setIsOpen((prev) => !prev);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-gray-200 shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link
                    to="/"
                    className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent tracking-tight"
                    onClick={closeMenu}
                >
                    QB Leaders
                </Link>

                <ul className="hidden md:flex space-x-8 text-gray-800 font-medium">
                    {links.map((link, i) => {
                        const path = getPath(link);
                        const isActive = pathname === path;

                        return (
                            <li key={i} className="relative group">
                                <Link
                                    to={path}
                                    className={`transition-colors duration-200 ${
                                        isActive ? "text-green-600 font-semibold" : "hover:text-green-600"
                                    }`}
                                >
                                    {link}
                                </Link>
                                <span
                                    className={`absolute left-0 -bottom-1 h-0.5 bg-green-500 transition-all duration-300 ${
                                        isActive ? "w-full" : "w-0 group-hover:w-full"
                                    }`}
                                />
                            </li>
                        );
                    })}
                </ul>

                <button
                    onClick={toggleMenu}
                    className="md:hidden text-2xl text-gray-800 focus:outline-none"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden px-6 pb-4 bg-white shadow-md border-t border-gray-200">
                    <ul className="flex flex-col space-y-4 text-gray-800 font-medium">
                        {links.map((link, i) => {
                            const path = getPath(link);
                            const isActive = pathname === path;
                            return (
                                <li key={i}>
                                    <Link
                                        to={path}
                                        onClick={closeMenu}
                                        className={`block transition-colors duration-200 ${
                                            isActive ? "text-green-600 font-semibold" : "hover:text-green-600"
                                        }`}
                                    >
                                        {link}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
