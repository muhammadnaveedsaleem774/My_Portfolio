import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const phrases = [
  "Full Stack Developer",
  "Creating Digital Experiences",
  "Engineering Scalable Backends",
  "Designing Future-Ready Interfaces",
  "Turning Ideas into Interactive Reality"
];


const AnimatedTypingText = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[index];
    const timeout = setTimeout(() => {
      if (!deleting && subIndex === currentPhrase.length) {
        setTimeout(() => setDeleting(true), 1500);
        return;
      }
      if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % phrases.length);
        return;
      }
      setSubIndex((prev) => deleting ? prev - 1 : prev + 1);
      setText(currentPhrase.substring(0, subIndex));
    }, deleting ? 60 : 120);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  return (
    <motion.p
      className="text-xl md:text-2xl font-serif text-gray-300 whitespace-nowrap h-8 sm:h-10 md:h-12 mx-auto max-w-[90vw]"
      whileHover={{ scale: 1.01 }}
    >
      {text}
      <motion.span
        className="inline-block w-1 bg-gray-300 ml-1"
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      />
    </motion.p>
  );
};

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const techStack = ['React', 'Node.js', 'TypeScript', 'MongoDB', 'Express', 'Tailwind CSS', 'GraphQL', 'Next.js'];

  useEffect(() => { setIsVisible(true); }, []);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <section className="flex-1 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-cyan-900"></div>

        <div className="relative z-20 w-full px-4 py-12 sm:py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="space-y-6 sm:space-y-8 md:space-y-10">
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-sans bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text px-4"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Hi, I'm Muhammad Naveed Saleem
              </motion.h1>

              <AnimatedTypingText />

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6">
              <Link to="/contact">
  <motion.button
    className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors duration-300 shadow-lg hover:shadow-indigo-500/30"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Get in Touch
  </motion.button>
</Link>

<Link to="/projects">
  <motion.button
    className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors duration-300 shadow-lg hover:shadow-gray-500/20"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    View Projects
  </motion.button>
</Link>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-12 sm:mt-16 md:mt-20"
            >
              <motion.p
                className="text-gray-400 font-sans text-sm sm:text-base uppercase tracking-wider mb-4 sm:mb-6"
                whileHover={{ scale: 1.05 }}
              >
                Technologies I Work With
              </motion.p>

              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-2xl mx-auto">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="px-4 py-2 bg-gray-800/80 hover:bg-gray-700/90 rounded-full text-sm sm:text-base shadow-md"
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.3)"
                    }}
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <motion.svg
            className="w-8 h-8 text-gray-400 hover:text-gray-300 transition-colors"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            whileHover={{ scale: 1.2 }}
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </motion.svg>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;