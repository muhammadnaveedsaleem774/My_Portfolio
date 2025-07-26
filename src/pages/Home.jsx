import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowDown, Code, Cpu, Database, 
  GitBranch, Server, Smartphone, 
  TerminalSquare, Webhook, BookOpen,
  BrainCircuit, Network, Binary, 
  CircuitBoard, FunctionSquare, 
  DatabaseBackup, Cloud, ShieldCheck
} from 'lucide-react';
import myImage from '../assets/my.jpg';

// Constants for consistent data
const COURSES = {
  core: [
    { name: "Data Structures & Algorithms", icon: <BrainCircuit />, level: 90 },
    { name: "Design & Analysis of Algorithms", icon: <FunctionSquare />, level: 85 },
    { name: "Operating Systems", icon: <CircuitBoard />, level: 88 },
    { name: "Object-Oriented Programming (C++)", icon: <Binary />, level: 92 },
    { name: "Assembly Language", icon: <Cpu />, level: 80 },
    { name: "Discrete Mathematics", icon: <Network />, level: 87 }
  ],
  web: [
    { name: "Web Engineering", icon: <Code />, level: 95 },
    { name: "Database Systems", icon: <Database />, level: 90 },
    { name: "Computer Networks", icon: <GitBranch />, level: 85 }
  ],
  emerging: [
    { name: "Artificial Intelligence", icon: <BrainCircuit />, level: 82 },
    { name: "Deep Learning Architectures", icon: <DatabaseBackup />, level: 80 },
    { name: "Cloud Computing", icon: <Cloud />, level: 78 },
    { name: "Information Security", icon: <ShieldCheck />, level: 85 }
  ]
};

const AnimatedTypingText = () => {
  const phrases = [
    "Full Stack Developer ",
    "Computer Science Graduate ",
    "Algorithm Specialist ",
    "Systems Programmer ",
    "Web Architect "
  ];

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
  }, [subIndex, deleting, index, phrases]);

  return (
    <motion.p
      className="text-xl md:text-2xl font-medium text-gray-400 h-8 sm:h-10 md:h-12 mx-auto max-w-[90vw]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      {text}
      <motion.span
        className="inline-block w-1 h-6 bg-blue-400 ml-1"
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      />
    </motion.p>
  );
};

const SkillBar = ({ name, level, icon }) => (
  <div className="mb-4">
    <div className="flex justify-between items-center mb-1">
      <div className="flex items-center">
        <div className="mr-2 text-blue-400">{icon}</div>
        <span className="font-medium text-gray-300">{name}</span>
      </div>
      <span className="text-sm text-gray-400">{level}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2">
      <motion.div 
        className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      />
    </div>
  </div>
);

