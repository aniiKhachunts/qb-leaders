import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaFeatherAlt } from "react-icons/fa";
import { blogPosts } from "../../data/blogPosts.js";

export default function Blog() {
    return (
        <section className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 py-28 px-6">
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl font-extrabold text-gray-900 text-center mb-10"
                >
                    QB Blog<span className="text-green-500">.</span> Your Financial Power Source
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-20"
                >
                    Insightful articles, tech deep dives, and behind-the-scenes on modern accounting.
                </motion.p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index }}
                        >
                            <Link
                                to={`/blog/${post.slug}`}
                                className="block rounded-xl overflow-hidden shadow-xl bg-white hover:shadow-2xl transition h-full"
                            >
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-52 object-cover"
                                />
                                <div className="p-6 flex flex-col gap-3">
                                    <h2 className="text-xl font-semibold text-gray-900">{post.title}</h2>
                                    <p className="text-sm text-gray-600">{post.excerpt}</p>
                                    <div className="mt-4 text-sm text-gray-500">{post.date}</div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>

            <FaFeatherAlt className="absolute text-green-300 top-12 left-10 text-6xl opacity-10 animate-pulse" />
            <FaFeatherAlt className="absolute text-green-400 bottom-20 right-10 text-5xl opacity-20 animate-float-slower" />
        </section>
    );
}
