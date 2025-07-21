import { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [flippedCards, setFlippedCards] = useState({});

  const projects = [
    {
      id: 1,
      title: 'To-Do App',
      description: 'A productivity app to manage daily tasks with CRUD operations and local storage.',
      image: '/todoapp.png',
      technologies: ['React', 'LocalStorage', 'Tailwind CSS'],
      liveLink: 'https://my-to-do-hn6q5kdut-muhammadnaveedsaleem774s-projects.vercel.app',
      githubLink: 'https://github.com/muhammadnaveedsaleem774/My_to_do_app.git',
    },
    {
      id: 2,
      title: 'Dice Roller',
      description: 'Interactive dice rolling simulator with realistic animations.',
      image: '/d.jpeg',
      technologies: ['JavaScript', 'CSS Animations', 'React'],
      liveLink: 'https://dice-live-al2llugfg-muhammadnaveedsaleem774s-projects.vercel.app',
      githubLink: 'https://github.com/muhammadnaveedsaleem774/Dice_live.git',
    },
    {
      id: 3,
      title: 'Password Generator',
      description: 'Secure random password generator with customizable options.',
      image: '/download.png',
      technologies: ['JavaScript', 'React', 'Clipboard API'],
      liveLink: 'https://dice-sk1c-few8jkhbp-muhammadnaveedsaleem774s-projects.vercel.app',
      githubLink: 'https://github.com/muhammadnaveedsaleem774/Dice.git',
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'Real-time weather information with 5-day forecast.',
      image: 'https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80',
      technologies: ['API Integration', 'React', 'Chart.js'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      id: 5,
      title: 'Expense Tracker',
      description: 'Financial management app to track income and expenses.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80',
      technologies: ['React', 'Context API', 'Chart.js'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      id: 6,
      title: 'Recipe Finder',
      description: 'Search and save your favorite recipes with ingredients.',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80',
      technologies: ['React', 'API Integration', 'Firebase'],
      liveLink: '#',
      githubLink: '#',
    }
  ];

  const toggleFlip = (id) => {
    setFlippedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="project">
    <div  className="min-h-screen py-12 bg-gradient-to-br from-gray-900 to-cyan-900bg-gradient-to-br from-gray-900 to-cyan-900 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
            My Projects
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are some of my projects. Click on any card to see more details.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              variants={item}
              className="flip-card h-96 w-full" // Added w-full here
              onClick={() => toggleFlip(project.id)}
            >
              <div className={`flip-card-inner w-full h-full ${flippedCards[project.id] ? 'flipped' : ''}`}>
                {/* Front Side */}
                <div className="flip-card-front  rounded-xl overflow-hidden shadow-lg border border-cyan-700 flex flex-col h-full">
                  {/* Image Container with Fixed Dimensions */}
                  <div className="relative h-48 w-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = `https://placehold.co/600x400/1f2937/ffffff?text=${project.title.replace(/\s+/g, '+')}`;
                        e.target.className = "w-full h-full object-contain bg-gray-700 p-4";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                    <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-700 text-xs text-gray-200 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Back Side */}
                <div className="flip-card-back  rounded-xl border border-cyan-700 p-6 flex flex-col items-center justify-center h-full">
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                    <p className="text-gray-300 mb-6">{project.description}</p>
                  </div>
                  <div className="flex flex-col space-y-3 w-full">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-center transition duration-300 flex items-center justify-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg text-center transition duration-300 flex items-center justify-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

     {/*  */}
    </div>
    </section>
  );
};

export default Projects;