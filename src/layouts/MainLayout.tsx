import React, { ReactNode, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, color } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import {  Home,  User,
  FolderGit2, 
  FileText,
  Code,      
  Mail} from 'lucide-react';
  import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { url } from 'inspector';




interface MainLayoutProps {
  children: ReactNode;
}

interface NavItem {
  path: string;
  label: string;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape' && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { 
      name: "Home", 
      path: "/", 
      Icon: Home, 
      color: "#0ea5e9",       // sky-500
      hoverColor: "#38bdf8"   // sky-400
    },
    { 
      name: "About", 
      path: "/about", 
      Icon: User, 
      color: "#9333ea",       // purple-600
      hoverColor: "#a855f7"   // purple-500
    },
    { 
      name: "Projects",       // New item
      path: "/projects", 
      Icon: FolderGit2,       // or LayoutGrid for a different icon
      color: "#f59e0b",      // amber-500
      hoverColor: "#fbbf24"  // amber-400
    },
    { 
      name: "Resume", 
      path: "/resume", 
      Icon: FileText, 
      color: "#f97316",      // orange-500
      hoverColor: "#fb923c"  // orange-400
    },
    { 
      name: "Skills", 
      path: "/skills", 
      Icon: Code, 
      color: "#22c55e",      // green-500
      hoverColor: "#4ade80"  // green-400
    },
    { 
      name: "Contact", 
      path: "/contact", 
      Icon: Mail, 
      color: "#ef4444",      // red-500
      hoverColor: "#f87171"  // red-400
    }
  ];

  const socials = [
    { name: 'github', Icon: FaGithub, url: "https://github.com/muhammadnaveedsaleem774", color: '#171515' },
    { name: 'linkedin', Icon: FaLinkedin, url: "www.linkedin.com/in/muhammad-naveed-saleem", color: '#0077B5' },
    { name: 'whatsapp', Icon: FaWhatsapp, url: "https://wa.me/923146298725?text=Hello%2C%20I%20am%20interested%20in%20your%20services", color: '#25D366' },
    { name: 'instagram', Icon: FaInstagram, url: "https://www.instagram.com/builtbynavid", color: '#E1306C' },
  ];

  return (
    
    <div  className=" min-h-screen flex flex-col bg-gray-900 m-0 p-0">
      <header className="sticky top-0 z-50 bg-gray-800/80 backdrop-blur-lg border-b border-gray-700 ">
        <nav className="max-w-7xl mx-auto px-4 py-4 " role="navigation">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="text-2xl font-bold"
              style={{ 
                background: 'linear-gradient(90deg,#3b82f6, #8b5cf6)', 
                WebkitBackgroundClip: 'text', 
                backgroundClip: 'text', 
                color: 'transparent' 
              }}
            >
              Portfolio
            </Link>
            <ul className="hidden md:flex items-center space-x-8">
              {navItems.map(({name,path,Icon,color}) => (
                <li key={name}>
                  <Link
                    to={path}
                    className={`flex items-center  hover:bg-cyan-500/30 pr-2 hover:text-white  hover:px-3 py-2 rounded-lg transition-all duration-200 ${
                      location.pathname === path ? 'text-blue-400 font-bold px-2 py-2 bg-cyan-500/10 rounded-lg' : 'text-gray-300'
                    }`}
                    aria-current={location.pathname === path ? 'page' : undefined}
                  >
                   <Icon className="h-5 w-5 mr-2" color={color} />
                   {name}
                   
                  </Link>
                </li>
              ))}
            </ul>

            <button
              className="md:hidden p-2 z-50 relative hover:bg-gray-700 rounded-lg transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 transition-transform duration-300 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                style={{ transform: isMobileMenuOpen ? 'rotate(90deg)' : 'none' }}
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          <AnimatePresence>
  {isMobileMenuOpen && (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ type: 'tween', duration: 0.2 }}
      id="mobile-menu"
      className="absolute top-14 right-2 w-full bg-gray-800 shadow-xl rounded-lg border border-gray-200 z-10 p-10  md:hidden"
      role="menu"
      aria-modal="true"
    >
      <div  className="flex flex-col space-y-4"  >
        {navItems.map(({path, name,Icon,color},index) => (
          <motion.div
            key={path}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * index}}
          >
            <Link
              to={path}
              className={`flex items-center  hover:bg-cyan-500/20 text-gray-200 hover:font-bold hover:text-white px-2 py-2 rounded-lg border border-cyan-500/20 transition-all duration-200 ${
                location.pathname === path ? 'text-blue-500 bg-cyan-500/15 font-bold px-2 py-2 rounded-lg' : 'text-white-700'
              } hover:text-blue-500 transition`}
              onClick={() => setIsMobileMenuOpen(false)}
            ><Icon className="w-5 h-5 mr-2" color={color}/>
                  {name}
            </Link>
           
          </motion.div>
        ))}
      </div>
    </motion.div>
  )}
