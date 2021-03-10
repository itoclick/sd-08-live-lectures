import React from 'react';

function QuestionCard({ question }) {
  return (
    <section className="question-card">
      <header className="question-card-header">
        <img className="question-card-image" src="https://pbs.twimg.com/profile_images/425597991462768640/OJ6TLvlv_400x400.jpeg" alt="" />
        {question.user}
      </header>
      <p className="question-card-body">{question.question}</p>
    </section>
  );
}

export default QuestionCard;
