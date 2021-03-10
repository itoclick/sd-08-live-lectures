import React, { useState } from 'react';

import QuestionsContext from './QuestionsContext';
import { getQuestions, createQuestion as createQuestionService } from '../services/api';

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

  const createQuestion = async (newQuestion) => {
    setIsLoading(true);
    await createQuestionService(newQuestion);
    setQuestions([...questions, newQuestion]);
    setIsLoading(false);
  };

  return (
    <QuestionsContext.Provider
      value={ { isLoading, questions, fetchQuestions, createQuestion } }
    >
      {children}
    </QuestionsContext.Provider>
  );
}

export default QuestionsProvider;
