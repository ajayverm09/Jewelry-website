import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.03, boxShadow: "0 15px 30px rgba(255, 215, 0, 0.3)" }}
      className="bg-gray-900 p-6 rounded-xl shadow-lg border border-yellow-500 flex flex-col items-center text-center transition-all duration-300"
    >
      <div className="flex flex-col items-center mb-4">
        <img 
          src={testimonial.avatar} 
          alt={testimonial.name} 
          className="w-20 h-20 rounded-full mb-3 border-2 border-yellow-500 object-cover"
        />
        <h4 className="font-semibold text-yellow-400 text-lg">{testimonial.name}</h4>
        <div className="flex mt-2">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <FaStar key={i} className="text-yellow-500 mr-1" />
          ))}
          {Array.from({ length: 5 - testimonial.rating }).map((_, i) => (
            <FaStar key={i} className="text-gray-600 mr-1" />
          ))}
        </div>
      </div>
      <p className="text-yellow-300 italic">"{testimonial.content}"</p>
    </motion.div>
  );
};

export default TestimonialCard;
