import { motion } from "framer-motion";
import heroIllustration from "../assets/hero-illustration-bw.png";
import {
    FaCalculator,
    FaChartLine,
    FaMoneyBillWave,
    FaFileInvoiceDollar,
    FaCoins,
    FaUniversity,
} from "react-icons/fa";
import { BsPieChartFill, BsGraphUpArrow } from "react-icons/bs";

function Hero() {
    const icons = [
        { Icon: FaCalculator, top: "8%", left: "12%", delay: 0 },
        { Icon: BsPieChartFill, top: "20%", left: "28%", delay: 0.2 },
        { Icon: FaChartLine, top: "12%", left: "70%", delay: 0.4 },
        { Icon: FaMoneyBillWave, top: "65%", left: "8%", delay: 0.6 },
        { Icon: FaFileInvoiceDollar, top: "70%", left: "80%", delay: 0.8 },
        { Icon: FaCoins, top: "40%", left: "5%", delay: 1 },
        { Icon: FaUniversity, top: "50%", left: "90%", delay: 1.2 },
        { Icon: BsGraphUpArrow, top: "35%", left: "75%", delay: 1.4 },
    ];

    // Chaotic floating animation
    const randomFloatAnimation = (delay = 0) => {
        const moveX1 = Math.random() * 200 - 100;
        const moveX2 = Math.random() * 200 - 100;
        const moveY1 = Math.random() * 200 - 100;
        const moveY2 = Math.random() * 200 - 100;
        const scale1 = 0.9 + Math.random() * 0.2;
        const scale2 = 0.9 + Math.random() * 0.2;

        return {
            x: [0, moveX1, moveX2, 0],
            y: [0, moveY1, moveY2, 0],
            scale: [1, scale1, scale2, 1],
            rotate: [0, Math.random() * 30 - 15, Math.random() * 30 - 15, 0],
            transition: {
                duration: 6 + Math.random() * 6,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
                delay,
            },
        };
    };

    return (
        <section className="relative overflow-hidden flex items-center pt-32 pb-20 sm:pt-40 sm:pb-28 md:pt-48 md:pb-40 mt-16 bg-white">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-100 via-green-50 to-white animate-gradient" />

            {/* Floating Blobs */}
            <div className="absolute w-64 sm:w-80 h-64 sm:h-80 bg-green-300 opacity-40 rounded-full blur-3xl -top-32 -left-32 animate-float-slow will-change-transform" />
            <div className="absolute w-72 sm:w-96 h-72 sm:h-96 bg-green-400 opacity-30 rounded-full blur-3xl bottom-0 -right-40 animate-float-slower will-change-transform" />

            {/* Floating Icons - hidden on very small screens */}
            {icons.map(({ Icon, top, left, delay }, index) => (
                <motion.div
                    key={index}
                    className="absolute text-neutral-900 text-2xl sm:text-3xl md:text-4xl opacity-90 drop-shadow-[0_0_2px_rgba(255,255,255,0.5)] will-change-transform hidden sm:block"
                    style={{ top, left }}
                    animate={randomFloatAnimation(delay)}
                >
                    <Icon />
                </motion.div>
            ))}

            {/* Hero Content */}
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10 relative z-10 w-full">
                {/* Text Section */}
                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
                        We Make Accounting <span className="text-green-600">Simple</span>
                    </h1>
                    <p className="text-gray-700 mb-6 text-base sm:text-lg max-w-sm sm:max-w-md md:max-w-lg mx-auto md:mx-0">
                        Your trusted partner for bookkeeping, tax, and QuickBooks support.
                    </p>
                    <button className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:bg-green-500 transition">
                        Get a Free Consultation
                    </button>
                </div>

                {/* Hero Illustration */}
                <motion.div
                    className="flex-1 flex justify-center will-change-transform mt-10 md:mt-0"
                    animate={{ y: [0, -15, 0] }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <img
                        src={heroIllustration}
                        alt="Accounting Illustration"
                        className="max-w-[220px] sm:max-w-sm md:max-w-md drop-shadow-xl"
                        loading="lazy"
                    />
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;
