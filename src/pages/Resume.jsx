import { motion } from 'framer-motion';
import { FiDownload, FiExternalLink, FiAward, FiBookOpen } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaMobileAlt, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiFirebase, SiRedux } from 'react-icons/si';
import { FaJs } from 'react-icons/fa';
import { FiCode } from 'react-icons/fi';

const Resume = () => {
  // Professional Experience
  const experiences = [
    {
      title: 'React Native Developer (Intern)',
      company: 'Self-Driven Projects',
      period: '2024 - Present',
      description: 'Developed mobile applications using React Native and Firebase, focusing on smooth UI, authentication, and real-time database functionality.',
      achievements: [
        'Built 3 production-ready mobile apps with Expo and React Native',
        'Implemented Firebase authentication and real-time database',
        'Optimized app performance reducing load times by 40%'
      ],
      technologies: [
        { name: 'React Native', icon: <FaMobileAlt className="text-blue-400" /> },
        { name: 'Firebase', icon: <SiFirebase className="text-yellow-400" /> },
        { name: 'Expo', icon: <FaReact className="text-blue-500" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> }
      ]
    },
    {
      title: 'Frontend Web Developer (Freelance)',
      company: 'Personal Portfolio Projects',
      period: '2023 - 2024',
      description: 'Built responsive websites using React, Tailwind CSS, and modern design principles. Shared coding content and built LinkedIn presence to showcase projects.',
      achievements: [
        'Developed 10+ responsive web applications',
        'Created technical content with 50k+ impressions',
        'Implemented CI/CD pipelines for automated deployments'
      ],
      technologies: [
        { name: 'React', icon: <FaReact className="text-blue-500" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
        { name: 'Vite', icon: <FiCode className="text-purple-400" /> }
      ]
    }
  ];

  // Education
  const education = [
    {
      degree: 'BS in Computer Science',
      institution: 'Bahauddin Zakariya University, Multan',
      period: '2022 - 2026',
      description: 'Specializing in software engineering and web development. Coursework includes data structures, algorithms, and database systems.',
      icon: <FiBookOpen className="text-blue-400" />
    }
  ];

  // Certifications
  const certifications = [
    {
      title: 'Meta Front-End Developer Professional Certificate',
      issuer: 'Coursera',
      date: '2024',
      description: 'Comprehensive front-end development program covering React, UI/UX principles, and state management.',
      icon: <FiAward className="text-yellow-400" />,
      link: '#'
    },
    {
      title: 'React Native - The Practical Guide',
      issuer: 'Udemy',
      date: '2023',
      description: 'Mastered React Native fundamentals, navigation, and Firebase integration.',
      icon: <FiAward className="text-purple-400" />,
      link: '#'
    }
  ];

  // Skills by category
  const skillCategories = [
    {
      name: 'Frontend Development',
      skills: [
        { name: 'React', level: 90 },
        { name: 'React Native', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'Tailwind CSS', level: 90 }
      ],
      icon: <FaReact className="text-blue-400" />
    },
    {
      name: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'Express', level: 70 },
        { name: 'REST APIs', level: 80 }
      ],
      icon: <FaNodeJs className="text-green-400" />
    },
    {
      name: 'Database & Cloud',
      skills: [
        { name: 'MongoDB', level: 75 },
        { name: 'Firebase', level: 80 },
        { name: 'SQL', level: 70 }
      ],
      icon: <FaDatabase className="text-orange-400" />
    },
    {
      name: 'Tools & Platforms',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'VS Code', level: 90 },
        { name: 'Figma', level: 70 }
      ],
      icon: <FiCode className="text-purple-400" />
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-dark-900 text-gray-100 relative overflow-hidden">
     

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-secondary-500 text-transparent bg-clip-text">
            My Resume
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my professional journey, skills, and qualifications
          </p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.a
              href="/naveedresume.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors duration-300 shadow-lg hover:shadow-primary-500/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload className="w-5 h-5" />
              Download Resume
            </motion.a>
            <motion.a
              href="/contact"
              className="flex items-center gap-2 px-6 py-3 bg-dark-700 hover:bg-dark-600 text-white rounded-lg font-medium transition-colors duration-300 shadow-lg hover:shadow-gray-500/20 border border-dark-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Skills */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-dark-800/50 backdrop-blur-sm p-6 rounded-xl border border-dark-700 mb-8"
            >
              <h2 className="text-2xl font-bold mb-6 text-primary-400">Skills Overview</h2>
              
              {skillCategories.map((category, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-primary-500/10 rounded-lg mr-3">
                      {category.icon}
                    </div>
                    <h3 className="font-semibold text-lg">{category.name}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between text-sm mb-1">
                          <span>{skill.name}</span>
                          <span className="text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-dark-700 rounded-full h-2">
                          <motion.div
                            className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.1 * index }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-dark-800/50 backdrop-blur-sm p-6 rounded-xl border border-dark-700 mb-8"
            >
              <h2 className="text-2xl font-bold mb-6 text-secondary-400">Education</h2>
              
              {education.map((edu, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  <div className="flex items-start mb-2">
                    <div className="p-2 bg-secondary-500/10 rounded-lg mr-3">
                      {edu.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-white">{edu.degree}</h3>
                      <p className="text-gray-300">{edu.institution}</p>
                      <p className="text-sm text-secondary-400">{edu.period}</p>
                    </div>
                  </div>
                  <p className="text-gray-400 ml-11">{edu.description}</p>
                </div>
              ))}
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-dark-800/50 backdrop-blur-sm p-6 rounded-xl border border-dark-700"
            >
              <h2 className="text-2xl font-bold mb-6 text-indigo-400">Certifications</h2>
              
              {certifications.map((cert, index) => (
                <div key={index} className="mb-6 last:mb-0 group">
                  <div className="flex items-start mb-2">
                    <div className="p-2 bg-indigo-500/10 rounded-lg mr-3">
                      {cert.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-white group-hover:text-indigo-400 transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-gray-300">{cert.issuer}</p>
                      <p className="text-sm text-indigo-400">{cert.date}</p>
                    </div>
                  </div>
                  <p className="text-gray-400 ml-11 mb-2">{cert.description}</p>
                  <a
                    href={cert.link}
                    className="ml-11 text-sm text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                  >
                    <FiExternalLink className="w-4 h-4" />
                    View Credential
                  </a>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Experience */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-dark-800/50 backdrop-blur-sm p-6 rounded-xl border border-dark-700"
            >
              <h2 className="text-2xl font-bold mb-8 text-white">Professional Experience</h2>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 h-full w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500"></div>
                
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    className="relative pl-12 pb-12 last:pb-0"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-1 w-4 h-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full border-4 border-dark-900 shadow-lg"></div>
                    
                    {/* Content */}
                    <div className="bg-dark-700/50 hover:bg-dark-700/70 p-6 rounded-xl border border-dark-600 transition-all duration-300">
                      <div className="flex flex-wrap items-center justify-between mb-3">
                        <h3 className="text-xl font-bold text-primary-400">{exp.title}</h3>
                        <span className="text-secondary-400 font-medium">{exp.period}</span>
                      </div>
                      <p className="text-gray-300 font-medium mb-4">{exp.company}</p>
                      <p className="text-gray-400 mb-4">{exp.description}</p>
                      
                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-400 mb-2">KEY ACHIEVEMENTS</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, aIndex) => (
                            <li key={aIndex} className="flex">
                              <span className="text-primary-400 mr-2">•</span>
                              <span className="text-gray-300">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 mb-2">TECHNOLOGIES USED</h4>
                        <div className="flex flex-wrap gap-3">
                          {exp.technologies.map((tech, techIndex) => (
                            <div
                              key={techIndex}
                              className="flex items-center px-3 py-1 bg-dark-600 rounded-full border border-dark-500"
                            >
                              <div className="mr-2">
                                {tech.icon}
                              </div>
                              <span className="text-sm text-gray-300">{tech.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Additional Sections */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Projects */}
              <div className="bg-dark-800/50 backdrop-blur-sm p-6 rounded-xl border border-dark-700">
                <h3 className="text-xl font-bold mb-4 text-white">Featured Projects</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-secondary-400 mr-2 mt-1">•</span>
                    <div>
                      <h4 className="font-medium text-gray-300">To-Do App</h4>
                      <p className="text-sm text-gray-400">Productivity app with local storage</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-400 mr-2 mt-1">•</span>
                    <div>
                      <h4 className="font-medium text-gray-300">Dice Roller</h4>
                      <p className="text-sm text-gray-400">Interactive dice simulator</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-400 mr-2 mt-1">•</span>
                    <div>
                      <h4 className="font-medium text-gray-300">Password Generator</h4>
                      <p className="text-sm text-gray-400">Secure password creator</p>
                    </div>
                  </li>
                </ul>
                <a
                  href="#projects"
                  className="inline-flex items-center text-sm text-primary-400 hover:text-primary-300 mt-4"
                >
                  View all projects
                  <FiExternalLink className="ml-1 w-4 h-4" />
                </a>
              </div>

              {/* Languages */}
              <div className="bg-dark-800/50 backdrop-blur-sm p-6 rounded-xl border border-dark-700">
                <h3 className="text-xl font-bold mb-4 text-white">Languages</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>English</span>
                      <span className="text-gray-400">Professional</span>
                    </div>
                    <div className="w-full bg-dark-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Urdu</span>
                      <span className="text-gray-400">Native</span>
                    </div>
                    <div className="w-full bg-dark-700 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Punjabi</span>
                      <span className="text-gray-400">Native</span>
                    </div>
                    <div className="w-full bg-dark-700 rounded-full h-2">
                      <div className="bg-indigo-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;