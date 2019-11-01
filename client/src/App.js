import React, { useState, useEffect } from "react";
import './App.css';
import axios from 'axios';
import useDarkMode from './hooks/useDarkMode';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    console.log("First Render")
    axios.get('http://localhost:5000/api/players')
      .then(res => {this.setState({ players:res.data })
      })
      .catch(err => console.log(err));
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <Player players={this.state.players}/>
      </div>
    );
  }
}

function Player(props) {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <div className="App">
      <button onClick={toggleMode}>Dark Mode On/Off</button>
      <h1>Testing Dark Mode</h1>
    </div>
  )
}

export default App;
