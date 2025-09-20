import React from "react"
import { motion } from "framer-motion"
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa"

const teamMembers = [
  {
    name: "Sophia Gold",
    position: "Creative Director",
    bio: "Leading design with passion and elegance in every piece.",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    socials: { facebook: "#", twitter: "#", linkedin: "#" },
  },
  {
    name: "Lucas Aureus",
    position: "Head of Craftsmanship",
    bio: "Ensuring every creation meets our gold standard of excellence.",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    socials: { facebook: "#", twitter: "#", linkedin: "#" },
  },
  {
    name: "Isabella Lux",
    position: "Marketing Lead",
    bio: "Crafting narratives that shine as brightly as our jewelry.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    socials: { facebook: "#", twitter: "#", linkedin: "#" },
  },
  {
    name: "Ethan Regal",
    position: "Customer Relations Manager",
    bio: "Dedicated to providing a premium client experience.",
    image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
    socials: { facebook: "#", twitter: "#", linkedin: "#" },
  },
]

const AboutTeam = () => {
  return (
    <div>
      <section className="py-16 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="container mx-auto px-4">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <p className="text-gray-400">
              The talented artisans behind Aurum Luxe&apos;s timeless creations
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-gray-900 rounded-lg shadow-lg overflow-hidden text-center group relative border-2 border-yellow-500 hover:shadow-yellow-500/50 transition-all duration-300"
              >
                {/* Image with overlay */}
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/70 flex items-start justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex gap-4 mt-6 transform -translate-y-10 group-hover:translate-y-0 transition-all duration-500">
                      <a
                        href={member.socials.facebook}
                        target="_blank"
                        rel="noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition"
                      >
                        <FaFacebookF />
                      </a>
                      <a
                        href={member.socials.twitter}
                        target="_blank"
                        rel="noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition"
                      >
                        <FaTwitter />
                      </a>
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition"
                      >
                        <FaLinkedinIn />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-yellow-400">
                    {member.name}
                  </h3>
                  <p className="text-yellow-300 mb-3">{member.position}</p>
                  <p className="text-gray-300 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutTeam;
