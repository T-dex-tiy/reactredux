import React, { Component } from 'react';
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
      <div className="playground">
      {this.state.playground.map((cell) => {
        return <div className="Unitas">(cell)</div>
      })}

      </div>
    );
  }
}

export default App;
