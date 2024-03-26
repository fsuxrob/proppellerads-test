import React from 'react';
import styles from './P.module.css';

const P = ({ children, className }) => {
  return <p className={`${styles.p} ${className ? className : ''}`}>{children}</p>;
};
export default P;
