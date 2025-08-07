import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import illustration from "../assets/business-illustration.png";

function WhyChooseUs() {
    const benefits = [
        "Certified QuickBooks Professionals",
        "Tailored Business Solutions",
        "Stress-Free Tax Seasons",
        "Modern Tools & Transparent Pricing",
        "Reliable Long-Term Partnership",
    ];

    return (
        <section className="py-20 bg-gray-50 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <img
                        src={illustration}
                        alt="Why Choose QB Leaders"
                        className="max-w-sm md:max-w-md drop-shadow-xl"
                        loading="lazy"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Why Choose <span className="text-green-600">QB Leaders?</span>
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        At QB Leaders, we combine professional accounting expertise with
                        innovative QuickBooks solutions to simplify your financial workflow.
                        Experience accurate reports, stress-free tax seasons, and peace of
                        mind while focusing on what matters most—growing your business.
                    </p>

                    <ul className="space-y-3 mb-8">
                        {benefits.map((item, i) => (
                            <motion.li
                                key={i}
                                className="flex items-start text-gray-700"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.15 }}
                            >
                                <FaCheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                                {item}
                            </motion.li>
                        ))}
                    </ul>

                    <motion.button
                        className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-500 transition"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                    >
                        Book a Free Consultation
                    </motion.button>
                </motion.div>
            </div>

            <div className="absolute w-72 h-72 bg-green-100 rounded-full blur-3xl -top-16 -left-16 opacity-40"></div>
            <div className="absolute w-80 h-80 bg-green-200 rounded-full blur-3xl bottom-0 -right-20 opacity-30"></div>
        </section>
    );
}

export default WhyChooseUs;
