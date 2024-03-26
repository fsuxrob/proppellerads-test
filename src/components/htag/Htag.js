import React from 'react';
import styles from './Htag.module.css';

const Htag = ({ level, className, children }) => {
  const Tag = `h${level}`;
  return <Tag className={`${styles[Tag]} ${className ? className : ''}`}>{children}</Tag>;
};

export default Htag;
