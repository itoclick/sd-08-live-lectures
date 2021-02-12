import React from 'react';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Header from './components/Header';
import categoriesData from './data';

import './index.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: categoriesData,
    };
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <Header />
        <main className="main">
          <Player movie={ categories[0].movies[0] } />
          <Sidebar categories={ categories } />
        </main>
      </div>
    );
  }
}

export default App;
