'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import styles from './page.module.css';

const MotionLink = motion(Link);

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
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.04, 0.62, 0.23, 0.98]
    }
  }
};

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <motion.div
          className={styles.heroContent}
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p className={styles.description} variants={item}>
            👋 Hi. I'm Daniel.
          </motion.p>
          <motion.p className={styles.description} variants={item}>
            I'm a senior technology leader focused on frontend engineering and building high-performing teams. I've worked with Appfigures, stealth clients, county governments, elected officials and others to deliver meaningful, impactful improvements.
          </motion.p>
          <motion.p className={styles.description} variants={item}>
            When I'm not leading engineering teams, you'll find me tinkering with DIY projects, making music, spending time with family, volunteering in my community, or trying to keep up with the latest in AI.
          </motion.p>

          <motion.div
            className={styles.actions}
            variants={item}
          >
            <MotionLink
              href="/work"
              className={styles.actionButton}
              whileHover={{ scale: 1.05, backgroundColor: '#fff', color: '#000' }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              My Work
            </MotionLink>
            <MotionLink
              href="/now"
              className={styles.actionButton}
              whileHover={{ scale: 1.05, backgroundColor: '#fff', color: '#000' }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              What I'm Up To
            </MotionLink>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
