import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
   winner: string| null | undefined;
   isnextPlayer: boolean;
   squares: string[];
  constructor() {
    this.winner = null;
    this.squares = Array(9).fill(null);
    this.isnextPlayer = true;
   }

  ngOnInit(): void {
  }

  newGame(){
    this.winner = null;
    this.squares = Array(9).fill(null);
    this.isnextPlayer = true;

  }
   get getPlayer(){
    return this.isnextPlayer? 'X':'O';
  }
makeMove(id: number){
  if(!this.squares[id]){
  this.squares.splice(id,1, this.getPlayer);
  this.isnextPlayer = !this.isnextPlayer;
  }
  this.winner = this.calculateWinner();
}
calculateWinner(){
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let index = 0; index < lines.length; index++) {
    const [a,b,c] = lines[index];
    if( this.squares[a] &&
      this.squares[a] === this.squares[b] &&
      this.squares[a] === this.squares[c]){

      return this.squares[a];
    }
    
  }
  return null;
}
}
