import { motion } from 'framer-motion';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    id: 1,
    name: 'Sophia Williams',
    rating: 5,
    content: 'The custom gold necklace I ordered exceeded my expectations. Exceptional craftsmanship and service!',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    id: 2,
    name: 'James Anderson',
    rating: 4,
    content: 'Beautiful luxury watch collection. The team guided me perfectly and made the buying experience seamless.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: 3,
    name: 'Isabella Martinez',
    rating: 5,
    content: 'Their jewelry repair and engraving service is top-notch. I love the personal touch they added to my gift.',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-black text-yellow-400">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold mb-4 text-yellow-500"
          >
            Client Testimonials
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-yellow-300 max-w-2xl mx-auto"
          >
            Hear what our satisfied clients have to say about their exquisite jewelry experience
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TestimonialCard testimonial={testimonial} theme="gold" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
