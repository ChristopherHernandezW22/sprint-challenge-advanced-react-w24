import React from 'react';
import './App.css';
import useDarkMode from './hooks/useDarkMode';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    console.log("first render (mounting)")
    fetch('http://localhost:5000/api/players')
    .then(res => res.json())
    .then(data => this.setState({ players:data }));
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <SoccerPlayer players={this.state.players}/>
      </div>
    );
  }
}

function SoccerPlayer(props) {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <div className="App">
      <button onClick={toggleMode}>Dark Mode Button</button>
      {props.players.map(player => (
        <div key={player.id}> {player.name}
                              {player.id}
                              {player.country}
                              {player.searches} 
        </div>))}
    </div>
  )
}

export default App;