import { motion } from 'framer-motion';

const ContactForm = () => {
  return (
    <section className="py-16 bg-black text-yellow-400">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-4 text-yellow-500"
            >
              Get in Touch
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-yellow-300 max-w-2xl mx-auto"
            >
              Have questions or ready to explore our exclusive jewelry collection? Contact us today!
            </motion.p>
          </div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-gray-900 text-yellow-400 p-8 rounded-lg shadow-2xl border border-yellow-500"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-yellow-500 rounded-lg bg-black text-yellow-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-yellow-500 rounded-lg bg-black text-yellow-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-yellow-500 rounded-lg bg-black text-yellow-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-yellow-500 rounded-lg bg-black text-yellow-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  placeholder="Your message"
                ></textarea>
              </div>
              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-600 cursor-pointer text-black font-bold py-3 px-8 rounded-lg transition-colors"
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
