import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      play_x: "X",
      play_o: "O",
      player: "x",
      boards: [
        '','','','','','','','','',
      ]
    }
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 onClick={() => this.setState({text: this.state.text + '!'})}>{this.state.text}</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
