import React from 'react';

import QuestionList from '../components/QuestionList';
import QuestionsContext from '../context/QuestionsContext';

class QuestionListPage extends React.Component {
  async componentDidMount() {
    const { getQuestions } = this.context;
    getQuestions();
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
