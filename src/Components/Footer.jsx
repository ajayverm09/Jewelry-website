import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Clock,
  ChevronRight,
  Send,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    { name: "Custom Jewelry", path: "/services/custom" },
    { name: "Gold Accessories", path: "/services/accessories" },
    { name: "Jewelry Repair", path: "/services/repair" },
    { name: "Luxury Collections", path: "/services/collections" },
  ];

  const contactInfo = [
    { icon: <MapPin size={18} />, text: "123 Aurum St, New York, NY 10001" },
    { icon: <Phone size={18} />, text: "(555) 987-6543" },
    { icon: <Mail size={18} />, text: "info@aurumluxe.com" },
    { icon: <Clock size={18} />, text: "Mon-Fri: 10am-7pm, Sat: 11am-5pm" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: <Facebook size={20} />, url: "#" },
    { name: "Twitter", icon: <Twitter size={20} />, url: "#" },
    { name: "Instagram", icon: <Instagram size={20} />, url: "#" },
    { name: "LinkedIn", icon: <Linkedin size={20} />, url: "#" },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail("");

      setTimeout(() => setIsSubscribed(false), 3000);
    }, 1000);
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-gradient-to-t from-black to-gray-900 text-white pt-16 pb-6 relative"
    >
      {/* Top Line Accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-500"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold mb-4 flex items-center"
            >
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-300 text-black w-10 h-10 rounded-full flex items-center justify-center mr-2 font-bold">
                A
              </span>
              <Link to="/">
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  Aurum Luxe
                </span>
              </Link>
            </motion.div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Crafting timeless gold jewelry & accessories with passion and
              precision. Experience luxury that shines.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  aria-label={social.name}
                  whileHover={{
                    scale: 1.2,
                    y: -5,
                    color: "#fbbf24",
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400 flex items-center">
              <ChevronRight size={16} className="mr-1" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <motion.li key={link.name} whileHover={{ x: 5 }}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center group"
                  >
                    <span className="mr-2 text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ChevronRight size={14} />
                    </span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400 flex items-center">
              <ChevronRight size={16} className="mr-1" />
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <motion.li key={service.name} whileHover={{ x: 5 }}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center group"
                  >
                    <span className="mr-2 text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ChevronRight size={14} />
                    </span>
                    {service.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400 flex items-center">
              <ChevronRight size={16} className="mr-1" />
              Contact Us
            </h3>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-start group"
                >
                  <span className="text-yellow-400 mr-3 mt-1 group-hover:text-yellow-300 transition-colors">
                    {info.icon}
                  </span>
                  <span className="text-gray-300 group-hover:text-gray-200 transition-colors">
                    {info.text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400 flex items-center">
              <ChevronRight size={16} className="mr-1" />
              Newsletter
            </h3>
            <p className="text-gray-400 mb-4 text-sm">
              Subscribe for updates on new collections and luxury offers
            </p>

            <form onSubmit={handleSubscribe} className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full px-4 py-3 pr-12 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
                required
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isSubmitting}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black p-2 rounded-md transition disabled:opacity-70"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black"></div>
                ) : (
                  <Send size={16} />
                )}
              </motion.button>
            </form>

            {isSubscribed && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-3 p-3 bg-green-900 border border-green-600 rounded-lg text-green-300 text-sm flex items-center"
              >
                <span className="mr-2 text-green-400">✓</span>
                Thank you for subscribing!
              </motion.div>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-yellow-800 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p className="mb-4 md:mb-0">
            &copy; {currentYear} Aurum Luxe. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/privacy"
              className="hover:text-yellow-400 transition-colors flex items-center"
            >
              <ChevronRight size={12} className="mr-1" />
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-yellow-400 transition-colors flex items-center"
            >
              <ChevronRight size={12} className="mr-1" />
              Terms of Service
            </Link>
            <Link
              to="/sitemap"
              className="hover:text-yellow-400 transition-colors flex items-center"
            >
              <ChevronRight size={12} className="mr-1" />
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
