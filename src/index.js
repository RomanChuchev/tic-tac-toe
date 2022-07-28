import React, { Component } from 'react'
import ReactDOM from 'react-dom/client';
import Board from './components/board';
import './index.css'
 class Game extends Component {
   render() {
     return (
       <div className="game">
         <div className="game-board">
           <Board />
         </div>
         <div className="game-info">
           <div>{/* status */}</div>
           <ol>{/* TODO */}</ol>
         </div>
       </div>
     );
   }
 }
 
 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<Game />);
 