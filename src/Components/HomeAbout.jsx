import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <>
      <section className="py-16 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            
            {/* Image */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="md:w-1/2 mb-10 md:mb-0"
            >
              <img 
                src="https://img.freepik.com/premium-photo/artisan-hands-crafting-fine-gold-jewelry-using-detailed-tools-workshop_1005503-3335.jpg" 
                alt="Jewelry Crafting" 
                className="rounded-lg shadow-2xl border-4 border-yellow-500 w-full h-80 object-cover md:h-96"
              />
            </motion.div>

            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:w-1/2 md:pl-12"
            >
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                About Aurum Luxe
              </h2>
              <p className="text-gray-300 mb-4">
                At Aurum Luxe, we craft exquisite gold jewelry and accessories with unparalleled artistry and passion. Each piece reflects luxury, elegance, and timeless beauty.
              </p>
              <p className="text-gray-300 mb-6">
                Our dedicated team ensures every creation meets the highest standards of quality. From custom designs to exclusive collections, we offer a personalized experience that celebrates your style and sophistication.
              </p>
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 cursor-pointer rounded-lg transition-colors shadow-lg shadow-yellow-500/50"
                >
                  Learn More About Us
                </motion.button>
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Second Section - Opposite Side */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center">
            
            {/* Image */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="md:w-1/2 mb-10 md:mb-0"
            >
              <img 
                src="https://i.pinimg.com/736x/65/05/f8/6505f82325820d0ebc914ff633642527.jpg" 
                alt="Our Collection" 
                className="rounded-lg shadow-2xl border-4 border-yellow-500 w-full h-80 object-cover md:h-96"
              />
            </motion.div>

            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:w-1/2 md:pr-12"
            >
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Our Heritage
              </h2>
              <p className="text-gray-300 mb-4">
                With decades of expertise in fine jewelry craftsmanship, Aurum Luxe stands as a testament to tradition and innovation. Our heritage is built on a foundation of excellence and attention to detail.
              </p>
              <p className="text-gray-300 mb-6">
                We source only the finest materials and work with master artisans who bring each design to life with precision and care. Every piece tells a story of luxury and sophistication.
              </p>
              <Link to="/blogs">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 cursor-pointer rounded-lg transition-colors shadow-lg shadow-yellow-500/50"
                >
                  Discover Our Heritage
                </motion.button>
              </Link>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;