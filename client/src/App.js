import React, { useState, useEffect } from "react";
import './App.css';
import axios from 'axios';

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
      </div>
    );
  }
}

export default App;
