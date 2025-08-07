import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

function SplitCTA() {
    const steps = [
        { icon: "📞", title: "Contact Us" },
        { icon: "💼", title: "Full-Service Accounting & Tax Care" },
        { icon: "🏆", title: "Achieve Financial Confidence" },
    ];

    return (
        <section className="relative py-16 sm:py-20 bg-gray-50 overflow-hidden">
            {/* Top angled divider */}
            <svg className="absolute top-0 left-0 w-full" viewBox="0 0 1440 100">
                <path fill="#fff" d="M0,100 L1440,0 L1440,100 Z"/>
            </svg>

            <div
                className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:grid md:grid-cols-2 items-center gap-12 lg:gap-16 relative z-10">
                {/* LEFT COLUMN */}
                <div className="w-full">
                    <motion.h2
                        className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Ready to Get Your Finances on Track?
                    </motion.h2>

                    <motion.p
                        className="text-gray-600 mb-8 max-w-lg"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Sign up for a free consultation and see how QB Leaders can simplify your
                        accounting workflow.
                    </motion.p>

                    <motion.form
                        className="flex flex-col sm:flex-row items-stretch bg-white rounded-full shadow-lg overflow-hidden max-w-md w-full"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-3 flex-1 text-gray-700 focus:outline-none w-full"
                        />
                        <button
                            type="submit"
                            className="flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold transition whitespace-nowrap w-full sm:w-auto"
                        >
                            Get Started <FaArrowRight className="ml-2"/>
                        </button>
                    </motion.form>

                    <p className="text-xs text-gray-400 mt-2">
                        We respect your privacy. No spam ever.
                    </p>
                </div>

                {/* RIGHT COLUMN - Responsive Stairway */}
                <div className="relative flex justify-center items-center w-full md:h-[28rem] h-80 overflow-visible">
                    {/* Stairway container with responsive scaling */}
                    <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px]">
                        {/* SVG Path */}
                        <svg className="absolute w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">
                            <motion.path
                                d="M 50 350 C 150 250, 250 150, 350 50"
                                fill="transparent"
                                stroke="#34d399"
                                strokeWidth="3"
                                strokeLinecap="round"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                viewport={{ once: true }}
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
                                className="absolute flex flex-col items-center text-center w-24 sm:w-28"
                                style={{
                                    left: `${(step.x / 400) * 100}%`,
                                    top: `${(step.y / 400) * 100}%`,
                                    transform: "translate(-50%, -50%)",
                                }}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.2 }}
                            >
                                <div
                                    className={`w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full shadow-lg 
            ${
                                        i === 2
                                            ? "bg-gradient-to-br from-emerald-500 to-emerald-400 text-white"
                                            : "bg-gray-200 text-gray-700"
                                    }`}
                                >
                                    <span className="text-xl sm:text-2xl">{step.icon}</span>
                                </div>
                                <p className="mt-2 text-xs sm:text-sm font-medium text-gray-700 leading-tight">
                                    {step.title}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>


            </div>

            {/* Bottom angled divider */}
            <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 100">
                <path fill="#fff" d="M0,0 L1440,100 L0,100 Z"/>
            </svg>
        </section>
    );
}

export default SplitCTA;
