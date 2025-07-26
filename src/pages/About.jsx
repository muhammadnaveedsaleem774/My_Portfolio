import { motion } from 'framer-motion';
import myImage from '../assets/mypro.jpg';
import { FaGraduationCap, FaCode, FaServer, FaDatabase, FaPalette, FaMobileAlt } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiFirebase } from 'react-icons/si';
import { TbBrandCpp } from 'react-icons/tb';

const About = () => {
  // Education data
  const education = [
    {
      degree: 'BS in Computer Science',
      school: 'Bahauddin Zakariya University, Multan',
      year: '2022 - 2026',
      description: 'Currently pursuing a degree in Computer Science with a strong focus on full-stack web development, software engineering, and real-world problem solving.',
      icon: <FaGraduationCap className="text-blue-400" />
    },
    {
      degree: 'FSc (Pre-Medical)',
      school: 'Punjab Group of Colleges, Multan',
      year: '2019 - 2021',
      description: 'Scored 1013 out of 1100 marks in FSc (Pre-Medical). Developed strong analytical and problem-solving skills.',
      icon: <FaGraduationCap className="text-purple-400" />
    }
  ];

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Skills data organized by category
  const skillCategories = [
    {
      name: 'Frontend Development',
      icon: <FaCode className="text-blue-400" />,
      skills: [
        {
          name: 'React.js',
          icon: 'https://cdn.worldvectorlogo.com/logos/react-2.svg',
          experience: '2 years',
          proficiency: 90,
          projects: 15
        },
        {
          name: 'Next.js',
          icon: <SiNextdotjs className="text-white" />,
          experience: '1 year',
          proficiency: 85,
          projects: 8
        },
        {
          name: 'TypeScript',
          icon: <SiTypescript className="text-blue-500" />,
          experience: '1.5 years',
          proficiency: 80,
          projects: 12
        }
      ]
    },
    {
      name: 'Backend Development',
      icon: <FaServer className="text-purple-400" />,
      skills: [
        {
          name: 'Node.js',
          icon: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg',
          experience: '1.5 years',
          proficiency: 85,
          projects: 10
        },
        {
          name: 'Express.js',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
          experience: '1.5 years',
          proficiency: 80,
          projects: 10,
          className: "filter invert"
        }
      ]
    },
    {
      name: 'Database & Cloud',
      icon: <FaDatabase className="text-indigo-400" />,
      skills: [
        {
          name: 'MongoDB',
          icon: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg',
          experience: '1 year',
          proficiency: 75,
          projects: 7
        },
        {
          name: 'Firebase',
          icon: <SiFirebase className="text-yellow-400" />,
          experience: '8 months',
          proficiency: 70,
          projects: 5
        }
      ]
    },
    {
      name: 'UI/UX Design',
      icon: <FaPalette className="text-pink-400" />,
      skills: [
        {
          name: 'Tailwind CSS',
          icon: 'https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg',
          experience: '1 year',
          proficiency: 90,
          projects: 15
        },
        {
          name: 'Framer Motion',
          icon: 'https://cdn.worldvectorlogo.com/logos/framer-motion.svg',
          experience: '1 year',
          proficiency: 80,
          projects: 10
        }
      ]
    },
    {
      name: 'Other Technologies',
      icon: <FaMobileAlt className="text-green-400" />,
      skills: [
        {
          name: 'C++',
          icon: <TbBrandCpp className="text-blue-400" />,
          experience: '2 years',
          proficiency: 75,
          projects: 5
        },
        {
          name: 'Python',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
          experience: '3 years',
          proficiency: 80,
          projects: 8
        }
      ]
    }
  ];

  // Experience data
  const experiences = [
    {
      role: 'Freelance Full-Stack Developer',
      company: 'Self-Employed',
      period: '2022 - Present',
      description: 'Developed and deployed 15+ web applications for clients across various industries. Specialized in MERN stack applications with responsive design and performance optimization.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      icon: <FaCode className="text-blue-400" />
    },
    {
      role: 'Open Source Contributor',
      company: 'GitHub Community',
      period: '2021 - Present',
      description: 'Contributed to various open-source projects, fixing bugs and implementing new features. Maintained several personal projects with 100+ stars on GitHub.',
      technologies: ['JavaScript', 'TypeScript', 'Next.js', 'Firebase'],
      icon: <FaServer className="text-purple-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-dark-900 text-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        {/* Hero Section */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row items-center gap-12"
          >
            {/* Profile Image */}
            <motion.div
              className="relative w-64 h-64 lg:w-80 lg:h-80"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 rounded-2xl border-4 border-primary-500/30 shadow-2xl overflow-hidden">
                <img
                  src={myImage}
                  alt="Muhammad Naveed Saleem"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
             
              
            </motion.div>

            {/* Bio Content */}
            <div className="flex-1">
              <motion.h1
                className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-secondary-500 text-transparent bg-clip-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Muhammad Naveed Saleem
              </motion.h1>
              
              <motion.div
                className="text-xl text-gray-300 mb-6 font-serif"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Full-Stack Developer & AI Enthusiast
              </motion.div>
              
              <motion.p
                className="text-lg text-gray-400 mb-8 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                I specialize in building modern, performant web applications with cutting-edge technologies. 
                My passion lies in creating intuitive user experiences while ensuring robust backend architecture.
              </motion.p>

              {/* Stats Grid */}
              <motion.div
                className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="bg-dark-800/50 backdrop-blur-sm p-4 rounded-xl border border-dark-700 hover:border-primary-500/30 transition-all">
                  <div className="text-primary-400 text-2xl font-bold">15+</div>
                  <div className="text-gray-400 text-sm">Projects Completed</div>
                </div>
                <div className="bg-dark-800/50 backdrop-blur-sm p-4 rounded-xl border border-dark-700 hover:border-secondary-500/30 transition-all">
                  <div className="text-secondary-400 text-2xl font-bold">2+</div>
                  <div className="text-gray-400 text-sm">Years Experience</div>
                </div>
                <div className="bg-dark-800/50 backdrop-blur-sm p-4 rounded-xl border border-dark-700 hover:border-indigo-500/30 transition-all">
                  <div className="text-indigo-400 text-2xl font-bold">12+</div>
                  <div className="text-gray-400 text-sm">Technologies</div>
                </div>
              </motion.div>

              {/* Call to Action */}
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <a
                  href="/contact"
                  className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors duration-300 shadow-lg hover:shadow-primary-500/30"
                >
                  Contact Me
                </a>
                <a
                  href="/projects"
                  className="px-6 py-3 bg-dark-700 hover:bg-dark-600 text-white rounded-lg font-medium transition-colors duration-300 shadow-lg hover:shadow-gray-500/20 border border-dark-600"
                >
                  View Projects
                </a>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-primary-400 to-secondary-500 text-transparent bg-clip-text">
                  Technical Skills
                </span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                I've worked with a variety of technologies across the full stack. Here are my core competencies:
              </p>
            </div>

            {/* Skill Categories */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              {skillCategories.map((category, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-dark-800/50 backdrop-blur-sm p-6 rounded-xl border border-dark-700 hover:border-primary-500/30 transition-all"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-primary-500/10 rounded-lg mr-4">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{category.name}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="group">
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center">
                            {typeof skill.icon === 'string' ? (
                              <img 
                                src={skill.icon} 
                                alt={skill.name}
                                className={`w-6 h-6 object-contain mr-3 ${skill.className || ''}`}
                              />
                            ) : (
                              <div className="w-6 h-6 mr-3 flex items-center justify-center">
                                {skill.icon}
                              </div>
                            )}
                            <span className="font-medium">{skill.name}</span>
                          </div>
                          <span className="text-sm text-gray-400">{skill.experience}</span>
                        </div>
                        
                        {/* Animated proficiency bar */}
                        <div className="w-full bg-dark-700 rounded-full h-2">
                          <motion.div
                            className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.proficiency}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 * index }}
                          />
                        </div>
                        
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>Proficiency</span>
                          <span>{skill.proficiency}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-primary-400 to-secondary-500 text-transparent bg-clip-text">
                  Professional Experience
                </span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                My journey through various roles and responsibilities in the tech industry
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500 transform -translate-x-1/2"></div>
              
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`mb-8 w-full md:w-1/2 ${i % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-auto'}`}
                >
                  <div className={`p-6 rounded-xl bg-dark-800/50 border border-dark-700 relative ${i % 2 === 0 ? 'md:mr-4' : 'md:ml-4'}`}>
                    <div className={`absolute top-6 w-4 h-4 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 ${i % 2 === 0 ? '-right-2 md:-right-8' : '-left-2 md:-left-8'}`}></div>
                    
                    <div className="flex items-start mb-4">
                      <div className="p-3 bg-primary-500/10 rounded-lg mr-4">
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-primary-400">{exp.role}</h3>
                        <p className="text-secondary-400">{exp.company} • {exp.period}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-400 mb-4">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 text-xs bg-dark-700 rounded-full text-gray-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Education Section */}
        <section id="education">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-primary-400 to-secondary-500 text-transparent bg-clip-text">
                  Education
                </span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                My academic background and continuous learning journey
              </p>
            </div>

            <div className="space-y-8">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * index }}
                  className="relative pl-12 before:content-[''] before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:bg-gradient-to-r from-primary-500 to-secondary-500 before:rounded-full before:shadow-lg"
                >
                  <div className="absolute left-[7px] top-6 w-[2px] h-full bg-gradient-to-b from-primary-500 to-secondary-500"></div>
                  
                  <div className="flex items-start mb-2">
                    <div className="p-2 bg-primary-500/10 rounded-lg mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-primary-400">{item.degree}</h3>
                      <p className="text-gray-300">{item.school}</p>
                    </div>
                  </div>
                  
                  <div className="ml-12">
                    <p className="text-sm text-secondary-400 font-medium mb-2">{item.year}</p>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default About;