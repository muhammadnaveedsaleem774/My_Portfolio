import { motion } from 'framer-motion';

const Resume = () => {
  const experiences = [
    {
      title: 'React Native Developer (Intern)',
      company: 'Self-Driven Projects',
      period: '2024 - Present',
      description: 'Developed mobile applications using React Native and Firebase, focusing on smooth UI, authentication, and real-time database functionality.',
      technologies: ['React Native', 'Firebase', 'Expo', 'Tailwind CSS']
    },
    {
      title: 'Frontend Web Developer (Freelance)',
      company: 'Personal Portfolio Projects',
      period: '2023 - 2024',
      description: 'Built responsive websites using React, Tailwind CSS, and modern design principles. Shared coding content and built LinkedIn presence to showcase projects.',
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Vite']
    }
  ];

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
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-gray-900 to-cyan-900bg-gradient-to-br from-gray-900 to-cyan-900 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="w-[600px] h-[600px] bg-purple-900 opacity-10 rounded-full blur-3xl absolute top-0 -left-40 animate-pulse"></div>
        <div className="w-[400px] h-[400px] bg-blue-900 opacity-10 rounded-full blur-2xl absolute bottom-0 -right-32 animate-spin-slow"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-extrabold font-sans bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
            My Resume
          </h1>
          <p className="text-gray-300 font-serif max-w-xl mx-auto mt-4">
            A summary of my learning journey, technical experience, and certifications.
          </p>

          <motion.a
            href="/naveedresume.pdf"
            download
            className="inline-flex font-sans items-center px-6 py-3 mt-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Resume
          </motion.a>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl mx-auto"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {index !== experiences.length - 1 && (
                <div className="absolute left-[11px] top-[30px] bottom-0 w-[2px] bg-gray-700"></div>
              )}
              <div className="absolute left-0 top-[6px] w-6 h-6 bg-indigo-600 rounded-full border-4 border-gray-900 shadow-lg"></div>

              <div className=" p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border border-cyan-700">
                <div className="flex flex-wrap items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <span className="text-indigo-400 font-medium">{exp.period}</span>
                </div>
                <p className="text-gray-300 font-medium mb-2">{exp.company}</p>
                <p className="text-gray-400 mb-4">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700 text-sm text-gray-300 rounded-full border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Education & Certifications */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className=" p-6 rounded-xl shadow-lg border border-cyan-700"
          >
            <h2 className="text-2xl font-bold mb-6 text-blue-400">Education</h2>
            <div>
              <h3 className="font-bold text-white">BS in Computer Science</h3>
              <p className="text-gray-300">Bahauddin Zakariya University, Multan</p>
              <p className="text-sm text-gray-400">2022 - 2026</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className=" p-6 rounded-xl shadow-lg border border-cyan-700"
          >
            <h2 className="text-2xl font-bold mb-6 text-indigo-400">Certifications</h2>
            <div>
              <h3 className="font-bold text-white">Meta Front-End Developer (Coursera)</h3>
              <p className="text-gray-300">Completed: 2024</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
