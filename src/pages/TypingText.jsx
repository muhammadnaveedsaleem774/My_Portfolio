import { useAnimation } from 'framer-motion';
import { useState, useEffect } from 'react';

const phrases = ["Full Stack Developer", "Creating Digital Experiences"];

const AnimatedTypingText = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0); // Phrase index
  const [subIndex, setSubIndex] = useState(0); // Character index
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[index];

    if (!deleting && subIndex === currentPhrase.length) {
      setTimeout(() => setDeleting(true), 1500); // Pause before deleting
      return;
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) =>
        deleting ? prev - 1 : prev + 1
      );
      setText(currentPhrase.substring(0, subIndex));
    }, deleting ? 60 : 120); // typing speed

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  return (
    <motion.p
      className="text-xl md:text-2xl font-serif text-gray-300 mb-8 mt-4 whitespace-nowrap h-8 sm:h-10 md:h-12"
      whileHover={{ scale: 1.01 }}
    >
      {text}
      <motion.span
        className="inline-block w-1 bg-gray-300 ml-1"
        animate={{ opacity: [0, 1] }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </motion.p>
  );
};
