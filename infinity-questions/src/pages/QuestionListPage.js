import React from 'react';
import { useHistory } from 'react-router-dom';

import QuestionList from '../components/QuestionList';
import QuestionsContext from '../context/QuestionsContext';

class QuestionListPage extends React.Component {
  async componentDidMount() {
    const { fetchQuestions } = this.context;
    fetchQuestions();
  }

  render() {
    const { history } = this.props;
    const { questions, isLoading } = this.context;
    return questions.length > 0 && !isLoading ? (
      <>
        <QuestionList />
        <button
          type="button"
          onClick={ () => history.push('/new-question') }
        >
          Nova Pergunta
        </button>
      </>
    ) : <span>Carregando...</span>;
  }
}

QuestionListPage.contextType = QuestionsContext;

export default QuestionListPage;
