import React from "react";
import { motion } from "framer-motion";

const milestones = [
  {
    year: "2010",
    title: "First Flagship Store",
    description:
      "Opened our luxury boutique in the heart of the fashion district.",
  },
  {
    year: "2015",
    title: "Global Recognition",
    description:
      "Our designs gained recognition in international jewelry exhibitions.",
  },
  {
    year: "2018",
    title: "Celebrity Endorsements",
    description:
      "Renowned celebrities began showcasing our signature collections.",
  },
  {
    year: "2022",
    title: "Sustainable Crafting",
    description:
      "Introduced eco-friendly practices with ethically sourced gold & gems.",
  },
  {
    year: "2025",
    title: "Next-Gen Luxury",
    description:
      "Launching AI-powered customization for bespoke jewelry experiences.",
  },
];

const Timeline = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Section Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Our <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">Journey</span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Key milestones in our legacy of elegance and craftsmanship
        </p>
      </div>

      <div className="relative w-full max-w-6xl mx-auto">
        {/* Vertical Golden Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[3px] bg-gradient-to-b from-yellow-500 via-yellow-400 to-yellow-600"></div>

        {milestones.map((event, index) => {
          const isLeft = index % 2 === 0; // Zigzag pattern

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`mb-16 flex w-full items-center ${
                isLeft ? "justify-start" : "justify-end"
              }`}
            >
              {/* Card */}
              <div
                className={`relative w-[45%] bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-lg p-6 border-l-4 border-yellow-500 hover:shadow-yellow-500/50 hover:scale-105 transition-all duration-300 ${
                  isLeft ? "text-right pr-8" : "text-left pl-8"
                }`}
              >
                <span className="text-yellow-400 font-bold text-lg tracking-wide">
                  {event.year}
                </span>
                <h3 className="text-2xl font-semibold mt-2 text-white hover:text-yellow-400 transition-colors duration-300">
                  {event.title}
                </h3>
                <p className="text-gray-400 mt-2 leading-relaxed">
                  {event.description}
                </p>
              </div>

              {/* Golden Glowing Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full border-4 border-black shadow-lg shadow-yellow-500/50 hover:scale-125 transition-transform duration-300 flex items-center justify-center text-black font-bold">
                {index + 1}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Timeline;
