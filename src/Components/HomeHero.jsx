import { motion } from "framer-motion";
import {
  FaCrown,
  FaStar,
  FaShoppingBag,
  FaInfoCircle,
  FaAward,
} from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-black to-gray-900 text-yellow-500 py-12 md:py-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-4 left-4 text-yellow-400 opacity-50">
        <FaCrown className="text-3xl animate-pulse" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <div className="flex items-center mb-3">
              <FaStar className="text-yellow-400 mr-2" />
              <span className="text-yellow-400 font-semibold">
                LUXURY COLLECTION
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              Discover Exquisite Jewelry & Accessories
            </h1>

            <p className="text-xl mb-6 text-gray-300">
              Explore our exclusive collection of handcrafted gold jewelry and
              luxury accessories that elevate your style.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(255,215,0,0.7)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg transition-all flex items-center justify-center"
              >
                <FaShoppingBag className="mr-2" /> Shop Collection
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(255,215,0,0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-yellow-500 hover:bg-yellow-500 hover:text-black text-yellow-500 font-bold py-3 px-6 rounded-lg transition-all flex items-center justify-center"
              >
                <FaInfoCircle className="mr-2" /> Learn More
              </motion.button>
            </div>

            {/* Trust indicators */}
            <div className="mt-6 flex items-center space-x-6">
              <div className="flex items-center">
                <FaAward className="text-yellow-400 mr-2" />
                <span className="text-gray-300">Premium Quality</span>
              </div>
              <div className="flex items-center">
                <FaCrown className="text-yellow-400 mr-2" />
                <span className="text-gray-300">Exclusive Designs</span>
              </div>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:w-1/2"
          >
            <div className="relative">
              {/* Main image with floating animation */}
              <motion.img
                src="https://mustafajewellery.com/wp-content/uploads/2024/04/Mustafa_Feature-Banner_683-%C3%97-500px-2024-04-23T035617.723.png"
                alt="Luxury Jewelry"
                className="rounded-lg shadow-2xl border-2 border-yellow-500 w-full"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />

              {/* Floating badge with enhanced design */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-gradient-to-r from-yellow-600 to-yellow-400 p-4 rounded-lg shadow-lg border border-yellow-300"
                animate={{
                  rotate: [0, 2, 0, -2, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <div className="flex items-center">
                  <div className="bg-black p-3 rounded-full mr-4">
                    <FaAward className="text-yellow-400 text-2xl" />
                  </div>
                  <div>
                    <p className="text-gray-800 text-sm font-medium">
                      Award Winning
                    </p>
                    <p className="font-bold text-black">Luxury Jewelry Brand</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-10 text-yellow-400"
                animate={{
                  x: [0, 10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.5,
                }}
              >
                <FaStar className="text-3xl" />
              </motion.div>

              <motion.div
                className="absolute bottom-1/2 -left-10 text-yellow-400"
                animate={{
                  x: [0, -10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1,
                }}
              >
                <FaCrown className="text-3xl" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-500"></div>
    </section>
  );
};

export default HeroSection;