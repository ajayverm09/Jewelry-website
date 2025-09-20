import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BlogCard from './BlogCard';
import { blogsData } from '../Components/BlogsData'; // Import blogsData

const RecentBlogsSection = () => {
  
  const recentBlogs = blogsData.slice(0, 3);

  return (
    <section className="py-16 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent"
          >
            Latest from Our Blog
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            Stay updated with the latest trends, tips, and insights in luxury gold jewelry and accessories.
          </motion.p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentBlogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <BlogCard blog={blog} theme="black-gold" /> {/* Added theme prop */}
            </motion.div>
          ))}
        </div>

        {/* View All Blogs Button */}
        <div className="text-center mt-10">
          <Link to="/blogs">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 cursor-pointer rounded-lg shadow-lg shadow-yellow-500/50 transition-colors"
            >
              View All Blogs
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentBlogsSection;