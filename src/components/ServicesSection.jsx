import { motion } from "framer-motion";
import { FaCalculator, FaFileInvoiceDollar, FaChartLine, FaArrowRight } from "react-icons/fa";

function ServicesSection() {
    const services = [
        {
            icon: <FaCalculator className="text-green-600 text-3xl sm:text-4xl mb-3" />,
            title: "Bookkeeping & Accounting",
            desc: "Accurate bookkeeping and monthly reporting tailored for your business.",
        },
        {
            icon: <FaFileInvoiceDollar className="text-green-600 text-3xl sm:text-4xl mb-3" />,
            title: "Tax Preparation",
            desc: "Hassle-free tax filings and compliance with current regulations.",
        },
        {
            icon: <FaChartLine className="text-green-600 text-3xl sm:text-4xl mb-3" />,
            title: "QuickBooks Setup & Support",
            desc: "Expert QuickBooks configuration and training to optimize your workflow.",
        },
    ];

    return (
        <section className="py-16 sm:py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-10 sm:mb-12">
                    Our Services
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {services.map((s, i) => (
                        <motion.div
                            key={i}
                            className="p-5 sm:p-6 bg-white rounded-xl shadow-lg cursor-pointer flex flex-col items-center text-center"
                            whileHover={{ scale: 1.05, translateY: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="w-12 h-12 sm:w-14 sm:h-14 mb-4 bg-green-50 rounded-full flex justify-center items-center">
                                {s.icon}
                            </div>
                            <h3 className="font-semibold text-base sm:text-lg mb-2">{s.title}</h3>
                            <p className="text-gray-600 text-sm sm:text-base">{s.desc}</p>
                            <button className="mt-4 inline-flex items-center text-green-600 font-medium hover:underline text-sm sm:text-base">
                                Learn More <FaArrowRight className="ml-2" />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ServicesSection;
