import React from 'react';
import './index.css';
import ScoreTable from './ScoreTable';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
          <ScoreTable />
      </div>
    );
  }
}