import React, { ReactNode, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, User, FolderGit2, FileText, Code, Mail, 
  Github, Linkedin, MessageSquare, Instagram, ChevronDown,
  ChevronUp ,Phone, MapPin, ArrowRight,GraduationCap,Briefcase,HelpCircle 
} from 'lucide-react';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);


  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { 
      name: "Home", 
      path: "/", 
      Icon: Home, 
      color: "text-blue-400",
    },
    { name: "About", path: "/about", Icon: User, color: "text-purple-400" },
    { name: "Projects", path: "/projects", Icon: FolderGit2, color: "text-amber-400" },
    { name: "Resume", path: "/resume", Icon: FileText, color: "text-orange-400" },
    { name: "Skills", path: "/skills", Icon: Code, color: "text-emerald-400" },
    { name: "Contact", path: "/contact", Icon: Mail, color: "text-rose-400" }
  ];

  const socials = [
    { name: 'github', Icon: Github, url: "https://github.com/muhammadnaveedsaleem774", color: "hover:bg-gray-700" },
    { name: 'linkedin', Icon: Linkedin, url: "https://linkedin.com/in/muhammad-naveed-saleem", color: "hover:bg-blue-600" },
    { name: 'whatsapp', Icon: MessageSquare, url: "https://wa.me/923146298725?text=Hi%20Muhammad%2C%20I%27m%20interested%20in%20your%20Web%20Development%20services.%20Let%27s%20discuss%20my%20project!", color: "hover:bg-green-500" },
    { name: 'instagram', Icon: Instagram, url: "https://instagram.com/builtbynavid", color: "hover:bg-pink-600" },
  ];
  const scrollToSection = (hash) => {
    const element = document.getElementById(hash.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Update URL hash without triggering scroll
      window.history.pushState(null,  hash);
    }
  };
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
      {/* Enhanced Header */}
      <header className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900   ' : 'bg-gray-900  '
      } border-b border-gray-800`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center"
              >
                <span className="text-white font-bold text-sm">MN</span>
              </motion.div>
              <motion.span 
                className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
              >
                M.Naveed
              </motion.span>
            </Link>

            
<div className="hidden md:flex items-center space-x-8 relative">
  {navItems.map((item) => (
    <div key={item.path} className="relative group">
        <Link
          to={item.path}
          className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
            location.pathname === item.path 
              ? `${item.color} bg-gray-800/50` 
              : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/30'
          }`}
        >
          <item.Icon className="h-5 w-5 mr-2" />
          {item.name}
        </Link>
      
    </div>
  ))}
</div>



            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md inline-flex items-center justify-center text-gray-400 hover:text-white focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>

{/* Mobile Menu */}
<AnimatePresence>
  {isMobileMenuOpen && (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="md:hidden bg-gray-800 border-t border-gray-700 overflow-hidden"
    >
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {navItems.map((item) => (
          <div key={item.path}>
            <Link
              to={item.path}
              className={`flex items-center px-3 py-3 rounded-md text-base font-medium transition-all duration-200 ${
                location.pathname === item.path 
                  ? `${item.color} bg-gray-700/50` 
                  : 'text-gray-400 hover:text-gray-200 hover:bg-gray-700/30'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <item.Icon className="h-5 w-5 mr-3" />
              {item.name}
            </Link>
          </div>
        ))}
      </div>
      <div className="px-4 py-4 border-t border-gray-700 flex justify-center space-x-4">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-full bg-gray-700 text-white ${social.color} transition-colors duration-200`}
          >
            <social.Icon className="h-5 w-5" />
          </a>
        ))}
      </div>
    </motion.div>
  )}
</AnimatePresence>
</header>
      {/* Main Content */}
      <main className="flex-grow pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-gray-800/50 backdrop-blur-sm border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Brand Info */}
            <div className="md:col-span-4">
              <div className="flex flex-col h-full">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">MN</span>
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    M.Naveed
                  </span>
                </div>
                <p className="text-gray-400 mb-6">
                  Crafting exceptional digital experiences with cutting-edge technologies.
                </p>
                <div className="flex space-x-4 mt-auto">
                  {socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-full bg-gray-700 text-white ${social.color} transition-colors duration-200`}
                    >
                      <social.Icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3">
              <h3 className="text-lg font-semibold text-white mb-4 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-purple-500">
                Quick Links
              </h3>
              <nav>
                <ul className="space-y-3">
                  {navItems.map((item) => (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        className={`flex items-center text-gray-400 hover:text-white transition-colors duration-200 ${
                          location.pathname === item.path ? item.color : ''
                        }`}
                      >
                        <item.Icon className="h-4 w-4 mr-2" />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-5">
              <div className="bg-gray-700/30 rounded-xl p-6 border border-gray-600/50 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white mb-6 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-purple-500">
                  Get in Touch
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-blue-500/10 p-2 rounded-lg mr-4">
                      <Mail className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <a href="mailto:navidbscs2239@gmail.com" className="text-white hover:text-blue-300 transition-colors">
                        navidbscs2239@gmail.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-purple-500/10 p-2 rounded-lg mr-4">
                      <Phone className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <a href="tel:+923146298725" className="text-white hover:text-purple-300 transition-colors">
                        +92 314 6298725
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-emerald-500/10 p-2 rounded-lg mr-4">
                      <MapPin className="h-5 w-5 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Location</p>
                      <p className="text-white">Multan, Punjab, Pakistan</p>
                    </div>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-gray-600/50">
                  <Link to="/contact">
                    <motion.button
                      className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Contact Me
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} Muhammad Naveed. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;