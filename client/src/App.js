import React from "react";
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
      {props.players.map(player => (
        <div key={player.id}> 
            <ul>
                <li>Name: {player.name}</li>
                <li>ID: {player.id}</li>
                <li>Country: {player.country}</li>
                <li>Searches: {player.searches}</li>
            </ul>
        </div>))}
    </div>
  )
}

export default App;
