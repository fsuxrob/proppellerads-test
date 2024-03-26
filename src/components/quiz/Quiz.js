import React, { useState } from 'react';
import styles from './Quiz.module.css';
import Question from '../question/Question';
import Button from '../button/Button';
import Loading from '../loading/Loading';

const Quiz = ({ questions, answers, setAnswers, loading }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleAnswer = (answer) => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setButtonDisabled(true);
    }
    setAnswers({ ...answers, [questions[currentQuestion]]: answer });
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.quiz}>
          <div className={styles.questions}>
            {questions[currentQuestion] && <Question>{questions[currentQuestion]}</Question>}
          </div>
          <div className={styles.buttons}>
            <Button onClick={() => handleAnswer('answer 1')} disabled={buttonDisabled}>
              Answer 1
            </Button>
            <Button onClick={() => handleAnswer('answer 2')} disabled={buttonDisabled}>
              Answer 2
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Quiz;
