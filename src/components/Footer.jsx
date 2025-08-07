import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 mt-20">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-2xl font-bold text-green-500 mb-2">QB Leaders</h3>
                    <p className="text-sm text-gray-400">
                        Professional accounting solutions and QuickBooks expertise to
                        simplify your business finances.
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold text-white mb-3">Quick Links</h4>
                    <ul className="space-y-2">
                        <li><Link to="/" className="hover:text-green-400">Home</Link></li>
                        <li><Link to="/about" className="hover:text-green-400">About</Link></li>
                        <li><Link to="/services" className="hover:text-green-400">Services</Link></li>
                        <li><Link to="/contact" className="hover:text-green-400">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold text-white mb-3">Follow Us</h4>
                    <div className="flex space-x-4 text-lg">
                        <a href="#" className="hover:text-green-400"><FaTwitter /></a>
                        <a href="#" className="hover:text-green-400"><FaLinkedin /></a>
                        <a href="#" className="hover:text-green-400"><FaFacebook /></a>
                    </div>
                </div>
            </div>

            <div className="mt-10 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} QB Leaders. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
