import { motion } from 'motion/react';
import { ReactNode, useEffect, useState } from 'react';
import styles from './styles.module.css';

type PhraseItem = string | ReactNode;

interface PhraseState {
  words: PhraseItem[];
  duration: number;
  exitLeft?: boolean;
}

export default function AnimatedHeadline() {
  const phrases: PhraseState[] = [
    { words: ["hi."], duration: 600 },
    { words: ["my"], duration: 400 },
    { words: ["my", "name"], duration: 400 },
    { words: ["my", "name", "is"], duration: 400 },
    { words: ["my", "name", "is", "daniel"], duration: 400 },
    { words: ["my", "name", "is", "daniel", "demelo."], duration: 800, exitLeft: true },
    { words: ["bye."], duration: 800, exitLeft: true }
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [previousWords, setPreviousWords] = useState<PhraseItem[]>([]);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (currentPhraseIndex >= phrases.length - 1) return;

    const currentPhrase = phrases[currentPhraseIndex];

    if (currentPhrase.exitLeft) {
      setIsExiting(true);
      // Short delay before starting next phrase
      setTimeout(() => {
        setPreviousWords(currentPhrase.words);
        setCurrentPhraseIndex(prev => prev + 1);
        setIsExiting(false);
      }, 300); // Match the exit animation duration
    } else {
      const timer = setTimeout(() => {
        setPreviousWords(currentPhrase.words);
        setCurrentPhraseIndex(prev => prev + 1);
      }, currentPhrase.duration);
      return () => clearTimeout(timer);
    }
  }, [currentPhraseIndex]);

  const currentPhrase = phrases[currentPhraseIndex];
  const isSingleWord = currentPhrase.words.length === 1;
  const isNewWord = (word: PhraseItem, index: number) => {
    return index >= previousWords.length || word !== previousWords[index];
  };

  return (
    <motion.h1 className={styles.headline}>
      {currentPhrase.words.map((word, index) => {
        if (typeof word !== 'string') {
          return (
            <motion.div
              key={`component-${index}`}
              className={styles.word}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              {word}
            </motion.div>
          );
        }

        const isNew = isNewWord(word, index);
        return (
          <motion.span
            key={`${word}-${index}-${currentPhraseIndex}`}
            className={styles.word}
            initial={isSingleWord ? {
              opacity: 0,
              scale: 0.5,
              x: 0
            } : isNew ? {
              opacity: 0,
              x: 50
            } : {
              opacity: 1,
              x: 0
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0
            }}
            transition={{
              duration: 0.4,
              ease: [0.19, 1.0, 0.22, 1.0]
            }}
          >
            {word}
          </motion.span>
        );
      })}
      {isExiting && (
        <motion.div
          className={styles.exitOverlay}
          initial={{ x: 0 }}
          animate={{ x: -100 }}
          transition={{
            duration: 0.3,
            ease: [0.19, 1.0, 0.22, 1.0]
          }}
        />
      )}
    </motion.h1>
  );
} 