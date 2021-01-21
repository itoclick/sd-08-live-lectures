import React from 'react';
import PropTypes from 'prop-types';

class Solution extends React.Component {
  render() {
    const { match: { params: { contentDay } } } = this.props;
    return (
      <h1>
        Solução do exercício do dia
        { contentDay }
      </h1>
    );
  }
}

Solution.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      contentDay: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Solution;
