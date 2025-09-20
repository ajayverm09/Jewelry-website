import { motion } from 'framer-motion';

const WhyChooseUsSection = () => {
  const features = [
    {
      title: 'Masterful Craftsmanship',
      description: 'Each piece is meticulously designed and crafted by skilled artisans to ensure timeless beauty.'
    },
    {
      title: 'Exclusive Designs',
      description: 'We offer unique, high-end jewelry pieces that are not found anywhere else.'
    },
    {
      title: 'Premium Quality',
      description: 'Only the finest gold and gemstones are used to create lasting luxury.'
    },
    {
      title: 'Personalized Experience',
      description: 'Custom design consultations to create jewelry that reflects your individual style.'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-black to-gray-900 text-white">
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
              src="https://img.freepik.com/premium-photo/closeup-hand-holding-magnifying-glass-diamond-ring-jewelry-appraisal-concept-perfect-luxury-goods-marketing-highquality-inspection-ai_372197-33626.jpg" 
              alt="Gold Jewelry Crafting" 
              className="rounded-lg shadow-2xl border-4 border-yellow-500"
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
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Why Choose Aurum Luxe
            </h2>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Glowing Checkmark Circle */}
                  <motion.div 
                    className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-yellow-400 shadow-[0_0_10px_rgba(255,215,0,0.7)] mr-4 mt-1 bg-black"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-yellow-400 font-bold text-lg">✓</span>
                  </motion.div>

                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-yellow-400">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
