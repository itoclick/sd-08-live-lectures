import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Calendar from '../pages/Calendar';
import LiveLectures from '../pages/LiveLectures';
import Solution from '../pages/Solution';
import Solutions from '../pages/Solutions';
import TrybeTalks from '../pages/TrybeTalks';

class Content extends React.Component {
  constructor() {
    super();
    this.solutions = ['12.1', '12.2', '13.1', '13.2'];
  }

  render() {
    return (
      <main>
        <Switch>
          <Route path="/calendar" component={ Calendar } />
          <Route path="/live-lectures" component={ LiveLectures } />
          <Route path="/trybe-talks" component={ TrybeTalks } />
          <Route path="/solutions/:contentDay" component={ Solution } />
          <Route
            path="/solutions"
            render={ (props) => (
              <Solutions { ...props } availableSolutions={ this.solutions } />
            ) }
          />
        </Switch>
      </main>
    );
  }
}

export default Content;
