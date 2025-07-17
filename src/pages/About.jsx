import { motion } from 'framer-motion';
import myImage from '../assets/myy.jpg';

const About = () => {
  const education = [
    {
      degree: 'BS in Computer Science',
      school: 'Bahauddin Zakariya University, Multan',
      year: '2022 - 2026',
      description:
        'Currently pursuing a degree in Computer Science with a strong focus on full-stack web development, software engineering, and real-world problem solving.',
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const skills = [
    'React.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Tailwind CSS',
    'Firebase',
    'React Native',
    'JavaScript',
  ];

  return (
    <div className="min-h-screen py-20 relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="w-[600px] h-[600px] bg-purple-300 opacity-20 rounded-full blur-3xl absolute top-0 -left-40 animate-pulse"></div>
        <div className="w-[400px] h-[400px] bg-blue-300 opacity-20 rounded-full blur-2xl absolute bottom-0 -right-32 animate-spin-slow"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Muhammad Naveed Saleem
          </h1>
          <p className="text-lg text-gray-600 mt-2">Aspiring Full-Stack Developer & AI Enthusiast</p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src={myImage}
                alt="Muhammad Naveed Saleem"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-blue-600 rounded-full z-[-1] opacity-20"></div>
            <div className="absolute -top-6 -left-6 w-28 h-28 bg-purple-600 rounded-full z-[-1] opacity-20"></div>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-4">Who Am I?</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              I'm a 20-year-old software engineering student with a deep interest in MERN stack development, AI, and solving real-world problems through code. Currently focused on mastering app development using React Native and Firebase, I love turning creative ideas into working, impactful applications.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Experience</h3>
                  <p className="text-gray-600">Strong grip on front-end development with React, and Firebase integration</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Problem Solving</h3>
                  <p className="text-gray-600">Driven by curiosity, creativity, and a desire to learn and build</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-24"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
            {skills.map((skill, idx) => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.1 }}
                className="bg-white shadow-md rounded-lg px-4 py-3 text-gray-700 font-semibold border hover:border-purple-400 transition duration-300"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-24"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Education Journey</h2>
          <div className="space-y-8">
            {education.map((item, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: 0.2 * index }}
                className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-blue-600 before:rounded-full before:shadow-lg"
              >
                <div className="absolute left-[5px] top-3 w-[1px] h-full bg-gray-200"></div>
                <h3 className="font-bold text-lg text-blue-700">{item.degree}</h3>
                <p className="text-gray-700">{item.school}</p>
                <p className="text-sm text-purple-600 font-semibold">{item.year}</p>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
