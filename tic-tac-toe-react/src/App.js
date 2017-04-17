import React, { Component } from 'react';
import './App.css';

console.clear();
class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      play_x: 'X',
      play_o: 'O',
      player: 'X',
      winner: null,
      playground: [
        '','','','','','','','','',
      ]
    }
  }

  checkPlay(){
    const player = this.state.player
    const cell = this.state.playground

    const wins = [[0,1,2], [3,4,5], [6,7,8],
                      [0,3,6], [1,4,7], [2,5,8],
                      [0,4,8], [2,4,6]]
    return wins.find(combo => {
      if (cell[combo[0]] !=="" && cell[combo[1]]!== "" && cell[combo[2]] !== "" && cell[combo[0]] === cell[combo[1]] && cell[combo[1]] === cell[combo[2]]){
        console.log(player + ' is a vinner!');
        return player
      }
      else {
        return false
      }
    })
  }

handleClick(index) {
  if (this.state.playground[index] ==='') {
  this.state.playground[index] = this.state.player
  this.setState({
    board:this.state.playground
,
    player: this.state.play_x === this.state.player ? this.state.play_o : this.state.play_x,
    winner: this.checkPlay() ? this.state.player : null
  })
}

  console.log(index);
}

  render() {
    return (
      <div className='App'>
        <div className='playground'>
        {this.state.playground.map((cell, index) => {
          return (<div className='cell' key={index} data-cell-id={index} onClick={() =>{this.handleClick(index)}}>
          {cell}
          </div>
        )
      })}
        </div>
        { this.state.winner ? <h1 className="winner">{'The winner is ${this.state.winner}'}</h1> : null}
      </div>
    );

  }
  }


export default App;
