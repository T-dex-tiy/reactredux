import React, { Component } from 'react';
import './App.css';


class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      play_x: "X",
      play_o: "O",
      player: "x",
      playground: [
        '','','','','','','','','',
      ]
    }
  }


  render() {
    return (
      <div className='App'>
        <div className='playground'>
        {this.state.playground.map((cell, index) => {
          return <div className='cell' key={index}>{cell}</div>
        })}
        </div>
      </div>
    );
  }
}

export default App;
