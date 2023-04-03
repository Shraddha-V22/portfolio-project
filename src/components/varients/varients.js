export const componentVarient = {
  hidden: {
    opacity: 0,
    scale: 0.2,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      ease: "easeInOut",
      duration: 0.5,
    },
  },
  exit: {
    scale: 0.2,
    transition: {
      ease: "easeInOut",
    },
  },
};

export const popVarient = {
  hidden: {
    opacity: 0,
    scale: 0.1,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      ease: "easeInOut",
      duration: 0.5,
      delay: 0.3,
    },
  },
};
