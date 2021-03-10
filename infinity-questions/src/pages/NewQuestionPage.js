import React, { useContext, useState } from 'react';
import QuestionsContext from '../context/QuestionsContext';

function NewQuestionPage({ history }) {
  const { createQuestion } = useContext(QuestionsContext);

  const [formData, setFormData] = useState({
    name: '',
    question: '',
  });

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  async function onSubmit(ev) {
    ev.preventDefault();
    await createQuestion({ question: formData.question, user: formData.name });
    history.push('/');
  }

  return (
    <section className="question-section">
      <form onSubmit={ onSubmit }>
        <label htmlFor="question">
          Digite a sua pergunta:
          <textarea
            value={ formData.question }
            onChange={ handleChange }
            name="question"
            placeholder="Escreva aqui sua pergunta"
            id="question"
            cols="30"
            rows="10"
          />
        </label>
        <label htmlFor="user">
          Digite o seu nome:
          <input
            value={ formData.name }
            onChange={ handleChange }
            type="text"
            name="name"
            placeholder="Maria"
            id="user"
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default NewQuestionPage;
