import React from 'react'
import { motion } from "framer-motion";

const AboutStory = () => {
  return (
    <div>
      <section className="py-16 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="md:w-1/2 mb-10 md:mb-0 h-96 overflow-hidden rounded-lg border-4 border-yellow-500"
            >
              <img
                src="https://images.financialexpressdigital.com/2021/11/jewellery-620x400-1.jpg"
                alt="Luxury Jewelry"
                className="w-[130%] h-full object-cover object-center"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:w-1/2 md:pl-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Our Story
              </h2>
              <p className="text-gray-300 mb-4">
                Founded in 2005, Aurum Luxe began as a small workshop with a vision to craft timeless gold jewelry & accessories. Our founder envisioned pieces that embody elegance, luxury, and individuality.
              </p>
              <p className="text-gray-300 mb-4">
                Over the years, we've grown into a renowned luxury jewelry brand, combining heritage craftsmanship with modern design. Each collection reflects our commitment to excellence and artistry.
              </p>
              <p className="text-gray-300">
                Today, Aurum Luxe is celebrated globally for exquisite gold creations, ethical sourcing, and unmatched craftsmanship, making every piece a symbol of luxury and legacy.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutStory;