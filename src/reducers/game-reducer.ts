import type { state, action, square } from "../types/GameTypes";

//Initial State Genertor
export function boardInitializer() {
  let rows = 4;
  let columns = 4;
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
  return { squares: squaresArray, currentPlayer: 1 };
}

export default function gameReducer(state: state, action: action) {
  //when Player Select a Line
  if (action.type === "LINE_SELECTED") {
    let { squares, currentPlayer } = state;

    //Finding Modified lines In Each Square
    let targetSquares = squares.filter((e) =>
      e.positions.find((e) => e.id === action.payload.position)
    );

    //Mutating Positions Of Modified Lines In Each Squares
    for (let square of targetSquares) {
      square.positions.forEach((e) => {
        if (e.id === action.payload.position) {
          e.taken = true;
          e.player = currentPlayer;
        }
      });
    }

    //Check if any Square get Completed
    for (let square of targetSquares) {
      const completedLines = square.positions.filter((e) => e.taken);
      //if all lines been true
      if (completedLines.length === 4) {
        square.taken = true;
        square.player = currentPlayer;
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

    //changing current player
    currentPlayer === 1 ? (currentPlayer = 2) : (currentPlayer = 1);

    return { ...state, currentPlayer, squares: [...squares] };
  }
  return { ...state };
}
