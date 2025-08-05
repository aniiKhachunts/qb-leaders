import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

function SplitCTA() {
    return (
        <section className="relative py-20 bg-gray-50 overflow-hidden">
            {/* Top angled divider */}
            <svg
                className="absolute top-0 left-0 w-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 100"
            >
                <path fill="#fff" d="M0,100 L1440,0 L1440,100 Z" />
            </svg>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 items-center gap-16 relative z-10">
                {/* LEFT COLUMN - Text + Inline CTA */}
                <div>
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Ready to Get Your Finances on Track?
                    </motion.h2>

                    <motion.p
                        className="text-gray-600 mb-8"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Sign up for a free consultation and see how QB Leaders can simplify your
                        accounting workflow.
                    </motion.p>

                    {/* Inline Form */}
                    <motion.form
                        className="flex items-center bg-white rounded-full shadow-lg overflow-hidden max-w-md"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 focus:outline-none text-gray-700"
                        />
                        <button
                            type="submit"
                            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold transition flex items-center"
                        >
                            Get Started
                            <FaArrowRight className="ml-2" />
                        </button>
                    </motion.form>

                    <p className="text-xs text-gray-400 mt-2">
                        We respect your privacy. No spam ever.
                    </p>
                </div>

                <div className="relative flex justify-center items-center w-full h-96">
                    {/* SVG Path Line */}
                    <svg className="absolute w-full h-full" viewBox="0 0 400 400">
                        <motion.path
                            d="M 50 350 C 150 250, 250 150, 350 50"
                            fill="transparent"
                            stroke="#34d399" /* emerald-400 */
                            strokeWidth="3"
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 1.5 }}
                        />
                    </svg>

                    {/* Steps */}
                    {[
                        { icon: "📞", title: "Contact Us", x: 50, y: 350 },
                        { icon: "💼", title: "Full-Service Accounting & Tax Care", x: 200, y: 200 },
                        { icon: "🏆", title: "Achieve Financial Confidence", x: 350, y: 50 },
                    ].map((step, i) => (
                        <motion.div
                            key={i}
                            className={`absolute flex flex-col items-center`}
                            style={{ left: step.x, top: step.y }}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                        >
                            <div
                                className={`w-16 h-16 flex items-center justify-center rounded-full shadow-lg
          ${i === 2 ? "bg-gradient-to-br from-emerald-500 to-emerald-400 text-white" : "bg-gray-200 text-gray-700"}
        `}
                            >
                                <span className="text-2xl">{step.icon}</span>
                            </div>
                            <p className="mt-2 text-sm font-medium text-gray-700">{step.title}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Bottom angled divider */}
            <svg
                className="absolute bottom-0 left-0 w-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 100"
            >
                <path fill="#fff" d="M0,0 L1440,100 L0,100 Z" />
            </svg>
        </section>
    );
}

export default SplitCTA;
