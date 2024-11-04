import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const useInViewAnimation = (options = {}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView(options);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return [ref, controls];
};

export default useInViewAnimation;
