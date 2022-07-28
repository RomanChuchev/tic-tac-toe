import React, { Component } from "react";
import Square from "./square";

export default class Board extends Component {
   state = {
      squares: Array(9).fill(null),
      xIxNext: true,
   }
   
   handleClick(i) {
      const newSquares = this.state.squares.slice();
      if (calculateWinner(newSquares) || newSquares[i]) {
         return;
       }
      newSquares[i] = this.state.xIxNext ? 'X' : 'O'
      this.setState({
         squares: newSquares,
         xIxNext: !this.state.xIxNext,
      })
   }

   renderSquare(i) {
     return (
     <Square 
         value={this.state.squares[i]} 
         onClick={() => this.handleClick(i)}
      />
     );
   }
 
   

   render() {
      const winner = calculateWinner(this.state.squares);
      let status;
      if (winner) {
        status = 'Победитель: ' + winner;
      } else {
        status = 'Следующий ход: ' + (this.state.xIxNext ? 'X' : 'O');
      }

     return (
       <div>
         <div className="status">{status}</div>
         <div className="board-row">
           {this.renderSquare(0)}
           {this.renderSquare(1)}
           {this.renderSquare(2)}
         </div>
         <div className="board-row">
           {this.renderSquare(3)}
           {this.renderSquare(4)}
           {this.renderSquare(5)}
         </div>
         <div className="board-row">
           {this.renderSquare(6)}
           {this.renderSquare(7)}
           {this.renderSquare(8)}
         </div>
       </div>
     );
     }
   }
   
function calculateWinner(squares) {
   const lines = [
     [0, 1, 2],
     [3, 4, 5],
     [6, 7, 8],
     [0, 3, 6],
     [1, 4, 7],
     [2, 5, 8],
     [0, 4, 8],
     [2, 4, 6],
   ];
   for (let i = 0; i < lines.length; i++) {
     const [a, b, c] = lines[i];
     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
       return squares[a];
     }
   }
   return null;
 }