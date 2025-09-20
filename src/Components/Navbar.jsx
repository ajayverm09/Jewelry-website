import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  const location = useLocation();
  const navRef = useRef(null);
  const underlineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Contact', path: '/contact' },
  ];

  // Function to update underline position
  const updateUnderlinePosition = () => {
    if (!navRef.current || !underlineRef.current) return;
    
    const activeElement = navRef.current.querySelector(`a[href="${activeLink}"]`);
    if (!activeElement) return;
    
    const linkRect = activeElement.getBoundingClientRect();
    const navRect = navRef.current.getBoundingClientRect();
    
    underlineRef.current.style.width = `${linkRect.width}px`;
    underlineRef.current.style.left = `${linkRect.left - navRect.left}px`;
  };

  useEffect(() => {
    updateUnderlinePosition();
    
    // Update on window resize
    const handleResize = () => {
      updateUnderlinePosition();
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeLink]);

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-sm shadow-lg py-2' : 'bg-black py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative">
            <Link to="/" className="text-yellow-400 text-2xl font-bold tracking-wider flex items-center">
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Aurum Luxe
              </span>
            </Link>
            <motion.div 
              className="absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-500 rounded-full"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 relative" ref={navRef}>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <div key={link.name} className="relative">
                  <Link
                    to={link.path}
                    className="font-medium px-2 py-1"
                  >
                    {isActive ? (
                      <motion.span
                        animate={{
                          textShadow: [
                            "0 0 5px rgba(251, 191, 36, 0.8)",
                            "0 0 10px rgba(251, 191, 36, 0.8)",
                            "0 0 15px rgba(251, 191, 36, 0.8)",
                            "0 0 20px rgba(251, 191, 36, 0.8)",
                            "0 0 15px rgba(251, 191, 36, 0.8)",
                            "0 0 10px rgba(251, 191, 36, 0.8)",
                            "0 0 5px rgba(251, 191, 36, 0.8)"
                          ]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                        className="text-yellow-300"
                      >
                        {link.name}
                      </motion.span>
                    ) : (
                      <motion.span 
                        className="text-yellow-400"
                        whileHover={{ 
                          textShadow: "0 0 8px rgba(251, 191, 36, 0.6)",
                          color: "#fde68a"
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {link.name}
                      </motion.span>
                    )}
                  </Link>
                </div>
              );
            })}
            
            {/* Animated Underline */}
            <motion.div
              ref={underlineRef}
              className="absolute bottom-0 h-1 bg-yellow-400 rounded-full"
              animate={{
                boxShadow: [
                  "0 0 5px rgba(251, 191, 36, 0.8)",
                  "0 0 10px rgba(251, 191, 36, 0.8)",
                  "0 0 15px rgba(251, 191, 36, 0.8)",
                  "0 0 20px rgba(251, 191, 36, 0.8)",
                  "0 0 15px rgba(251, 191, 36, 0.8)",
                  "0 0 10px rgba(251, 191, 36, 0.8)",
                  "0 0 5px rgba(251, 191, 36, 0.8)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button 
              onClick={toggleMenu}
              className="text-yellow-400 focus:outline-none p-1"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                ) : (
                  <>
                    <motion.path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 12h16"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    />
                    <motion.path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 18h16"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    />
                  </>
                )}
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 pb-4 overflow-hidden"
            >
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <motion.div
                      key={link.name}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        to={link.path}
                        className={`font-medium block px-2 py-2 rounded-lg ${
                          isActive 
                            ? 'bg-yellow-500/10 text-yellow-300' 
                            : 'text-yellow-400 hover:bg-yellow-500/5'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {isActive ? (
                          <motion.span
                            animate={{
                              textShadow: [
                                "0 0 5px rgba(251, 191, 36, 0.8)",
                                "0 0 10px rgba(251, 191, 36, 0.8)",
                                "0 0 15px rgba(251, 191, 36, 0.8)",
                                "0 0 20px rgba(251, 191, 36, 0.8)",
                                "0 0 15px rgba(251, 191, 36, 0.8)",
                                "0 0 10px rgba(251, 191, 36, 0.8)",
                                "0 0 5px rgba(251, 191, 36, 0.8)"
                              ]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatType: "reverse"
                            }}
                          >
                            {link.name}
                          </motion.span>
                        ) : (
                          <motion.span 
                            whileHover={{ 
                              textShadow: "0 0 8px rgba(251, 191, 36, 0.6)",
                              color: "#fde68a"
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            {link.name}
                          </motion.span>
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;