import { motion } from 'framer-motion';
import myImage from '../assets/mypro.jpg';

const About = () => {
  const education = [
    {
      degree: 'BS in Computer Science',
      school: 'Bahauddin Zakariya University, Multan',
      year: '2022 - 2026',
      description:
        'Currently pursuing a degree in Computer Science with a strong focus on full-stack web development, software engineering, and real-world problem solving.',
    },
    {
      degree: 'FSc (Pre-Medical)',
      school: 'Punjab Group of Colleges, Multan',
      year: '2019 - 2021',
      description:
        'Scored 1013 out of 1100 marks in FSc (Pre-Medical). Currently pursuing a degree in Computer Science with a strong focus on full-stack web development, software engineering, and real-world problem solving.',
    }
    ,
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const skills = [
    {
      name: 'React.js',
      icon: 'https://cdn.worldvectorlogo.com/logos/react-2.svg',
      description: [
        { no: '1.', name: 'Built SPAs with functional components' },
        { no: '2.', name: 'State management with Redux Toolkit' },
        { no: '3.', name: 'Responsive UIs using React Router' },
        { no: '4.', name: 'Performance optimization techniques' },
        { no: '5.', name: 'Reusable component libraries' }
      ],
      experience: '2 years'
    },
    {
      name: 'Node.js',
      icon: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg',
      description: [
        { no: '1.', name: 'RESTful API development' },
        { no: '2.', name: 'Server-side applications' },
        { no: '3.', name: 'Asynchronous programming' },
        { no: '4.', name: 'Middleware implementation' },
        { no: '5.', name: 'Error handling strategies' }
      ],
      experience: '1.5 years'
    },
    {
      name: 'Express.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      description: [
        { no: '1.', name: 'Backend service creation' },
        { no: '2.', name: 'Middleware development' },
        { no: '3.', name: 'Route handling' },
        { no: '4.', name: 'API security practices' },
        { no: '5.', name: 'Server optimization' }
      ],
      experience: '1.5 years',
      className: "h-8 w-8 object-contain filter invert"
    },
    {
      name: 'MongoDB',
      icon: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg',
      description: [
        { no: '1.', name: 'NoSQL database design' },
        { no: '2.', name: 'CRUD operations' },
        { no: '3.', name: 'Schema validation' },
        { no: '4.', name: 'Indexing strategies' },
        { no: '5.', name: 'Aggregation pipelines' }
      ],
      experience: '1 year'
    },
    {
      name: 'Tailwind CSS',
      icon: 'https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg',
      description: [
        { no: '1.', name: 'Utility-first CSS' },
        { no: '2.', name: 'Responsive design' },
        { no: '3.', name: 'Component styling' },
        { no: '4.', name: 'Dark mode implementation' },
        { no: '5.', name: 'Custom theme creation' }
      ],
      experience: '1 year'
    },
    {
      name: 'Firebase',
      icon: 'https://cdn.worldvectorlogo.com/logos/firebase-1.svg',
      description: [
        { no: '1.', name: 'Authentication services' },
        { no: '2.', name: 'Realtime database' },
        { no: '3.', name: 'Cloud functions' },
        { no: '4.', name: 'Hosting solutions' },
        { no: '5.', name: 'Performance monitoring' }
      ],
      experience: '8 months'
    },
    {
      name: 'Next.js',
      icon: 'https://cdn.worldvectorlogo.com/logos/next-js.svg',
      description: [
        { no: '1.', name: 'SSR applications' },
        { no: '2.', name: 'Static site generation' },
        { no: '3.', name: 'API routes' },
        { no: '4.', name: 'Image optimization' },
        { no: '5.', name: 'Middleware usage' }
      ],
      experience: '1 year'
    },
    {
      name: 'JavaScript',
      icon: 'https://cdn.worldvectorlogo.com/logos/javascript-1.svg',
      description: [
        { no: '1.', name: 'ES6+ features' },
        { no: '2.', name: 'Asynchronous programming' },
        { no: '3.', name: 'DOM manipulation' },
        { no: '4.', name: 'Event handling' },
        { no: '5.', name: 'Modern frameworks' }
      ],
      experience: '3 years'
    },
    {
      name: 'HTML5',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      description: [
        { no: '1.', name: 'Semantic markup' },
        { no: '2.', name: 'Accessibility standards' },
        { no: '3.', name: 'Form validation' },
        { no: '4.', name: 'Canvas/SVG usage' },
        { no: '5.', name: 'SEO best practices' }
      ],
      experience: '4 years',
      className: "h-8 w-8 object-contain"
    },
    {
      name: 'CSS3',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      description: [
        { no: '1.', name: 'Responsive design' },
        { no: '2.', name: 'Flexbox/Grid layouts' },
        { no: '3.', name: 'CSS animations' },
        { no: '4.', name: 'Preprocessors (Sass)' },
        { no: '5.', name: 'BEM methodology' }
      ],
      experience: '4 years',
      className: "h-8 w-8 object-contain"
    },
    {
      name: 'Bootstrap',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
      description: [
        { no: '1.', name: 'Rapid prototyping' },
        { no: '2.', name: 'Component library' },
        { no: '3.', name: 'Responsive utilities' },
        { no: '4.', name: 'Custom theming' },
        { no: '5.', name: 'Mobile-first approach' }
      ],
      experience: '3 years',
      className: "h-8 w-8 object-contain"
    },
    {
      name: 'Python',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      description: [
        { no: '1.', name: 'Scripting automation' },
        { no: '2.', name: 'Data analysis (Pandas)' },
        { no: '3.', name: 'Django/Flask frameworks' },
        { no: '4.', name: 'Web scraping' },
        { no: '5.', name: 'Algorithm implementation' }
      ],
      experience: '3 years',
      className: "h-8 w-8 object-contain"
    },
    {
      name: 'C++',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
      description: [
        { no: '1.', name: 'Data structures' },
        { no: '2.', name: 'Algorithm design' },
        { no: '3.', name: 'Memory management' },
        { no: '4.', name: 'OOP principles' },
        { no: '5.', name: 'STL usage' }
      ],
      experience: '2 years',
      className: "h-8 w-8 object-contain filter brightness-0 invert"
    }
  ];
  return (
    <div className="min-h-screen py-12 relative overflow-hidden bg-gradient-to-br from-gray-900 to-cyan-900">
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="w-[600px] h-[600px] bg-purple-900 opacity-10 rounded-full blur-3xl absolute top-0 -left-40 animate-pulse"></div>
        <div className="w-[400px] h-[400px] bg-blue-900 opacity-10 rounded-full blur-2xl absolute bottom-0 -right-32 animate-spin-slow"></div>
      </div>

      
      <div className="max-w-6xl  mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl  sm:text-4xl md:text-5xl lg:text-5xl font-sans font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Muhammad Naveed Saleem
          </h1>
          <p className="text-lg font-serif text-gray-300 mt-2">Aspiring Full-Stack Developer & AI Enthusiast</p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-blue-500/20 shadow-2xl">
              <img
                src={myImage}
                alt="Muhammad Naveed Saleem"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 rounded-full border-2 border-white/10 pointer-events-none"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500 rounded-full z-[-1] opacity-20 animate-pulse"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500 rounded-full z-[-1] opacity-20 animate-pulse-slow"></div>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Muhammad Naveed Saleem
            </h2>
            <p className="text-lg font-serif text-gray-300 leading-relaxed">
              I'm a passionate Full-Stack Developer specializing in the MERN stack, with expertise in building responsive, 
              performant web applications. My journey in tech combines formal education with hands-on experience creating 
              real-world solutions.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700/50 hover:border-blue-400/30 transition-all">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Experience</h3>
                    <p className="text-sm text-gray-400">2+ years building web applications</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700/50 hover:border-purple-400/30 transition-all">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-purple-500/10 rounded-lg">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Specialization</h3>
                    <p className="text-sm text-gray-400">MERN Stack & Responsive Design</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills */}
 {/* Skills Section */}
 <motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.3 }}
  className="mt-24"
