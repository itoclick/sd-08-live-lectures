import React from 'react';
import colors from './data';

import './App.css';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      inputTextValue: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ inputTextValue: event.target.value });
  }

  render() {
    const { inputTextValue } = this.state;
    return (
      <main>
        <input type="text" onChange={this.handleChange} />
        <ul>
          {
            colors
              .filter((color) => color.color.includes(inputTextValue))
              .map((color) =>
                <li key={color.value}>
                  <div style={{ background: color.value }} className="color-square" />
                  {color.color}
                </li>
              )
          }
        </ul>
      </main>
    )
  }
}

export default App;
