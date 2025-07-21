import { motion } from 'framer-motion';

const Skills = () => {
  const skills = {
    frontend: [
      { name: 'React.js', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Next.js', level: 80 },
    ],
    backend: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'RESTful APIs', level: 90 },
    ],
    tools: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'AWS', level: 70 },
      { name: 'Jest', level: 80 },
    ],
  };

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
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-gray-900 to-cyan-900bg-gradient-to-br from-gray-900 to-cyan-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
            Skills & Expertise
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here's an overview of my technical skills and proficiency levels in various technologies.
          </p>
        </motion.div>
          

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Frontend Skills */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className=" p-6 rounded-xl shadow-lg border border-cyan-700"
          >
            <h2 className="text-2xl font-bold mb-6 text-blue-400">Frontend</h2>
            <div className="space-y-6">
              {skills.frontend.map((skill) => (
                <motion.div key={skill.name} variants={item}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-200">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-blue-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>


            
          </motion.div>

          {/* Backend Skills */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className=" p-6 rounded-xl shadow-lg border border-cyan-700"
          >
            <h2 className="text-2xl font-bold mb-6 text-indigo-400">Backend</h2>
            <div className="space-y-6">
              {skills.backend.map((skill) => (
                <motion.div key={skill.name} variants={item}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-200">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-indigo-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Technologies */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className=" p-6 rounded-xl shadow-lg border border-cyan-700 lg:col-span-1 md:col-span-2 lg:col-start-3 lg:row-start-1"
          >
            <h2 className="text-2xl font-bold mb-6 text-green-400">Tools & Technologies</h2>
            <div className="space-y-6">
              {skills.tools.map((skill) => (
                <motion.div key={skill.name} variants={item}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-200">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-green-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-300">
            I'm always learning and expanding my skill set. Currently exploring:
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {['GraphQL', 'Vue.js', 'Python', 'Kubernetes'].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="px-4 py-2  border border-cyan-600 rounded-full text-gray-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;