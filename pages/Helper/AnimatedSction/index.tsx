import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './Animated.module.scss';

interface AnimatedSectionProps {
  children: React.ReactNode;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // animação ocorre apenas uma vez
    threshold: 0.1,    // porcentagem do elemento visível antes de disparar
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 100 }} // começa invisível e à direita
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }} // animação quando entra na viewport
      transition={{ duration: 0.5 }}
      className={styles.animatedSection}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
