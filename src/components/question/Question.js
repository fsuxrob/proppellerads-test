import React from 'react';
import styles from './Question.module.css';

const Question = ({ children }) => {
  return <p className={styles.question}>{children}</p>;
};

export default Question;
