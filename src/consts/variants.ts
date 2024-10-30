import { Variants } from "framer-motion";

export const pathVariants: Variants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 3,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };