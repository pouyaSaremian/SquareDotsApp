import { createSlice } from "@reduxjs/toolkit";
import { square } from "../types/GameTypes";

//Initial State Genertor
function boardInitializer() {
  let rows = 10;
  let columns = 10;
  let id = 0;
  let squaresArray: square[] = [];
  for (var i = 1; i <= rows; i++) {
    for (var j = 1; j <= columns; j++) {
      squaresArray.push({
        id: id++,
        positions: [
          { id: `V${i}${j}`, taken: false, player: 0 },
          { id: `H${j}${i}`, taken: false, player: 0 },
          { id: `V${i}${j + 1}`, taken: false, player: 0 },
          { id: `H${j}${i + 1}`, taken: false, player: 0 },
        ],
        taken: false,
        player: 0,
      });
    }
  }
  //Initial State
  return {
    squares: squaresArray,
    currentPlayer: 1,
    remainingSquares: rows * columns,
    player1: 0,
    player2: 0,
    winner: 0,
  };
}

export const gameSlice = createSlice({
  name: "game",
  initialState: boardInitializer(),
  reducers: {
    lineSelected(state, action) {
      let changePlayer = false;
      //Finding Modified lines In Each Square
      let targetSquares = state.squares.filter((e) =>
        e.positions.find((e) => e.id === action.payload.position)
      );

      //Mutating Positions Of Modified Lines In Each Squares
      for (let square of targetSquares) {
        square.positions.forEach((e) => {
          if (e.id === action.payload.position && e.taken === false) {
            e.taken = true;
            e.player = state.currentPlayer;
            //changing current player
            changePlayer = true;
          }
        });
      }

      //Check if any Square get Completed
      for (let square of targetSquares) {
        const completedLines = square.positions.filter((e) => e.taken);
        //if all lines been true
        if (completedLines.length === 4) {
          square.taken = true;
          square.player = state.currentPlayer;
          state.remainingSquares = state.remainingSquares - 1;
          state.currentPlayer === 1 ? state.player1++ : state.player2++;
          state.currentPlayer === 1
            ? (state.currentPlayer = 1)
            : (state.currentPlayer = 2);
          changePlayer = false;
        }
      }

      if (changePlayer)
        state.currentPlayer === 1
          ? (state.currentPlayer = 2)
          : (state.currentPlayer = 1);

      //Check Who is the winner
      if (state.remainingSquares === 0) {
        if (state.player1 > state.player2) {
          state.winner = 1;
        } else {
          state.winner = 2;
        }
      }
    },
  },
});
