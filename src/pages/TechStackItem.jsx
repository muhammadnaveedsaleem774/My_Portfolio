
import { motion } from 'framer-motion';

const TechStackItem1 = ({ tech, index, isVisible }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="flex flex-col items-center"
    >
      <div className="
        w-12 h-12
        bg-transparent border-transparent
        flex items-center justify-center
        rounded-xl cursor-pointer
        transition-all duration-300 ease-in-out
        hover:w-32 hover:h-32
        hover:bg-gray-800 hover:border hover:border-gray-600 hover:shadow-xl
        group
      ">
        <div className="flex flex-col items-center justify-center p-2">
          <tech.icon className="h-6 w-6 text-gray-300 group-hover:h-10 group-hover:w-10 transition-all duration-300" />
          <span className="
            text-xs text-transparent 
            group-hover:text-gray-300 
            mt-1 font-medium
            transition-all duration-200
            opacity-0 group-hover:opacity-100
            whitespace-nowrap
          ">
            {tech.name}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default TechStackItem1;