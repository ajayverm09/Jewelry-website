import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const ContactFaq = () => {
  const faqs = [
    {
      question: "How can I purchase a custom jewelry piece?",
      answer:
        "You can contact us through the form or visit our showroom. Our experts will guide you through design, selection, and crafting.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes! We offer worldwide shipping with secure packaging and tracking for all orders.",
    },
    {
      question: "Can I request a repair or redesign?",
      answer:
        "Absolutely. We provide repair and redesign services for all jewelry purchased from our store.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept credit cards, bank transfers, and digital wallets. Financing options are available for select pieces.",
    },
    {
      question: "Do you offer gift packaging?",
      answer:
        "Yes, all jewelry orders can be gift-wrapped in our signature black and gold packaging.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const [imageHeight, setImageHeight] = useState(500);
  const faqRefs = useRef([]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    // Calculate total FAQ height
    let totalHeight = 500; // base image height
    if (openIndex !== null && faqRefs.current[openIndex]) {
      const faqHeight = faqRefs.current[openIndex].scrollHeight;
      totalHeight += faqHeight + 32; // extra padding for spacing
    }
    setImageHeight(totalHeight);
  }, [openIndex]);

  return (
    <section className="bg-black text-yellow-400 py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-start gap-8 md:gap-12">
        
        {/* Left Image */}
        <motion.div
          className="md:w-1/2 w-full flex-shrink-0 rounded-xl overflow-hidden"
          animate={{ height: imageHeight }}
          transition={{ type: "spring", stiffness: 150, damping: 20 }}
        >
          <img
            src="https://media.istockphoto.com/id/1182639652/photo/attractive-middle-age-couple-at-jewelry-store.jpg?s=612x612&w=0&k=20&c=pzaBDvLxYUb6XN7M5F3oVWYXoEE-I1U_szTcfurdYjE="
            alt="Gold Jewelry"
            className="w-full h-full object-cover rounded-xl border-4 border-yellow-500 shadow-2xl"
          />
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          className="md:w-1/2 w-full space-y-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 text-yellow-500">
            Frequently Asked Questions
          </h2>

          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              layout
              className="bg-gray-900 rounded-xl border border-yellow-500 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 font-semibold hover:bg-yellow-500 hover:text-black transition-colors"
              >
                <span>{faq.question}</span>
                {openIndex === index ? <ChevronUp /> : <ChevronDown />}
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="px-6 py-4 text-gray-300 bg-black"
                    ref={(el) => (faqRefs.current[index] = el)}
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactFaq;
