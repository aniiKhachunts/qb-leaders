import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Testimonials() {
    const testimonials = [
        {
            text: "QB Leaders transformed how we manage our finances. Tax season is no longer stressful!",
            name: "Sarah J.",
            role: "Startup Founder",
        },
        {
            text: "Their QuickBooks expertise saved us hours every week. Highly recommend for SMEs!",
            name: "Michael R.",
            role: "Retail Business Owner",
        },
        {
            text: "Professional, responsive, and genuinely care about our success. They provided excellent support during a very complex tax period, making it easy for us to stay compliant and focus on our core business.",
            name: "Lina K.",
            role: "Marketing Agency CEO",
        },
        {
            text: "The team at QB Leaders is phenomenal. They gave us clarity and confidence in our books.",
            name: "David H.",
            role: "Tech Entrepreneur",
        },
    ];

    const [current, setCurrent] = useState(0);
    const autoplayRef = useRef(null);

    const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
    const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    // Card width + gap
    const cardWidth = 320;
    const gap = 24;
    const totalWidth = cardWidth + gap;

    // Autoplay effect
    useEffect(() => {
        autoplayRef.current && clearInterval(autoplayRef.current);
        autoplayRef.current = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 3000); // Change every 5 seconds
        return () => clearInterval(autoplayRef.current);
    }, [current, testimonials.length]);

    return (
        <section className="relative py-28 bg-gradient-to-b from-white to-gray-200 overflow-hidden text-gray-900">
            {/* Decorative big quote marks */}
            <FaQuoteLeft className="absolute text-gray-200 text-[12rem] top-12 left-8" />
            <FaQuoteLeft className="absolute text-gray-100 text-[10rem] bottom-0 right-8 rotate-180" />

            <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    What Our Clients Say
                </motion.h2>

                {/* Carousel wrapper with fixed min-height */}
                <div className="relative overflow-x-hidden overflow-y-visible py-12" style={{ minHeight: "320px" }}>
                    <motion.div
                        className="flex gap-6 justify-center"
                        animate={{
                            x: `calc(50% - ${totalWidth / 2}px - ${current * totalWidth}px)`,
                        }}
                        transition={{ type: "spring", stiffness: 120, damping: 20 }}
                        style={{ minWidth: "fit-content" }}
                    >
                        {testimonials.map((t, i) => {
                            const isActive = i === current;
                            return (
                                <motion.div
                                    key={i}
                                    className="px-8 py-6 shadow-lg bg-white border border-gray-200 flex flex-col items-center justify-between rounded-2xl transition-all"
                                    style={{ width: isActive ? "22rem" : "20rem" }} // keep same width
                                    animate={{
                                        scale: isActive ? 1.05 : 0.9,
                                        opacity: isActive ? 1 : 0.6,
                                    }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <p className="text-lg text-gray-700 italic mb-4 text-center leading-relaxed">
                                        "{t.text}"
                                    </p>
                                    <div className="mt-2">
                                        <div className="font-semibold text-gray-900">{t.name}</div>
                                        <div className="text-gray-500 text-sm">{t.role}</div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200/70 hover:bg-gray-300 p-3 rounded-full transition"
                    >
                        <FaChevronLeft className="text-gray-700 text-lg" />
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-200/70 hover:bg-gray-300 p-3 rounded-full transition"
                    >
                        <FaChevronRight className="text-gray-700 text-lg" />
                    </button>
                </div>

                {/* Dots Navigation */}
                <div className="flex justify-center mt-8 space-x-2">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`w-3 h-3 rounded-full transition ${
                                current === i ? "bg-green-500" : "bg-gray-400"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
