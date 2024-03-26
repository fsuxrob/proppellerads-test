import logo from './images/logo.png';
import './App.css';
import P from './components/ptag/P';
import Htag from './components/htag/Htag';
import Quiz from './components/quiz/Quiz';
import Comments from './components/comments/Comments';
import { useState, useEffect } from 'react';

function App() {
  const [questions, setQuestions] = useState([]);
  const [loadingQuestions, setLoadingQuestions] = useState(true);
  const [comments, setComments] = useState([]);
  const [loadingComments, setLoadingComments] = useState(true);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    fetch('/store/data/questions.json')
      .then((response) => response.json())
      .then((data) => {
        setLoadingQuestions(false);
        setQuestions(data);
      })
      .catch((error) => {
        console.error('Error fetching questions:', error);
      });

    fetch('/store/data/comments.json')
      .then((response) => response.json())
      .then((data) => {
        setLoadingComments(false);
        setComments(data);
      })
      .catch((error) => {
        console.error('Error fetching comments:', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <P className="App-title">Name of the company</P>
      </header>
      <main>
        <Htag level="1">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt repellat animi accusamus.
        </Htag>
        <P className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.</P>
        <Quiz
          questions={questions}
          answers={answers}
          setAnswers={setAnswers}
          loading={loadingQuestions}
        />
        <Comments comments={comments} loading={loadingComments} />
      </main>
    </div>
  );
}

export default App;
