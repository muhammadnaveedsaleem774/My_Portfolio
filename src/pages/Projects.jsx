import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiEye, FiCode } from 'react-icons/fi';
import { FaReact, FaJs, FaCss3Alt, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiFirebase, SiTypescript } from 'react-icons/si';
const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative h-96 w-full"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isHovered ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Front of card */}
        <motion.div 
          className="absolute w-full h-full bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700/50 flex flex-col"
          style={{ 
            backfaceVisibility: 'hidden',
            zIndex: isHovered ? 0 : 1 
          }}
        >
          <div className="relative h-48 w-full overflow-hidden group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              onError={(e) => {
                e.target.src = `https://placehold.co/600x400/1f2937/ffffff?text=${project.title.replace(/\s+/g, '+')}`;
                e.target.className = "w-full h-full object-contain bg-gray-700 p-4";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="px-3 py-1 bg-blue-600/90 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                {project.category}
              </span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
              <span className="text-white font-medium flex items-center">
                <FiEye className="mr-2" /> View Details
              </span>
            </div>
          </div>
          
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
            <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
            
            <div className="mt-auto pt-4 border-t border-gray-700/50">
              <div className="flex items-center gap-3">
                {project.techIcons.map((Icon, index) => (
                  <div 
                    key={index} 
                    className="text-gray-400 hover:text-blue-400 transition-colors text-lg"
                    title={project.technologies[index]}
                  >
                    {Icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Back of card */}
        <motion.div 
          className="absolute w-full h-full bg-gray-800 rounded-xl border border-gray-700/50 flex flex-col p-6"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            zIndex: isHovered ? 1 : 0
          }}
        >
          <div className="flex-grow">
            <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
            <p className="text-gray-300 mb-6">{project.description}</p>
            
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                Built With
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-700/50 text-xs text-gray-200 rounded-full backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-300 shadow-md hover:shadow-blue-500/20"
            >
              <FiExternalLink className="w-4 h-4" />
              Live Demo
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition duration-300"
            >
              <FiGithub className="w-4 h-4" />
              View Code
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [flippedCard, setFlippedCard] = useState(null);
// In your projects array, update the techIcons with colored icons:
const projects = [
  {
    id: 1,
    title: 'To-Do App',
    description: 'A productivity app to manage daily tasks with CRUD operations and local storage.',
    image: '/todoapp.png',
    technologies: ['React', 'LocalStorage', 'Tailwind CSS'],
    techIcons: [
      <FaReact key="react" className="text-[#61DAFB]" />, // React blue
      <FaDatabase key="db" className="text-blue-500" />, // Database blue
      <SiTailwindcss key="tailwind" className="text-[#38BDF8]" /> // Tailwind cyan
    ],
    category: 'Web App',
    liveLink: 'https://my-to-do-app-eight-lac.vercel.app',
    githubLink: 'https://github.com/muhammadnaveedsaleem774/My_to_do_app.git',
  },
  {
    id: 2,
    title: 'Dice Roller',
    description: 'Interactive dice rolling simulator with realistic animations and sound effects.',
    image: '/d.jpeg',
    technologies: ['JavaScript', 'CSS Animations', 'React'],
    techIcons: [
      <FaJs key="js" className="text-[#F7DF1E]" />, // JavaScript yellow
      <FaCss3Alt key="css" className="text-[#1572B6]" />, // CSS blue
      <FaReact key="react" className="text-[#61DAFB]" /> // React blue
    ],
    category: 'Game',
    liveLink: 'https://dice-live.vercel.app',
    githubLink: 'https://github.com/muhammadnaveedsaleem774/Dice_live.git',
  },
  {
    id: 3,
    title: 'Password Generator',
    description: 'Secure random password generator with customizable options and clipboard copy.',
    image: '/download.png',
    technologies: ['JavaScript', 'React', 'Clipboard API'],
    techIcons: [
      <FaJs key="js" className="text-[#F7DF1E]" />, // JavaScript yellow
      <FaReact key="react" className="text-[#61DAFB]" />, // React blue
      <FiCode key="code" className="text-gray-400" /> // Code icon (gray)
    ],
    category: 'Tool',
    liveLink: 'https://dice-sk1c.vercel.app',
    githubLink: 'https://github.com/muhammadnaveedsaleem774/Dice.git',
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'Real-time weather information with 5-day forecast and location detection.',
    image: 'https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80',
    technologies: ['API Integration', 'React', 'Chart.js'],
    techIcons: [
      <FaReact key="react" className="text-[#61DAFB]" />, // React blue
      <FaNodeJs key="node" className="text-[#339933]" />, // Node.js green
      <SiTypescript key="ts" className="text-[#3178C6]" /> // TypeScript blue
    ],
    category: 'Web App',
    liveLink: '#',
    githubLink: '#',
  },
  {
    id: 5,
    title: 'Expense Tracker',
    description: 'Financial management app to track income, expenses with visual analytics.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80',
    technologies: ['React', 'Context API', 'Chart.js'],
    techIcons: [
      <FaReact key="react" className="text-[#61DAFB]" />, // React blue
      <SiTypescript key="ts" className="text-[#3178C6]" />, // TypeScript blue
      <FaDatabase key="db" className="text-blue-500" /> // Database blue
    ],
    category: 'Web App',
    liveLink: '#',
    githubLink: '#',
  },
  {
    id: 6,
    title: 'Recipe Finder',
    description: 'Search and save your favorite recipes with ingredients and cooking instructions.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80',
    technologies: ['React', 'API Integration', 'Firebase'],
    techIcons: [
      <FaReact key="react" className="text-[#61DAFB]" />, // React blue
      <FaNodeJs key="node" className="text-[#339933]" />, // Node.js green
      <SiFirebase key="firebase" className="text-[#FFCA28]" /> // Firebase yellow
    ],
    category: 'Web App',
    liveLink: '#',
    githubLink: '#',
  }
];
  const filters = ['All', 'Web App', 'Game', 'Tool'];
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const toggleFlip = (id) => {
    setFlippedCard(flippedCard === id ? null : id);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const cardItem = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="projects" className="relative py-20 bg-dark-900 overflow-hidden px-4 sm:px-6">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-900/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-900/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            My Work
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Selected projects showcasing my skills and experience
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id}
              variants={cardItem}
              layout
              className="h-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-gray-400 mb-4">No projects found in this category</div>
            <button 
              onClick={() => setActiveFilter('All')}
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium shadow-lg hover:shadow-blue-500/30 transition-all"
            >
              View All Projects
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;