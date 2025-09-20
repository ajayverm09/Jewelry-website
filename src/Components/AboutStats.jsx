import React, { useState } from 'react';
import { motion } from "framer-motion";
import CountUp from 'react-countup';

const AboutStats = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  const stats = [
    { number: 20, suffix: "+", label: "Years of Craftsmanship" },
    { number: 10000, suffix: "+", label: "Jewelry Pieces Created" },
    { number: 100, suffix: "+", label: "Skilled Artisans" },
    { number: 99, suffix: "%", label: "Client Satisfaction" },
  ];

  return (
    <div>
      <section className="py-16 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                onViewportEnter={() => setStartAnimation(true)}
                className="p-4 rounded-lg hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl font-extrabold mb-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent drop-shadow-lg">
                  {startAnimation && (
                    <CountUp
                      start={0}
                      end={stat.number}
                      duration={2.5}
                      suffix={stat.suffix}
                    />
                  )}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutStats;
