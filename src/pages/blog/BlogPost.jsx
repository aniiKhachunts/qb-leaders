import { Link, useParams } from "react-router-dom";
import { FaArrowLeft, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { postContent } from "../../data/blogPosts.js";

function estimateReadingTime(content) {
    const wordsPerMinute = 200;
    const text = content.replace(/<[^>]+>/g, "");
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / wordsPerMinute);
    return `${time} min read`;
}

export default function BlogPost() {
    const { slug } = useParams();
    const post = postContent.find((p) => p.slug === slug);

    if (!post) return <div className="py-40 text-center">Post not found.</div>;

    return (
        <article className="min-h-screen bg-white text-gray-800">
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
                <img
                    src={post.image}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover object-center mt-16"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
                    <div className="max-w-4xl mx-auto px-6 md:px-16 lg:px-24 py-6 text-white">
                        <h1 className="text-3xl md:text-5xl font-bold">{post.title}</h1>
                        <div className="text-gray-200 text-sm mt-2 flex flex-wrap items-center gap-3">
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>{estimateReadingTime(post.content)}</span>
                            <span>•</span>
                            <span>By {post.author}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-3xl mx-auto px-6 md:px-0 py-16">
                <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 mb-8 text-sm text-green-600 hover:underline transition"
                >
                    <FaArrowLeft /> Back to Blog
                </Link>

                <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag) => (
                        <span
                            key={tag}
                            className="bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="mb-8 border-l-4 border-green-400 pl-4">
                    <h3 className="font-semibold text-lg mb-2">Quick Overview</h3>
                    <ul className="text-sm text-gray-600 list-disc ml-4">
                        <li>What automation means in accounting</li>
                        <li>Best tools for smarter workflows</li>
                        <li>Steps to implement automation</li>
                    </ul>
                </div>

                <div
                    className="prose prose-lg prose-green max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <div className="mt-12 border-t pt-6 flex items-center justify-between">
                    <p className="text-sm text-gray-500">Share this post:</p>
                    <div className="flex gap-4 text-green-600 text-lg">
                        <a href="#" aria-label="Share on Facebook"><FaFacebookF /></a>
                        <a href="#" aria-label="Share on Twitter"><FaTwitter /></a>
                        <a href="#" aria-label="Share on LinkedIn"><FaLinkedinIn /></a>
                    </div>
                </div>
            </div>
        </article>
    );
}
