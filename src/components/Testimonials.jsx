import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Testimonials() {
    const testimonials = [
        { text: "QB Leaders transformed how we manage our finances. Tax season is no longer stressful!", name: "Sarah J.", role: "Startup Founder" },
        { text: "Their QuickBooks expertise saved us hours every week. Highly recommend for SMEs!", name: "Michael R.", role: "Retail Business Owner" },
        { text: "Professional, responsive, and genuinely care about our success. They provided excellent support during a very complex tax period.", name: "Lina K.", role: "Marketing Agency CEO" },
        { text: "The team at QB Leaders is phenomenal. They gave us clarity and confidence in our books.", name: "David H.", role: "Tech Entrepreneur" },
    ];

    const [current, setCurrent] = useState(0);
    const autoplayRef = useRef(null);
    const containerRef = useRef(null);

    const cardWidth = 280;
    const gap = 20;
    const totalWidth = cardWidth + gap;

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
    const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    // Autoplay
    useEffect(() => {
        autoplayRef.current && clearInterval(autoplayRef.current);
        autoplayRef.current = setInterval(next, 4000);
        return () => clearInterval(autoplayRef.current);
    }, [current]);

    // Handle screen resize
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Mobile offset calculation
    const [offset, setOffset] = useState(0);
    useEffect(() => {
        if (!isMobile) return; // skip desktop

        const containerWidth = containerRef.current?.offsetWidth || 0;
        const centerOffset = containerWidth / 2 - cardWidth / 2 - current * totalWidth;

        const maxOffset = 0;
        const minOffset = -(testimonials.length * totalWidth - containerWidth);
        setOffset(Math.max(Math.min(centerOffset, maxOffset), minOffset));
    }, [current, testimonials.length, isMobile]);

    return (
        <section className="relative py-20 sm:py-28 bg-gradient-to-b from-white to-gray-200 overflow-hidden text-gray-900">
            <FaQuoteLeft className="absolute text-gray-200 text-[6rem] sm:text-[8rem] md:text-[12rem] top-6 sm:top-12 left-4 sm:left-8" />
            <FaQuoteLeft className="absolute text-gray-100 text-[5rem] sm:text-[7rem] md:text-[10rem] bottom-0 right-4 sm:right-8 rotate-180" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center relative z-10">
                <motion.h2
                    className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 sm:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    What Our Clients Say
                </motion.h2>

                <div
                    ref={containerRef}
                    className="relative overflow-x-hidden overflow-y-visible py-10 sm:py-12"
                    style={{ minHeight: "300px" }}
                >
                    <motion.div
                        className={`flex gap-5 ${isMobile ? "justify-start" : "justify-center"}`}
                        animate={{
                            x: isMobile
                                ? offset
                                : `calc(50% - ${totalWidth / 2}px - ${current * totalWidth}px)`,
                        }}
                        transition={{ type: "spring", stiffness: 120, damping: 20 }}
                        style={{ minWidth: "fit-content" }}
                    >
                        {testimonials.map((t, i) => {
                            const isActive = i === current;
                            return (
                                <motion.div
                                    key={i}
                                    className="px-5 sm:px-8 py-6 shadow-lg bg-white border border-gray-200 flex flex-col items-center justify-between rounded-2xl transition-all"
                                    style={{ width: `${cardWidth}px` }}
                                    animate={{
                                        scale: isActive ? 1.05 : 0.9,
                                        opacity: isActive ? 1 : 0.6,
                                    }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <p className="text-base sm:text-lg text-gray-700 italic mb-4 text-center leading-relaxed">
                                        "{t.text}"
                                    </p>
                                    <div className="mt-2">
                                        <div className="font-semibold text-gray-900">{t.name}</div>
                                        <div className="text-gray-500 text-xs sm:text-sm">{t.role}</div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prev}
                        className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 bg-gray-200/70 hover:bg-gray-300 p-2 sm:p-3 rounded-full transition"
                    >
                        <FaChevronLeft className="text-gray-700 text-base sm:text-lg" />
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 bg-gray-200/70 hover:bg-gray-300 p-2 sm:p-3 rounded-full transition"
                    >
                        <FaChevronRight className="text-gray-700 text-base sm:text-lg" />
                    </button>
                </div>

                {/* Dots Navigation */}
                <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition ${
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
