import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BlogCard from "../Components/BlogCard";
import { blogsData } from "../Components/BlogsData";

const Blogs = () => {
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
    if (activeCategory === "All") {
      setFilteredBlogs(blogsData);
    } else {
      setFilteredBlogs(
        blogsData.filter((blog) => blog.category === activeCategory)
      );
    }
  }, [activeCategory]);

  // Use only 4 jewelry categories
  const categories = ["All", "Rings", "Necklaces", "Bracelets"];

  return (
    <div className="pt-16">
      {/* Hero Section with Background Image */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-yellow-400 py-32"
        style={{
          backgroundImage:
            "url('https://doylestowngoldexchange.com/wp-content/uploads/2021/08/iStock-1144863027.jpg')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 relative text-center z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Gold Jewelry & Accessories Insights
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-lg md:text-xl"
          >
            Discover the latest trends, care tips, and styling guides for luxury gold jewelry
          </motion.p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-black/80">
        <div className="container mx-auto px-4 flex flex-wrap justify-center gap-2">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                activeCategory === category
                  ? "bg-yellow-500 text-black"
                  : "bg-black text-yellow-400 border border-yellow-400 hover:bg-yellow-400 hover:text-black"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          {filteredBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog, index) => (
                <motion.div
                  key={blog?.id || index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -15,
                    transition: { duration: 0.3 }
                  }}
                  className="relative group"
                >
                  {/* Fixed: Added pointer-events-none to overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
                  <BlogCard 
                    blog={blog} 
                    theme="black-gold" 
                    className="transform transition-transform duration-300 group-hover:scale-[1.02] h-full"
                  />
                  {/* Fixed: Added pointer-events-none to border overlay */}
                  <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-yellow-500/50 transition-all duration-300 pointer-events-none"></div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-yellow-400">
              <h3 className="text-xl font-semibold mb-2">No blogs found</h3>
              <p>Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blogs;