import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaReact, FaNodeJs, FaAws, FaDocker, FaGitAlt, 
  FaHtml5, FaCss3Alt, FaJs, FaPython, FaDatabase,
  FaServer, FaCodeBranch, FaShieldAlt, FaRocket,FaFileExcel 
} from 'react-icons/fa';
import { 
  SiTypescript, SiNextdotjs, SiTailwindcss, SiGraphql, 
  SiMongodb, SiExpress, SiKubernetes, SiJest, 
  SiPostgresql, SiRedis, SiNginx, SiTerraform,
  SiRust, SiWebassembly, SiThreedotjs, SiTensorflow,
  SiBlockchaindotcom, 
} from 'react-icons/si';
import { TbBrandReactNative,TbBrandCypress } from 'react-icons/tb';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const skills = {
    frontend: [
      { name: 'React.js', level: 95, icon: <FaReact className="text-[#61DAFB]" />, color: 'from-blue-500 to-cyan-500' },
      { name: 'TypeScript', level: 90, icon: <SiTypescript className="text-[#3178C6]" />, color: 'from-blue-600 to-blue-400' },
      { name: 'Next.js', level: 85, icon: <SiNextdotjs className="text-gray-100" />, color: 'from-gray-700 to-gray-400' },
      { name: 'Tailwind CSS', level: 95, icon: <SiTailwindcss className="text-[#38BDF8]" />, color: 'from-cyan-400 to-blue-500' },
      { name: 'React Native', level: 80, icon: <TbBrandReactNative className="text-[#61DAFB]" />, color: 'from-blue-400 to-blue-500' },
    ],
    backend: [
      { name: 'Node.js', level: 90, icon: <FaNodeJs className="text-[#339933]" />, color: 'from-blue-500 to-cyan-400' },
      { name: 'Express.js', level: 88, icon: <SiExpress className="text-gray-100" />, color: 'from-blue-600 to-blue-300' },
      { name: 'GraphQL', level: 85, icon: <SiGraphql className="text-[#E535AB]" />, color: 'from-cyan-600 to-gray-500' },
      { name: 'MongoDB', level: 87, icon: <SiMongodb className="text-[#47A248]" />, color: 'from-cyan-500 to-blue-300' },
      { name: 'PostgreSQL', level: 83, icon: <SiPostgresql className="text-[#336791]" />, color: 'from-blue-600 to-blue-400' },
    ],
    devops: [
      { name: 'Docker', level: 85, icon: <FaDocker className="text-[#2496ED]" />, color: 'from-blue-500 to-blue-300' },
      { name: 'Kubernetes', level: 80, icon: <SiKubernetes className="text-[#326CE5]" />, color: 'from-blue-600 to-blue-400' },
      { name: 'AWS', level: 82, icon: <FaAws className="text-[#FF9900]" />, color: 'from-cyan-500 to-blue-400' },
      { name: 'CI/CD', level: 88, icon: <FaCodeBranch className="text-[#F05032]" />, color: 'from-blue-500 to-cyan-400' },
      { name: 'Terraform', level: 75, icon: <SiTerraform className="text-[#7B42BC]" />, color: 'from-blue-500 to-indigo-400' },
    ],
    testing: [
      { name: 'Jest', level: 85, icon: <SiJest className="text-[#C21325]" />, color: 'from-blue-600 to-blue-400' },
      { name: 'Testing Library', level: 87, icon: <FaShieldAlt className="text-[#E535AB]" />, color: 'from-blue-500 to-purple-400' },
      { name: 'Cypress', level: 80, icon: <TbBrandCypress  />, color: 'from-blue-800 to-blue-600' },
      { name: 'Unit Testing', level: 90, icon: <FaCodeBranch className="text-[#4CAF50]" />, color: 'from-blue-500 to-cyan-300' },
    ]
  };

  const learning = [
    { name: 'Rust', icon: <SiRust className="text-[#000000]" /> },
    { name: 'WebAssembly', icon: <SiWebassembly className="text-[#654FF0]" /> },
    { name: 'TensorFlow', icon: <SiTensorflow className="text-[#FF6F00]" /> },
    { name: 'Three.js', icon: <SiThreedotjs /> },
    { name: 'Blockchain', icon: <SiBlockchaindotcom className="text-[#3D67FF]" /> },
    { name: 'Microservices', icon: <FaServer className="text-[#6BD5E1]" /> },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: 'spring', 
        damping: 10, 
        stiffness: 100 
      } 
    },
  };

  const progressBar = {
    hidden: { width: 0 },
    show: { 
      width: '100%',
      transition: { 
        duration: 1.5, 
        ease: [0.16, 0.77, 0.47, 0.97],
        delay: 0.5 
      } 
    },
  };

  const SkillCard = ({ title, skills, color }) => {
    const cardColors = {
      frontend: 'from-blue-600 to-blue-400',
      backend: 'from-purple-600 to-purple-400',
      devops: 'from-amber-600 to-amber-400',
      testing: 'from-pink-600 to-pink-400'
    };

    return (
      <motion.div
        variants={item}
        className="relative group h-full"
        whileHover={{ y: -5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl"
          style={{
            background: `linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to)`
          }}
        />
        <div className="card h-full p-6 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-all">
          <div className="flex items-center mb-6">
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${cardColors[color]} flex items-center justify-center mr-4`}>
              {title === 'Frontend' ? (
                <FaHtml5 className="text-white text-xl" />
              ) : title === 'Backend' ? (
                <FaServer className="text-white text-xl" />
              ) : title === 'DevOps' ? (
                <FaDocker className="text-white text-xl" />
              ) : (
                <SiJest className="text-white text-xl" />
              )}
            </div>
            <h3 className="text-2xl font-bold text-gray-100">{title}</h3>
          </div>
          <div className="space-y-5">
            {skills.map((skill) => (
              <div key={skill.name} className="relative">
                <div className="flex items-center mb-2">
                  <span className="text-xl mr-3 flex items-center">
                    {skill.icon}
                  </span>
                  <span className="font-medium text-gray-200 flex-grow">{skill.name}</span>
                  <span className="text-gray-400 font-mono text-sm">{skill.level}%</span>
                </div>
                <div className="h-2.5 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 0.77, 0.47, 0.97] }}
                    style={{ 
                      boxShadow: `0 0 8px rgba(var(--color-${color}-500), 0.4)`,
                      willChange: 'width'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="skills" ref={ref} className="relative py-24 bg-gray-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <motion.div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-10"
          animate={{
            scale: [1, 1.1, 1],
            translateX: ['0%', '5%', '0%'],
            translateY: ['0%', '-10%', '0%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div 
          className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            translateX: ['0%', '-5%', '0%'],
            translateY: ['0%', '15%', '0%'],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 5
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header with animated underline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent tracking-tight">
            Technical Expertise
          </h2>
          <div className="relative inline-block">
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Comprehensive skills across full-stack development, cloud infrastructure, and modern web technologies
            </p>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: '100%' } : {}}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              style={{ originX: 0 }}
            />
          </div>
        </motion.div>

        {/* Skills grid with 3D tilt effect */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : {}}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <SkillCard title="Frontend" skills={skills.frontend} color="frontend" />
          <SkillCard title="Backend" skills={skills.backend} color="backend" />
          <SkillCard title="DevOps" skills={skills.devops} color="devops" />
          <SkillCard title="Testing" skills={skills.testing} color="testing" />
        </motion.div>

        {/* Additional skills with animated appearance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-24"
        >
          <div className="relative text-center mb-10">
            <h3 className="text-2xl font-semibold text-gray-300 mb-2">
              Currently Mastering
            </h3>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              Continuously expanding my knowledge in emerging technologies
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {learning.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ 
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                  delay: 0.9 + index * 0.1
                }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="px-5 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 hover:text-white hover:border-blue-400/30 transition-all cursor-default flex items-center shadow-md hover:shadow-blue-500/10"
              >
                <span className="mr-3 text-xl">{skill.icon}</span>
                <span className="font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience and Methodology Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center mr-4">
                <FaRocket className="text-white text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-100">Development Methodology</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-3 h-3 rounded-full bg-blue-400 mr-3"></div>
                </div>
                <p className="text-gray-300">Agile & Scrum methodologies</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-3 h-3 rounded-full bg-purple-400 mr-3"></div>
                </div>
                <p className="text-gray-300">Test-Driven Development (TDD)</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-3 h-3 rounded-full bg-cyan-400 mr-3"></div>
                </div>
                <p className="text-gray-300">CI/CD pipelines implementation</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-3 h-3 rounded-full bg-pink-400 mr-3"></div>
                </div>
                <p className="text-gray-300">Microservices architecture</p>
              </li>
            </ul>
          </div>

          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center mr-4">
                <FaShieldAlt className="text-white text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-100">Best Practices</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-3 h-3 rounded-full bg-blue-400 mr-3"></div>
                </div>
                <p className="text-gray-300">Clean Code & SOLID principles</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-3 h-3 rounded-full bg-purple-400 mr-3"></div>
                </div>
                <p className="text-gray-300">Performance optimization</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-3 h-3 rounded-full bg-cyan-400 mr-3"></div>
                </div>
                <p className="text-gray-300">Security best practices</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-3 h-3 rounded-full bg-pink-400 mr-3"></div>
                </div>
                <p className="text-gray-300">Accessibility standards (WCAG)</p>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Proficiency meter legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.5 }}
          className="mt-16"
        >
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 backdrop-blur-sm max-w-3xl mx-auto">
            <h4 className="text-lg font-semibold text-gray-300 mb-4 text-center">Proficiency Scale</h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex flex-col items-center p-3 rounded-lg bg-gray-800/30">
                <div className="w-8 h-2 rounded-full bg-gradient-to-r from-gray-400 to-gray-300 mb-2"></div>
                <span className="text-sm text-gray-400">Basic Knowledge</span>
                <span className="text-xs text-gray-500">0-50%</span>
              </div>
              <div className="flex flex-col items-center p-3 rounded-lg bg-gray-800/30">
                <div className="w-8 h-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-300 mb-2"></div>
                <span className="text-sm text-gray-400">Working Experience</span>
                <span className="text-xs text-gray-500">50-75%</span>
              </div>
              <div className="flex flex-col items-center p-3 rounded-lg bg-gray-800/30">
                <div className="w-8 h-2 rounded-full bg-gradient-to-r from-purple-400 to-purple-300 mb-2"></div>
                <span className="text-sm text-gray-400">Advanced Skills</span>
                <span className="text-xs text-gray-500">75-90%</span>
              </div>
              <div className="flex flex-col items-center p-3 rounded-lg bg-gray-800/30">
                <div className="w-8 h-2 rounded-full bg-gradient-to-r from-green-400 to-green-300 mb-2"></div>
                <span className="text-sm text-gray-400">Expert Level</span>
                <span className="text-xs text-gray-500">90-100%</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;