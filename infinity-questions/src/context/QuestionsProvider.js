import React, { useState } from 'react';

import QuestionsContext from './QuestionsContext';
import { getQuestions } from '../services/api';

function QuestionsProvider({ children }) {
  // isLoading
  // questions
  // getQuestions
  // createQuestion

  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState([]);

  const fetchQuestions = async () => {
    setIsLoading(true);
    const questionsFromApi = await getQuestions();
    setQuestions(questionsFromApi);
    setIsLoading(false);
  };

  return (
    <QuestionsContext.Provider value={ { isLoading, questions, fetchQuestions } }>
      {children}
    </QuestionsContext.Provider>
  );
}

export default QuestionsProvider;
