import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import AboutTeam from "../Components/AboutTeam";
import ContactFaq from "../Components/ContactFaq";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <MapPin size={24} className="text-yellow-500" />,
      title: "Our Location",
      details: "123 Golden St, Suite 100<br />New York, NY 10001",
    },
    {
      icon: <Phone size={24} className="text-yellow-500" />,
      title: "Phone Number",
      details: "(555) 123-4567<br />Mon-Fri 9am-6pm",
    },
    {
      icon: <Mail size={24} className="text-yellow-500" />,
      title: "Email Address",
      details: "info@goldjewel.com<br />support@goldjewel.com",
    },
    {
      icon: <Clock size={24} className="text-yellow-500" />,
      title: "Office Hours",
      details: "Mon-Fri: 9am-6pm<br />Sat: 10am-4pm",
    },
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-20"
        style={{
          backgroundImage:
            "url('https://rbzjewellers.com/wp-content/uploads/2023/06/1920x500-copy.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container relative mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-yellow-500"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-200"
          >
            Reach out for exclusive gold jewelry and accessory inquiries
          </motion.p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-6 rounded-xl shadow-lg text-center border border-yellow-500 hover:scale-105 transition-transform duration-300"
              >
                <div className="mb-4 flex justify-center text-3xl">{info.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-yellow-500">{info.title}</h3>
                <p
                  className="text-gray-300"
                  dangerouslySetInnerHTML={{ __html: info.details }}
                ></p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="py-16">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="bg-black p-8 rounded-xl shadow-lg border border-yellow-500">
              <h2 className="text-2xl font-bold mb-6 text-yellow-500">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {["name", "email", "subject"].map((field) => (
                  <div key={field}>
                    <label
                      htmlFor={field}
                      className="block text-sm font-medium mb-1 text-gray-200"
                    >
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                    <input
                      type={field === "email" ? "email" : "text"}
                      id={field}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-yellow-500 bg-black text-gray-200 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                      placeholder={`Your ${field}`}
                      required
                    />
                  </div>
                ))}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1 text-gray-200"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-2 rounded-lg border border-yellow-500 bg-black text-gray-200 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="bg-black p-0 rounded-xl shadow-lg border border-yellow-500 h-full">
              <h2 className="text-2xl font-bold mb-6 text-yellow-500 p-6">Our Location</h2>
              <div className="h-96 md:h-full w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.999751009076!2d-73.98513068459306!3d40.75889604233415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855d2367e27%3A0xb317e1e5f84e6e8a!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1632782162280!5m2!1sen!2sus"
                  className="w-full h-full block border-0 rounded-b-xl"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <AboutTeam />

      {/* FAQ */}
      <ContactFaq />
    </div>
  );
};

export default Contact;
