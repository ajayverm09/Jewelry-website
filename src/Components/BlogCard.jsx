import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BlogCard = ({ blog, theme }) => {
  const isBlackGold = theme === "black-gold";

  return (
    <div
      className={`rounded-xl overflow-hidden shadow-lg h-full flex flex-col transition-all duration-300 ${
        isBlackGold
          ? "bg-black border-2 border-yellow-500 text-yellow-400"
          : "bg-black text-white"
      }`}
    >
      <Link to={`/blogs/${blog?.id || "#"}`}>
        <div className="relative overflow-hidden h-52">
          <img
            src={
              blog?.image || "https://via.placeholder.com/400x300?text=No+Image"
            }
            alt={blog?.title || "Blog Post"}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          {isBlackGold && blog?.category && (
            <div className="absolute top-0 left-0 bg-yellow-500 text-black px-3 py-1 rounded-br-lg text-sm font-semibold">
              {blog.category}
            </div>
          )}
        </div>
      </Link>

      <div className="p-5 flex flex-col flex-grow">
        <Link to={`/blogs/${blog?.id || "#"}`}>
          <h3
            className={`text-lg md:text-xl font-bold mb-3 bg-clip-text text-transparent transition-all ${
              isBlackGold
                ? "bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:brightness-110"
                : ""
            }`}
          >
            {blog?.title || "Untitled Blog"}
          </h3>
        </Link>
        <p className="text-sm md:text-base mb-4 flex-grow">
          {blog?.excerpt
            ? blog.excerpt.length > 120
              ? blog.excerpt.slice(0, 120) + "..."
              : blog.excerpt
            : "No excerpt available."}
        </p>

        <div className="flex justify-between items-center text-sm mt-auto">
          <span className={isBlackGold ? "text-yellow-300" : "text-gray-500"}>
            {blog?.date || "Unknown date"}
          </span>

          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow:
                "0 0 15px rgba(255, 215, 0, 0.9), 0 0 30px rgba(255, 215, 0, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            className={`inline-block px-5 py-2 rounded-lg font-semibold cursor-pointer transition-colors duration-300 ${
              isBlackGold
                ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black hover:from-yellow-400 hover:to-yellow-500"
                : "bg-yellow-600 text-white hover:bg-yellow-600"
            }`}
          >
            <Link to={`/blogs/${blog?.id || "#"}`}>Read More</Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;