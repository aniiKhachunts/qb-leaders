import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
    FaRegLightbulb,
    FaLaptopCode,
    FaSearchDollar,
    FaShieldAlt,
} from "react-icons/fa";

const contentMap = {
    bookkeeping: {
        title: "Bookkeeping Services",
        description: "Stay organized and compliant with professional, stress-free bookkeeping.",
        highlight: "Let us simplify your financial record-keeping so you can focus on growth.",
    },
    "tax-advisory": {
        title: "Tax Advisory Services",
        description: "Expert tax strategy and filing. Maximize returns, minimize stress.",
        highlight: "Strategic tax planning tailored to your business goals.",
    },
    payroll: {
        title: "Payroll Management",
        description: "Smooth, secure payroll for businesses of all sizes.",
        highlight: "From payments to taxes — we handle everything with precision.",
    },
    "quickbooks-support": {
        title: "QuickBooks Support",
        description: "Certified QuickBooks experts to guide, train, and troubleshoot.",
        highlight: "We make QuickBooks work *for* you — not the other way around.",
    },
};

const services = [
    {
        icon: <FaRegLightbulb />,
        title: "Strategic Planning",
        description: "Custom roadmaps to help your business scale with clarity.",
    },
    {
        icon: <FaLaptopCode />,
        title: "Automation Tools",
        description: "Save time with smart tech automations and integrations.",
    },
    {
        icon: <FaSearchDollar />,
        title: "Budget Oversight",
        description: "Track expenses and optimize costs like a CFO would.",
    },
    {
        icon: <FaShieldAlt />,
        title: "Risk Analysis",
        description: "Secure your finances with audit-ready tracking.",
    },
];

export default function ServicePage() {
    const { slug } = useParams();
    const service = contentMap[slug];

    if (!service) return <div className="text-center mt-32">Service not found.</div>;

    return (
        <section className="bg-white min-h-screen py-24 px-6 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto text-center">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
                >
                    {service.title}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg text-gray-600 max-w-3xl mx-auto mb-6"
                >
                    {service.description}
                </motion.p>
                <p className="italic text-green-600 font-medium">{service.highlight}</p>

                <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-6 text-center shadow hover:shadow-xl"
                        >
                            <div className="text-green-600 text-4xl mb-4">{item.icon}</div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                            <p className="text-gray-600 text-sm">{item.description}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-green-600 text-white py-14 px-10 rounded-2xl shadow-xl text-center max-w-4xl mx-auto"
                    >
                        <p className="text-lg font-medium mb-4">
                            “QB Leaders made our {service.title.toLowerCase()} effortless.”
                        </p>
                        <p className="text-sm text-white/80">— Amanda P., Founder of StartX</p>
                    </motion.div>
                </div>

                <div className="mt-28">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold text-gray-800 mb-4"
                    >
                        Let’s streamline your {slug.replace(/-/g, " ")}!
                    </motion.h2>
                    <p className="text-gray-600 mb-6">
                        Get started with a free strategy call today.
                    </p>
                    <button className="px-8 py-3 bg-green-600 text-white rounded-full font-medium hover:bg-green-500 transition">
                        Book a Consultation
                    </button>
                </div>
            </div>
        </section>
    );
}
