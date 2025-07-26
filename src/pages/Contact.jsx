import { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import { FiMail, FiMapPin, FiPhone, FiArrowRight, FiSend, FiCheck, FiX } from 'react-icons/fi';
import { FaLinkedinIn, FaGithub, FaTwitter, FaDiscord, FaWhatsapp } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('contact');
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
      const response = await axios.post('https://api.yourportfolio.com/contact', formData);
      setStatus({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.'
      });
      setFormData({ name: '', email: '', message: '' });
      formRef.current.reset();
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.response?.data?.message || 'Failed to send message. Please try again later.'
      });
    } finally {
      setLoading(false);
    }
  };

  const professionalInfo = [
    {
      title: "Availability",
      value: "Open to opportunities",
      icon: <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse mr-2" />
    },
    {
      title: "Preferred Roles",
      value: "Full-stack, Frontend, or UI/UX",
      icon: <FiCheck className="text-green-400 mr-2" />
    },
    {
      title: "Remote Work",
      value: "Fully remote or hybrid",
      icon: <FiMapPin className="text-blue-400 mr-2" />
    },
    {
      title: "Response Time",
      value: "Within 24 hours",
      icon: <FiPhone className="text-purple-400 mr-2" />
    }
  ];

  const contactMethods = [
    {
      name: 'Email',
      value: 'muhammadnaveedsaleem774@gmail.com',
      href: 'mailto:muhammadnaveedsaleem774@gmail.com',
      icon: FiMail,
      action: 'Send me an email'
    },
    {
      name: 'LinkedIn',
      value: 'muhammad-naveed-saleem',
      href: 'https://linkedin.com/in/muhammad-naveed-saleem',
      icon: FaLinkedinIn,
      action: 'Connect professionally'
    },
    {
      name: 'GitHub',
      value: 'muhammadnaveedsaleem774',
      href: 'https://github.com/muhammadnaveedsaleem774',
      icon: FaGithub,
      action: 'View my code'
    },
    {
      name: 'Upwork',
      value: 'Muhammad Naveed Saleem',
      href: 'https://www.upwork.com/freelancers/~014163b572e684c07c?mp_source=share',
      icon: SiUpwork,
      action: 'Hire me'
    }
  ];

  const quickLinks = [
    {
      name: 'Resume',
      href: '/naveedresume.pdf',
      icon: <span className="text-xs font-bold">CV</span>,
      description: 'Download my latest resume'
    },
    {
      name: 'Projects',
      href: '/projects',
      icon: <span className="text-xs font-bold">PJ</span>,
      description: 'View my portfolio'
    },
    {
      name: 'Blog',
      href: '#blog',
      icon: <span className="text-xs font-bold">BL</span>,
      description: 'Read my articles'
    },
    {
      name: 'Testimonials',
      href: '#testimonials',
      icon: <span className="text-xs font-bold">TM</span>,
      description: 'See client feedback'
    }
  ];

  return (
    <section 
      id="contact" 
      ref={ref} 
      className="relative py-28 bg-dark-900 overflow-hidden"
    >
      {/* Animated cursor follower */}
      <motion.div
        className="fixed pointer-events-none z-0 w-80 h-80 rounded-full bg-radial-gradient from-primary-500/5 to-transparent"
        animate={{
          x: cursorPosition.x - 160,
          y: cursorPosition.y - 160,
          transition: { type: 'spring', mass: 0.1 }
        }}
      />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500 rounded-full mix-blend-overlay filter blur-3xl opacity-5"
          animate={{
            scale: [1, 1.2, 1],
            translateX: ['0%', '5%', '0%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-secondary-500 rounded-full mix-blend-overlay filter blur-3xl opacity-5"
          animate={{
            scale: [1, 1.3, 1],
            translateY: ['0%', '10%', '0%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 tracking-tight">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Whether you have a project in mind or just want to chat about tech, I'd love to hear from you.
          </p>
          
          {/* Animated tabs */}
          <div className="flex justify-center mt-8">
            <div className="inline-flex bg-gray-800 rounded-lg p-1">
              {['contact', 'quick links', 'professional'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-gray-700 text-white shadow-sm'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
          >
            {/* Left Column - Contact Form */}
            {(activeTab === 'contact') && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-primary-500/30 transition-all duration-500"
              >
                <div className="flex items-center mb-8">
                  <div className="p-3 rounded-lg bg-primary-500/10 text-primary-400 mr-4">
                    <FiSend className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Send a Message</h3>
                    <p className="text-gray-400">I typically respond within 24 hours</p>
                  </div>
                </div>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-1">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                      Your Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-700/30 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 placeholder-gray-500"
                        placeholder="Enter Name"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <span className="text-gray-500 text-sm">01/03</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-700/30 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 placeholder-gray-500"
                        placeholder="navid@example.com"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <span className="text-gray-500 text-sm">02/03</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                      Your Message
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full px-4 py-3 bg-gray-700/30 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 placeholder-gray-500"
                        placeholder="Tell me about your project..."
                      ></textarea>
                      <div className="absolute bottom-3 right-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 text-sm">03/03</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <motion.button
                      type="submit"
                      disabled={loading}
                      className="w-full group relative overflow-hidden rounded-lg bg-gradient-to-r from-primary-600 to-primary-700 py-3 px-6 font-medium text-white shadow-lg transition-all duration-300 hover:shadow-xl disabled:opacity-70"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-10 flex items-center justify-center space-x-2">
                        {loading ? (
                          <>
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <FiSend className="transition-transform group-hover:translate-x-1" />
                            <span>Send Message</span>
                          </>
                        )}
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </motion.button>
                  </div>

                  {status && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className={`rounded-lg p-4 ${
                        status.type === 'success' 
                          ? 'bg-green-900/30 text-green-400 border border-green-800' 
                          : 'bg-red-900/30 text-red-400 border border-red-800'
                      }`}
                    >
                      <div className="flex items-start">
                        {status.type === 'success' ? (
                          <FiCheck className="flex-shrink-0 mt-1 mr-3 text-xl" />
                        ) : (
                          <FiX className="flex-shrink-0 mt-1 mr-3 text-xl" />
                        )}
                        <div>{status.message}</div>
                      </div>
                    </motion.div>
                  )}
                </form>
              </motion.div>
            )}

            {/* Left Column - Quick Links */}
            {(activeTab === 'quick links') && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-secondary-500/30 transition-all duration-500"
              >
                <div className="flex items-center mb-8">
                  <div className="p-3 rounded-lg bg-secondary-500/10 text-secondary-400 mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Quick Links</h3>
                    <p className="text-gray-400">Access important resources quickly</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {quickLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      className="group relative overflow-hidden bg-gray-800/50 border border-gray-700 rounded-lg p-4 transition-all duration-300 hover:border-secondary-500/50 hover:bg-gray-700/30"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onMouseEnter={() => setHoveredItem(`quick-${index}`)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gray-700 group-hover:bg-secondary-500/10 flex items-center justify-center transition-colors duration-300">
                          {link.icon}
                        </div>
                        <div>
                          <h4 className="font-medium text-white group-hover:text-secondary-400 transition-colors duration-300">
                            {link.name}
                          </h4>
                          <p className="text-sm text-gray-400">{link.description}</p>
                        </div>
                      </div>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-secondary-500/5 to-transparent opacity-0 group-hover:opacity-100"
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: hoveredItem === `quick-${index}` ? 0.1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Left Column - Professional Info */}
            {(activeTab === 'professional') && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-indigo-500/30 transition-all duration-500"
              >
                <div className="flex items-center mb-8">
                  <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-400 mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Professional Info</h3>
                    <p className="text-gray-400">Details for recruiters and collaborators</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {professionalInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      className="flex items-start space-x-4 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50 hover:border-indigo-500/50 transition-colors duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onMouseEnter={() => setHoveredItem(`professional-${index}`)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <div className="flex-shrink-0 pt-1">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-300">{info.title}</h4>
                        <p className="text-gray-400">{info.value}</p>
                      </div>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0"
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: hoveredItem === `professional-${index}` ? 0.1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Right Column - Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-8"
            >
  

{/* Contact Methods Section */}
<section className="bg-gray-800/70 backdrop-blur-md border border-gray-700/60 rounded-2xl p-8  transition-all duration-300 hover:border-primary-500/40 shadow-lg">
  {/* Section Header */}
  <header className="flex items-start md:items-center gap-4 mb-6 md:mb-8">
    <div className="p-3 rounded-xl bg-primary-500/10 text-primary-400/90 shadow-sm">
      <FiPhone className="text-xl md:text-2xl" />
    </div>
    <div>
      <h2 className="text-xl md:text-2xl font-bold text-white leading-tight">
        Contact Methods
      </h2>
      <p className="text-sm md:text-base text-gray-400/90 mt-1">
        Reach out through your preferred channel
      </p>
    </div>
  </header>

  {/* Contact Cards Grid */}
  <div className="grid grid-cols-1 md:grid-cols-1 gap-3 md:gap-4">
    {contactMethods.map((method, index) => (
      <motion.article
        key={method.name}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.3 }}
        whileHover={{ y: -2 }}
        className="group relative overflow-hidden"
      >
        <a
          href={method.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-4 md:p-5 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-primary-500/40 transition-all duration-300"
        >
          {/* Contact Method Info */}
          <div className="flex items-center gap-4 min-w-0">
            <div className="flex-shrink-0 p-3 rounded-lg bg-gray-700/50 group-hover:bg-primary-500/10 transition-colors duration-300 shadow-sm">
              <method.icon className="text-lg md:text-xl text-gray-300 group-hover:text-primary-400 transition-colors" />
            </div>
            <div className="min-w-0">
              <h3 className="text-sm md:text-base font-semibold text-white truncate">
                {method.name}
              </h3>
              <p className="text-xs md:text-sm text-gray-400/80 truncate mt-0.5">
                {method.value}
              </p>
            </div>
          </div>

          {/* Action Indicator */}
          <div className="flex-shrink-0 ml-4">
            <span className="inline-flex items-center text-xs md:text-sm font-medium text-gray-500 group-hover:text-primary-400 transition-colors">
              <span className="hidden md:inline mr-1">{method.action}</span>
              <FiArrowRight className="text-sm" />
            </span>
          </div>

          {/* Hover Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-primary-500/2 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 pointer-events-none" />
        </a>
      </motion.article>
    ))}
  </div>
</section>

             {/* Location & Availability */}
<div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 md:p-8 hover:border-secondary-500/30 transition-all duration-500">
  {/* Header */}
  <div className="flex flex-col sm:flex-row sm:items-center mb-6 md:mb-8 gap-4">
    <div className="p-3 rounded-lg bg-secondary-500/10 text-secondary-400 w-fit">
      <FiMapPin className="text-xl" />
    </div>
    <div>
      <h3 className="text-xl sm:text-2xl font-bold text-white">Location & Availability</h3>
      <p className="text-sm sm:text-base text-gray-400">Where I work and when I'm available</p>
    </div>
  </div>

  {/* Content */}
  <div className="space-y-4 md:space-y-6">
    {/* Location Info */}
    <div className="flex flex-col sm:flex-row items-start gap-4 p-4 bg-gray-800/30 rounded-lg">
      <div className="flex-shrink-0 p-2 sm:p-3 rounded-lg bg-gray-700/50 text-secondary-400">
        <FiMapPin className="text-lg sm:text-xl" />
      </div>
      <div>
        <h4 className="text-sm sm:text-base font-medium text-gray-300">Based in</h4>
        <p className="text-gray-400">Multan Punjab, Pakistan</p>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">Open to remote opportunities worldwide</p>
      </div>
    </div>

    {/* Availability Info */}
    <div className="flex flex-col sm:flex-row items-start gap-4 p-4 bg-gray-800/30 rounded-lg">
      <div className="flex-shrink-0 p-2 sm:p-3 rounded-lg bg-gray-700/50 flex items-center justify-center">
        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500 animate-pulse" />
      </div>
      <div>
        <h4 className="text-sm sm:text-base font-medium text-gray-300">Current Status</h4>
        <p className="text-gray-400">Available for new projects</p>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">Full-time, contract, or freelance</p>
      </div>
    </div>

    {/* Map Section */}
    <div className="aspect-w-16 aspect-h-9 rounded-lg sm:rounded-xl overflow-hidden border border-gray-700 mt-4 sm:mt-6 relative">
      {/* Map placeholder with subtle animation - responsive */}
      <div className="w-full h-48 sm:h-64 bg-gray-800 flex items-center justify-center">
        <div className="text-center px-4">
          <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-gray-700/50 flex items-center justify-center">
            <FiMapPin className="text-xl sm:text-2xl text-secondary-400 animate-bounce" />
          </div>
          <p className="text-sm sm:text-base text-gray-500">Multan Punjab, Pakistan</p>
          <p className="text-xs text-gray-600 mt-1 sm:mt-2">UTC-7 (Pacific Time)</p>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent pointer-events-none" />
    </div>
  </div>
</div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16 pt-8 border-t border-gray-800/50"
        >
          <p className="text-gray-500">
            Made with ❤️ by M.Navid Saleem • Last updated {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;