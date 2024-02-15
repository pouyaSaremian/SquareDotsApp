export type action = {
  type: "LINE_SELECTED";
  payload: { value?: string; id: number; position: string };
};

export type state = {
  init:{
    status:boolean;
    rows:0|10|25|50;
    columns:0|10|25|50
  }
  squares: square[];
  currentPlayer: number;
  remainingSquares: number;
  player1: number;
  player2: number;
  winner: number;
};

export type square = {
  id: number;
  taken: boolean;
  positions: position[];
  player: number;
};

type position = { id: string; taken: boolean; player: number };

export type GameSquareProps = {
  SquareData: square;
  id: number;
};

export type GameBoardProps = {
  state: state;
};
