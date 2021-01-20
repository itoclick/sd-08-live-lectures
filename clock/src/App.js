import React from 'react';
import Clock from './components/Clock';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      showDateTime: true,
    };

    this.turnOffButton = this.turnOffButton.bind(this);
  }

  turnOffButton() {
    const { showDateTime } = this.state;

    this.setState({
      showDateTime: !showDateTime,
    });
  }

  render() {
    const { showDateTime } = this.state;

    return (
      <main className="App">
        {showDateTime
          && <Clock
            turnOffButton={ this.turnOffButton }
            showDateTime={ showDateTime }
          />}
      </main>
    );
  }
}

export default App;
