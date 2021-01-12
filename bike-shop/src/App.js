import React from 'react';

import BikeList from './components/BikeList';
import Navbar from './components/Navbar';
import { bikes } from './data';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <main className="main-container">
        <Navbar />
        <BikeList bikes={bikes} />
      </main>
    );
  }
}

export default App;