</AnimatePresence>

        </nav>
      </header>

      <main className="flex-grow bg-gray-900 m-0 p-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <footer className="bg-gray-800 border-t border-gray-700">
  <div className="container-wrapper py-12">
    {/* Main Footer Content */}
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
      {/* Brand Column */}
      <div className="md:col-span-5 lg:col-span-4">
        <div className="flex flex-col h-full">
          <div className="mb-6">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-sans font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                Portfolio
              </span>
            </Link>
          </div>
          
          <p className="text-gray-300 font-serif text-lg mb-6">
            Crafting exceptional digital experiences with cutting-edge technologies.
          </p>
          
          <div className=" mt-auto">
      <div className="flex space-x-4">
        {socials.map(({ name, Icon, url,color }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-500/10 hover:bg-cyan-500/20 text-gray-300 hover:text-white p-3 rounded-full transition-all duration-300 hover:-translate-y-1"
            aria-label={name}
          >
            <Icon className="h-5 w-5 " strokeWidth={1.5} color={color} />
            
          </a>
          
        ))}
       
      </div>
    </div>
        </div>
      </div>

      {/* Quick Links Column */}
      <div className="md:col-span-3 lg:col-span-2">
      <h3 className="text-lg font-sans font-semibold text-white mb-4 pb-2 relative text-center md:text-left after:absolute after:bottom-0 after:left-1/2 md:after:left-0 after:-translate-x-1/2 md:after:translate-x-0 after:w-24 after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-purple-500">
       Quick Links
</h3>
        <nav>
          <ul className="space-y-4">
            {navItems.map(({name,path,Icon,color}) => (
              <li key={path}>
                <Link 
                  to={path} 
                 className="flex items-center bg-cyan-500/10 hover:bg-cyan-500/20 text-gray-200 hover:text-white px-2 py-2 rounded-lg border border-cyan-500/20 transition-all duration-200"
                >
                   <span className="w-3 h-3  mt-4 mr-0"></span>
                  <Icon className="flex text-center w-5 h-5 mr-2 "color={color} />
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Contact Column */}
      <div className="md:col-span-4  lg:col-span-6">
        <div className="bg-cyan-500/10 rounded-xl p-6 backdrop-blur-sm border border-gray-600/50 h-full">
        <h3 className="text-lg font-semibold  font-sans text-white mb-6 pb-2 relative
  after:content-[''] after:absolute after:left-1/2 after:bottom-0
  after:-translate-x-1/2 after:w-20 after:h-0.5
  after:bg-gradient-to-r after:from-blue-500 after:to-purple-500">
  Get in Touch
</h3>

          
          <ul className="space-y-4">
            {/* Email */}
            <li className="flex items-center space-x-4">
  <div className="bg-purple-500/10 p-2 rounded-lg ">
    <svg className="h-5 w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  </div>
  <p className="text-white text-sm font-serif">
    <span className="text-gray-400 font-medium mr-1">Email:</span>
    <a href="mailto:mail@gmail.com" className="hover:text-blue-300 transition-colors duration-200">navidbscs2239@gmail.com</a>
  </p>
</li>

            
            {/* Phone */}
            <li className="flex items-center space-x-4">
  <div className="bg-purple-500/10 p-2 rounded-lg">
    <svg className="h-5 w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  </div>
  <p className="text-white text-sm font-serif ">
    <span className="text-gray-400 font-medium mr-1">Phone:</span>
    <a href="tel:+1234567890" className="hover:text-purple-300 transition-colors duration-200">+92 (314) 6298-725</a>
  </p>
</li>

            
            {/* Location */}
           <li className="flex items-center space-x-4">
  <div className="bg-green-500/10 p-2 rounded-lg">
    <svg className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  </div>
  <p className="text-white font-serif text-sm">
    <span className="text-gray-400 font-medium  mr-1">Location:</span>
    Multan Punjab, Pakistan
  </p>
</li>

          </ul>
          
          <div className="mt-8 pt-6 border-t border-gray-600/50">
            <h4 className="text-sm font-semibold text-gray-400 mb-4">Available for freelance work</h4>
        <Link to="/contact" className="w-full">
          <motion.button
            className="btn-primary w-full flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
           >
              <span>Contact Me</span>
               <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
           </motion.button>
        </Link>
          </div>
        </div>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="border-t border-gray-700 mt-12 pt-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 font-serif text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Portfolio. All rights reserved.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <a href="#" className="text-gray-400 font-serif hover:text-white text-sm transition-colors duration-200">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-400 font-serif hover:text-white text-sm transition-colors duration-200">
            Terms of Service
          </a>
          <a href="#" className="text-gray-400 font-serif hover:text-white text-sm transition-colors duration-200">
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