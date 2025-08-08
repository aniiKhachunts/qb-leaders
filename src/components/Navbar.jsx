import { useState, Fragment, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { Menu, Transition } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { pathname } = useLocation();

    const links = ["Home", "Services", "Blog", "Contact"];
    const servicePages = [
        { name: "Bookkeeping", path: "/services/bookkeeping" },
        { name: "Tax Advisory", path: "/services/tax-advisory" },
        { name: "Payroll", path: "/services/payroll" },
        { name: "QuickBooks Support", path: "/services/quickbooks-support" },
    ];

    const getPath = (label) => (label === "Home" ? "/" : `/${label.toLowerCase()}`);
    const toggleMenu = () => setIsOpen((prev) => !prev);
    const closeMenu = () => setIsOpen(false);

    useEffect(() => {
        document.body.style.scrollbarGutter = "stable";
        return () => {
            document.body.style.scrollbarGutter = "";
        };
    }, []);

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

                <ul className="hidden md:flex space-x-8 text-gray-800 font-medium items-center">
                    {links.map((link, i) => {
                        if (link === "Services") {
                            return (
                                <li key="services" className="relative group">
                                    <Menu as="div" className="relative">
                                        <Menu.Button
                                            className="flex items-center gap-1 hover:text-green-600 focus-visible:outline-none">
                                            Services
                                            <FaChevronDown className="w-4 h-4"/>
                                        </Menu.Button>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="opacity-0 translate-y-1"
                                            enterTo="opacity-100 translate-y-0"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="opacity-100 translate-y-0"
                                            leaveTo="opacity-0 translate-y-1"
                                        >
                                            <Menu.Items
                                                className="absolute top-8 left-0 bg-white border rounded-md shadow-md w-56 z-50 py-2 focus-visible:outline-none">
                                                {servicePages.map(({ name, path }) => (
                                                    <Menu.Item key={name}>
                                                        {({ active }) => (
                                                            <Link
                                                                to={path}
                                                                className={`block px-4 py-2 text-sm ${
                                                                    active ? "bg-green-100 text-green-700" : ""
                                                                }`}
                                                            >
                                                                {name}
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                ))}
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </li>
                            );
                        }

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
                    {isOpen ? <FiX/> : <FiMenu/>}
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
