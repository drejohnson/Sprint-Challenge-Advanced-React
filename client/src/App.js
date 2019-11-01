import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import PlayerList from './components/PlayerList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      players: [],
    };
  }

  async componentDidMount() {
    const results = await axios.get('http://localhost:5000/api/players');
    this.setState({
      players: results.data,
    });
  }

  render() {
    return (
      <div>
        <Header title='Players' />
        <PlayerList players={this.state.players} />
      </div>
    );
  }
}

export default App;
