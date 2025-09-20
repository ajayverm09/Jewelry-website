import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { blogsData } from '../Components/BlogsData';

const BlogPost = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Convert id to string for comparison since useParams returns a string
    const foundBlog = blogsData.find(post => String(post.id) === id);
    if (foundBlog) setBlog(foundBlog);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="pt-16 flex justify-center items-center min-h-screen bg-black text-yellow-500">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500 mx-auto"></div>
          <p className="mt-4 text-gray-400">Loading blog post...</p>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="pt-16 min-h-screen flex flex-col items-center justify-center bg-black text-yellow-500">
        <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
        <p className="text-gray-400 mb-8">The blog post you're looking for doesn't exist.</p>
        <Link to="/blogs" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-lg transition-colors">
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-16 bg-black text-white">
      {/* Blog Header */}
      <section className="bg-gradient-to-r from-gray-900 to-black text-yellow-500 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Link to="/blogs" className="inline-flex items-center text-yellow-500 hover:text-yellow-400 mb-6 transition-colors">
              <ArrowLeft className="mr-2" size={16} /> Back to Blogs
            </Link>
            <div className="max-w-3xl">
              <span className="inline-block bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-medium mb-4">
                {blog.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{blog.title}</h1>
              <p className="text-gray-300">{blog.date}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-8"
            >
              <img 
                src={blog.image} 
                alt={blog.title} 
                className="w-full h-64 md:h-96 object-cover rounded-xl shadow-xl border-2 border-yellow-500"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="prose prose-lg max-w-none text-gray-200"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Share Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-12 pt-8 border-t border-gray-700"
            >
              <h3 className="text-xl font-semibold mb-4 text-yellow-500">Share this article</h3>
              <div className="flex space-x-4">
                {['Facebook', 'Twitter', 'LinkedIn', 'Email'].map((platform) => (
                  <motion.button
                    key={platform}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gray-800 hover:bg-yellow-500 text-yellow-500 hover:text-black font-medium py-2 px-4 rounded-lg transition-colors"
                  >
                    {platform}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-12 bg-gray-900 rounded-xl p-6 border border-yellow-500"
            >
              <h3 className="text-xl font-semibold mb-4 text-yellow-500">Subscribe to Our Newsletter</h3>
              <p className="text-gray-300 mb-4">Get the latest luxury jewelry updates delivered to your inbox.</p>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-2 rounded-lg border border-yellow-500 bg-black text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  required
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-lg transition-colors"
                >
                  Subscribe
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;