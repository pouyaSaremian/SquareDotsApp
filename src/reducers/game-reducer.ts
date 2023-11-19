import type { state, action, square } from "../types/GameTypes";

//Initial State Genertor
export function boardInitializer() {
  let rows = 3;
  let columns = 3;
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

export default function gameReducer(state: state, action: action) {
  //when Player Select a Line
  if (action.type === "LINE_SELECTED") {
    let { squares, remainingSquares, player1, player2, winner, currentPlayer } =
      state;

    //Finding Modified lines In Each Square
    let targetSquares = squares.filter((e) =>
      e.positions.find((e) => e.id === action.payload.position)
    );

    //Mutating Positions Of Modified Lines In Each Squares
    for (let square of targetSquares) {
      square.positions.forEach((e) => {
        if (e.id === action.payload.position && e.taken === false) {
          e.taken = true;
          e.player = currentPlayer;
        }
      });
    }
    //changing current player
    currentPlayer === 1 ? (currentPlayer = 2) : (currentPlayer = 1);

    //Check if any Square get Completed
    for (let square of targetSquares) {
      const completedLines = square.positions.filter((e) => e.taken);
      //if all lines been true
      if (completedLines.length === 4) {
        square.taken = true;
        square.player = currentPlayer;
        remainingSquares = remainingSquares - 1;
        currentPlayer === 1 ? (currentPlayer = 1) : (currentPlayer = 2);
      }
    }

    //Mutating Main State And Pushing Modified Data To It
    for (let square of squares) {
      for (let modifiedSquare of targetSquares) {
        if (square.id === modifiedSquare.id) {
          square = { ...modifiedSquare };
        }
      }
    }
    squares = [...squares];

    //Check Who is the winner
    if (remainingSquares === 0) {
      for (let square of squares) {
        if (square.player === 1) player1 = player1 + 1;
        if (square.player === 2) player2 = player2 + 1;
      }
      if (player1 > player2) {
        winner = 1;
      } else {
        winner = 2;
      }
    }

    return {
      ...state,
      remainingSquares,
      currentPlayer,
      player1,
      player2,
      winner,
      squares: [...squares],
    };
  }
  return { ...state };
}
