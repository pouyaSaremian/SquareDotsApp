export type action = {
  type: "LINE_SELECTED";
  payload: { value?: string; id: number; position: string };
};

export type state = {
  squares: square[];
  currentPlayer: number;
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
  dispatch: React.Dispatch<action>;
};
