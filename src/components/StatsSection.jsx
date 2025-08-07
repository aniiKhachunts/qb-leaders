import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

function StatsSection() {
    const stats = [
        { value: 500, suffix: "+", label: "Happy Clients" },
        { value: 15, suffix: "+", label: "Years Experience" },
        { value: 99, suffix: "%", label: "Client Satisfaction" },
    ];

    const particles = Array.from({ length: 12 });

    return (
        <section className="relative pt-48 pb-24 bg-gradient-to-b from-green-600 via-green-700 to-green-800 overflow-hidden text-white">
            {/* Top Wave */}
            <svg
                className="absolute top-0 left-0 w-full h-[180px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
            >
                <path
                    fill="#fff"
                    fillOpacity="1"
                    d="M0,160L48,150C96,140,192,130,288,120C384,110,480,100,576,120C672,140,768,180,864,180C960,180,1056,140,1152,120C1248,100,1344,100,1392,100L1440,100V0H0Z"
                ></path>
            </svg>

            {/* Decorative blurred blobs */}
            <div className="absolute w-80 h-80 bg-green-500/30 rounded-full blur-3xl top-24 -left-20 animate-pulse"></div>
            <div className="absolute w-96 h-96 bg-green-400/20 rounded-full blur-3xl top-52 -right-32 animate-pulse"></div>

            {/* Floating Particles */}
            {particles.map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white rounded-full"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        opacity: 0.3 + Math.random() * 0.5,
                    }}
                    animate={{
                        y: [-20, -250],
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: 6 + Math.random() * 4,
                        repeat: Infinity,
                        delay: Math.random() * 3,
                        ease: "easeInOut",
                    }}
                />
            ))}

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Our Impact in Numbers
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative z-10 -mt-16">
                    {stats.map((stat, i) => {
                        const [ref, inView] = useInView({ triggerOnce: true });
                        const [startCount, setStartCount] = useState(false);

                        useEffect(() => {
                            if (inView) setStartCount(true);
                        }, [inView]);

                        return (
                            <motion.div
                                key={i}
                                className="flex flex-col items-center justify-center"
                                initial={{ opacity: 0, y: 40, scale: 0.8 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.2 }}
                            >
                                {/* Floating and pulsing Circle */}
                                <motion.div
                                    ref={ref}
                                    className="w-36 h-36 md:w-44 md:h-44 rounded-full flex items-center justify-center
                                        bg-white/20 backdrop-blur-sm border border-white/30 shadow-xl mb-4"
                                    animate={{
                                        y: [0, -8, 0],
                                        scale: [1, 1.05, 1],
                                        rotate: [0, 2, -2, 0],
                                    }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                >
                                    <span className="text-4xl md:text-5xl font-bold text-white drop-shadow">
                                        {startCount && (
                                            <CountUp
                                                end={stat.value}
                                                duration={3}
                                                decimals={0}
                                                separator=","
                                            />
                                        )}
                                        {stat.suffix}
                                    </span>
                                </motion.div>

                                <p className="text-lg font-medium text-white/90">{stat.label}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default StatsSection;
