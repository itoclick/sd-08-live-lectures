import React from 'react';
import PropTypes from 'prop-types';

const ONE_SECOND = 1000;

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      currentDateTime: new Date(),
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      console.log('Caiu no setInterval');
      this.setState({
        currentDateTime: new Date(),
      });
    }, ONE_SECOND);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { currentDateTime } = this.state;
    const { turnOffButton, showDateTime } = this.props;
    return (
      <section>
        {
          showDateTime && <span>{currentDateTime.toLocaleTimeString()}</span>
        }
        <button type="button" onClick={ turnOffButton }>Desligar relógio</button>
      </section>
    );
  }
}

Clock.propTypes = {
  turnOffButton: PropTypes.func.isRequired,
  showDateTime: PropTypes.bool.isRequired,
};

export default Clock;