const EducationSection = () => (
  <section id="education" className="py-20 bg-dark-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="relative inline-block">
            Computer Science Education
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
          </span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Core CS Subjects */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hover:bg-gray-800/50 p-6 rounded-xl border border-gray-700"
          >
            <div className="flex items-center mb-6">
              <div className="p-2 rounded-lg bg-blue-500/10 mr-3">
                <BookOpen className="text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Core CS Fundamentals</h3>
            </div>
            {COURSES.core.map((course, i) => (
              <SkillBar key={i} name={course.name} level={course.level} icon={course.icon} />
            ))}
          </motion.div>

          {/* Web Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hover:bg-gray-800/50 p-6 rounded-xl border border-gray-700"
          >
            <div className="flex items-center mb-6">
              <div className="p-2 rounded-lg bg-purple-500/10 mr-3">
                <Webhook className="text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Web & Database</h3>
            </div>
            {COURSES.web.map((course, i) => (
              <SkillBar key={i} name={course.name} level={course.level} icon={course.icon} />
            ))}
          </motion.div>

          {/* Emerging Technologies */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hover:bg-gray-800/50 p-6 rounded-xl border border-gray-700"
          >
            <div className="flex items-center mb-6">
              <div className="p-2 rounded-lg bg-amber-500/10 mr-3">
                <BrainCircuit className="text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Emerging Technologies</h3>
            </div>
            {COURSES.emerging.map((course, i) => (
              <SkillBar key={i} name={course.name} level={course.level} icon={course.icon} />
            ))}
          </motion.div>
        </div>

        {/* University Details */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-dark-900 p-6 rounded-xl border border-gray-700"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-white mb-2">BS Computer Science</h3>
              <p className="text-purple-400">Bahauddin Zakariya University, Multan (Pakistan)
              </p>
              <p className="text-gray-400">2022 - 2026</p>
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-400 mb-4">
                Comprehensive computer science program covering theoretical foundations and practical applications. 
                Graduated with honors (GPA: 3.53/4.0), with coursework emphasizing software engineering principles, 
                algorithm design, and systems programming.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-sm bg-blue-500/10 text-blue-400">Summa Cum Laude</span>
                <span className="px-3 py-1 rounded-full text-sm bg-purple-500/10 text-purple-400">Dean's List</span>
                <span className="px-3 py-1 rounded-full text-sm bg-amber-500/10 text-amber-400">Research Assistant</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);
const TechStackItem = ({ tech, index, isVisible }) => (

  <motion.div
    key={tech.name}
    initial={{ opacity: 0, y: 20 }}
    animate={isVisible ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className={`px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-full shadow-md border border-gray-700 flex items-center space-x-2 transition-all ${tech.color}`}
    whileHover={{
      scale: 1.1,
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.3)"
    }}
  >
    <tech.Icon className="h-4 w-4" />
    <span>{tech.name}</span>
  </motion.div>
);

const ExperienceItem = ({ exp, index }) => (

  <motion.div
    key={index}
    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className={`mb-8 w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-auto'}`}
  >
    <div className={`p-6 rounded-xl bg-gray-700/50 border border-gray-600 relative ${index % 2 === 0 ? 'md:mr-4' : 'md:ml-4'}`}>
      <div className={`absolute top-6 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 ${index % 2 === 0 ? '-right-2 md:-right-8' : '-left-2 md:-left-8'}`}></div>
      <div className="flex items-center mb-2">
        <div className="p-1.5 rounded-lg bg-blue-500/10 mr-3">
          {exp.icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
          <p className="text-purple-400">{exp.company} • {exp.period}</p>
        </div>
      </div>
      <p className="text-gray-400 mt-2">{exp.description}</p>
    </div>
  </motion.div>
);

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const techStack = [
    { name: 'React', Icon: Smartphone, color: 'text-blue-400' },
    { name: 'Node.js', Icon: Server, color: 'text-green-400' },
    { name: 'TypeScript', Icon: TerminalSquare, color: 'text-blue-500' },
    { name: 'MongoDB', Icon: Database, color: 'text-green-500' },
    { name: 'Express', Icon: Webhook, color: 'text-gray-400' },
    { name: 'Tailwind CSS', Icon: Code, color: 'text-cyan-400' },
    { name: 'GraphQL', Icon: GitBranch, color: 'text-pink-500' },
    { name: 'Next.js', Icon: Cpu, color: 'text-gray-300' },
    
  ];

  const experiences = [
    {
      role: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2021 - Present",
      description: "Leading a team to build scalable web applications using React, Node.js, and microservices architecture. Implemented CI/CD pipelines reducing deployment time by 40%.",
      icon: <Code className="text-blue-400" />
    },
    {
      role: "Full Stack Developer",
      company: "Digital Innovations",
      period: "2019 - 2021",
      description: "Developed and maintained multiple client projects with React and Express. Improved application performance by 30% through code optimization.",
      icon: <Server className="text-purple-400" />
    },
    {
      role: "Frontend Developer",
      company: "Web Creators",
      period: "2017 - 2019",
      description: "Built responsive user interfaces and collaborated with designers to implement UI/UX best practices across multiple projects.",
      icon: <Smartphone className="text-amber-400" />
    }
  ];

  const skillGroups = [
    { 
      category: "Frontend Development", 
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Framer Motion"], 
      icon: <Smartphone className="text-blue-400" />,
      color: "from-blue-500/10 to-blue-500/5"
    },
    { 
      category: "Backend Development", 
      skills: ["Node.js", "Express", "NestJS", "MongoDB", "PostgreSQL", "REST APIs"], 
      icon: <Server className="text-purple-400" />,
      color: "from-purple-500/10 to-purple-500/5"
    },
    { 
      category: "DevOps & Tools", 
      skills: ["Docker", "Git", "CI/CD", "AWS", "Vercel", "Firebase"], 
      icon: <TerminalSquare className="text-amber-400" />,
      color: "from-amber-500/10 to-amber-500/5"
    },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-dark-900 text-gray-100">
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-2">
        {/* Floating Tech Icons Background */}
       

        <div className="relative z-20 w-full px-4 py-12 sm:py-16  max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="space-y-6 sm:space-y-8 md:space-y-10 text-center">
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Hi, I'm Muhammad Naveed Saleem
              </motion.h1>

              <AnimatedTypingText />

              <motion.p
                className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Computer Science graduate with expertise in full-stack development and algorithm design. 
                Passionate about building efficient systems and elegant user experiences.
              </motion.p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 pt-4">
                <Link to="/contact">
                  <motion.button
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium shadow-lg hover:shadow-blue-500/30 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    Get in Touch
                  </motion.button>
                </Link>
                <Link to="/projects">
                  <motion.button
                    className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium border border-gray-700 hover:shadow-gray-500/20 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
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
                className="text-gray-400 text-sm uppercase tracking-wider mb-4 sm:mb-6 text-center"
                whileHover={{ scale: 1.05 }}
              >
                Technologies I Work With
              </motion.p>

              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-2xl mx-auto">
                {techStack.map((tech, index) => (
                  <TechStackItem key={tech.name} tech={tech} index={index} isVisible={isVisible} />
                ))}
              </div>
            </motion.div>
          </motion.div>
          
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-dark-900 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row gap-12 items-center"
          >
            <div className="lg:w-1/3">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-xl overflow-hidden border-2 border-blue-500/30"
              >
                <div className="absolute inset-0 bg-blue-500/10 backdrop-blur-sm z-10 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute w-full h-full border-2 border-blue-500/20 rounded-full"
                    style={{ top: '-50%', left: '-50%' }}
                  />
                </div>
                <img
                  src={myImage}
                  alt="Muhammad Naveed Saleem"
                  className="relative z-20 w-full h-auto object-cover"
                />
              </motion.div>
            </div>
            <div className="lg:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
                <span className="relative z-10">About Me</span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
              </h2>
              <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                I hold a Bachelor's degree in Computer Science with a focus on software engineering and algorithm design. 
                My academic background provides me with strong theoretical foundations that inform my practical development work.
              </p>
              <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                What sets me apart is my ability to bridge the gap between computer science theory and real-world application. 
                I approach problems with an analytical mindset honed through years of algorithm study and systems programming.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-dark-900 hover:bg-gray-700/50 p-6 rounded-xl border border-gray-600"
                >
                  <h3 className="text-xl font-semibold mb-3 text-blue-400 flex items-center">
                    <Code className="mr-2" /> Technical Strengths
                  </h3>
                  <p className="text-gray-400">
                    Algorithm optimization, system architecture design, and clean code principles. 
                    Strong background in data structures and computational complexity.
                  </p>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-dark-900 hover:bg-gray-700/50 p-6 rounded-xl border border-gray-600"
                >
                  <h3 className="text-xl font-semibold mb-3 text-purple-400 flex items-center">
                    <Server className="mr-2" /> Academic Focus
                  </h3>
                  <p className="text-gray-400">
                    Specialized in operating systems and low-level programming. 
                    Completed advanced coursework in AI and machine learning.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <EducationSection />

      {/* Other sections (Skills, Experience, etc.) would follow here */}
      {/* ... */}
 
       {/* Skills Section */}
       <section id="skills" className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="relative inline-block">
                My Skills
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillGroups.map((group, i) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`bg-gradient-to-br ${group.color} p-6 rounded-xl border border-gray-700 hover:border-blue-500/30 transition-all duration-300 shadow-lg hover:shadow-blue-500/10`}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-lg bg-blue-500/10 mr-3">
                      {group.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{group.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {group.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1 rounded-full text-sm bg-gray-800 text-gray-300 border border-gray-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-dark-900 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="relative inline-block">
                Professional Journey
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
              </span>
            </h2>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 transform -translate-x-1/2"></div>
              
              {experiences.map((exp, i) => (
                <ExperienceItem key={i} exp={exp} index={i} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <section id='Ask' className="py-16 bg-dark-900 border  border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Whether you have a project in mind or just want to connect, I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <motion.button
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium shadow-lg hover:shadow-blue-500/30 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </motion.button>
              </Link>
              <Link to="/projects">
                <motion.button
                  className="px-8 py-3 bg-dark-900 hover:bg-gray-700 text-white rounded-lg font-medium border border-gray-700 hover:shadow-gray-500/20 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>     
    </div>
  );
};

export default Home;