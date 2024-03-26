import React, { useState } from 'react';
import styles from './Select.module.css';

const Select = ({ options, defaultValue, onChange, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultValue);

  const handleOptionClick = (value) => {
    setSelectedOption(value);
    setIsOpen(false);
    onChange(value);
  };

  return (
    <div className={styles.select}>
      <div className={styles['select-option']} onClick={() => setIsOpen(!isOpen)}>
        {title} <span className={styles['option-value']}>{selectedOption}</span>
      </div>
      <div className={styles.options + (isOpen ? ' ' + styles['options-open'] : '')}>
        {options.map((option, index) => (
          <div key={index} className={styles.option} onClick={() => handleOptionClick(option)}>
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Select;
