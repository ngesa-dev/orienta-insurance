// src/motion.js
export const marqueeVariants = {
  animate: {
    x: [0, -1000], // move horizontally to the left
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20, // adjust speed (smaller = faster)
        ease: "linear",
      },
    },
  },
};
