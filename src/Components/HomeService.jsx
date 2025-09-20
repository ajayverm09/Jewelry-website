import { motion } from 'framer-motion';
import { FaGem, FaClock, FaRing, FaGift, FaSearchDollar, FaPen, FaTools, FaUsers } from 'react-icons/fa';

const ServicesSection = () => {
  const services = [
    { 
      title: 'Custom Jewelry', 
      description: 'Design your unique piece with our expert artisans.', 
      icon: <FaGem className="w-12 h-12" />
    },
    { 
      title: 'Luxury Watches', 
      description: 'Discover our exclusive collection of premium timepieces.', 
      icon: <FaClock className="w-12 h-12" />
    },
    { 
      title: 'Gold Accessories', 
      description: 'Elegant gold necklaces, bracelets, and rings.', 
      icon: <FaRing className="w-12 h-12" />
    },
    { 
      title: 'Gift Collections', 
      description: 'Curated jewelry sets perfect for special occasions.', 
      icon: <FaGift className="w-12 h-12" />
    },
    { 
      title: 'Jewelry Appraisal', 
      description: 'Professional evaluation and certification of your jewelry.', 
      icon: <FaSearchDollar className="w-12 h-12" />
    },
    { 
      title: 'Custom Engraving', 
      description: 'Personalize your jewelry with exquisite engraving services.', 
      icon: <FaPen className="w-12 h-12" />
    },
    { 
      title: 'Repair & Maintenance', 
      description: 'Expert care and repair for your precious items.', 
      icon: <FaTools className="w-12 h-12" />
    },
    { 
      title: 'Consultation Services', 
      description: 'Get guidance on selecting and investing in fine jewelry.', 
      icon: <FaUsers className="w-12 h-12" />
    }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-black text-yellow-400 w-full overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-yellow-500"
          >
            Our Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl text-yellow-300 max-w-3xl mx-auto"
          >
            Discover our range of exquisite jewelry and accessories, crafted with precision and luxury in mind.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 h-full flex flex-col items-center text-center group border border-yellow-500"
            >
              <div className="text-yellow-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-yellow-500 group-hover:text-yellow-300 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-yellow-300 text-base md:text-lg flex-grow">
                {service.description}
              </p>
              <div className="mt-4 w-12 h-1 bg-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;