>
  <h2 className="text-3xl font-bold mb-8 font-sans text-purple-500/80 text-center">My Skills</h2>

  <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-4">
    {skills.map((skill, idx) => (
      <motion.div
        key={idx}
        className="flip-card h-64" // Fixed height for consistency
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flip-card-inner h-full">
          {/* Front Side */}
          <div className="flip-card-front bg-gray-980 flex flex-col items-center justify-center border border-cyan-800 rounded-lg p-4">
            <img 
              src={skill.icon} 
              alt={skill.name} 
              className={`w-12 h-12 object-contain ${skill.className || ''}`}
            />
            <h3 className="mt-3 text-white font-medium text-lg">{skill.name}</h3>
          </div>
          
          {/* Back Side */}
          <div className="flip-card-back bg-gray-980 border border-indigo-400 rounded-lg flex flex-col p-4">
            <div className="flex-grow overflow-y-auto">
              <ul className="text-gray-300 font-serif text-sm space-y-2 pr-2">
                {skill.description.map((item, i) => (
                  <li key={i} className="flex">
                    <span className="text-indigo-400 font-medium mr-2">{item.no}</span>
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-indigo-400 font-serif text-sm font-medium mt-3 pt-2 border-t border-gray-700">
              Experience: {skill.experience}
            </p>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</motion.div>    {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-24"
        >
          <h2 className="text-3xl font-bold mb-8 font-sans text-center text-white">Education Journey</h2>
          <div className="space-y-8">
            {education.map((item, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: 0.2 * index }}
                className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-indigo-600 before:rounded-full before:shadow-lg"
              >
                <div className="absolute left-[5px] top-3 w-[1px] h-full bg-gray-700"></div>
                <h3 className="font-bold font-sans text-lg text-blue-400">{item.degree}</h3>
                <p className="text-gray-300 font-sans">{item.school}</p>
                <p className="text-sm text-purple-400 font-serif font-semibold">{item.year}</p>
                <p className="mt-2 text-gray-400 font-serif">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
