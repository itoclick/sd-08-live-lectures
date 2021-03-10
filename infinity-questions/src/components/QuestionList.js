import React, { useContext } from 'react';

import QuestionsContext from '../context/QuestionsContext';
import QuestionCard from './QuestionCard';

function QuestionList() {
  const { questions } = useContext(QuestionsContext);
  return (
    <section>
      {
        questions
          .map((question, index) => <QuestionCard key={ index } question={ question } />)
      }
    </section>
  );
}

export default QuestionList;
