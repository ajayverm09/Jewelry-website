import React from 'react'
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <div>
      <section className="relative text-white py-20 bg-[url('https://images.pexels.com/photos/266621/pexels-photo-266621.jpeg')] bg-cover bg-center bg-no-repeat">
        {/* Black to golden overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-yellow-900/70"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 bg-clip-text text-transparent drop-shadow-lg">
              About Aurum Luxe
            </h1>
            <p className="text-xl text-gray-200">
              Crafting timeless gold jewelry & accessories with elegance and precision
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutHero
