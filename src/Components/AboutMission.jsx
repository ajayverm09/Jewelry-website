import React from "react"
import { motion } from "framer-motion"
import {
  FaShieldAlt,
  FaStar,
  FaLightbulb,
  FaUserTie,
  FaUsers,
  FaHandHoldingHeart,
} from "react-icons/fa"

const AboutMission = () => {
  return (
    <div>
      <section className="py-16 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Section Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">
                Our{" "}
                <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                  Mission & Values
                </span>
              </h2>
              <p className="text-gray-400">
                The timeless principles behind our craftsmanship
              </p>
            </motion.div>

            {/* Mission, Vision, Commitment, Sustainability */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Our Mission",
                  text: "To craft timeless gold jewelry & accessories that embody elegance, luxury, and individuality — blending heritage artistry with modern design.",
                },
                {
                  title: "Our Vision",
                  text: "To be the world’s most trusted luxury jewelry house, celebrated for innovation, ethical sourcing, and creating pieces that last generations.",
                },
                {
                  title: "Our Commitment",
                  text: "We promise excellence in craftsmanship, using only ethically sourced gold & gems, while ensuring every creation tells a unique story.",
                },
                {
                  title: "Sustainability",
                  text: "We believe in responsible luxury, crafting jewelry with respect for people and the planet through sustainable practices.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg shadow-lg border-l-4 border-yellow-500 hover:shadow-yellow-500/40 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold mb-3 text-yellow-400">
                    {item.title}
                  </h3>
                  <p className="text-gray-300">{item.text}</p>
                </motion.div>
              ))}
            </div>

            {/* Core Values */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-6 text-center text-yellow-400">
                Our Core Values
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { name: "Integrity", icon: <FaShieldAlt className="text-xl" /> },
                  { name: "Excellence", icon: <FaStar className="text-xl" /> },
                  { name: "Innovation", icon: <FaLightbulb className="text-xl" /> },
                  { name: "Client Focus", icon: <FaUserTie className="text-xl" /> },
                  { name: "Teamwork", icon: <FaUsers className="text-xl" /> },
                  { name: "Community", icon: <FaHandHoldingHeart className="text-xl" /> },
                ].map((value, index) => (
                  <motion.div
                    key={value.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-gray-900 to-black p-5 rounded-lg shadow-md text-center hover:shadow-yellow-500/40 transition-all duration-300"
                  >
                    <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-black">
                      {value.icon}
                    </div>
                    <h4 className="font-semibold text-gray-200">
                      {value.name}
                    </h4>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutMission
