import Style from "./style.module.scss";
import GameSquare from "./GameSquare";
import { GameBoardProps } from "../../types/GameTypes";
import Dot from "./Dot";

const GameBoard = ({ state, dispatch }: GameBoardProps) => {
  return (
    <div className={Style["game__container"]}>
      <div className={Style["game__dots"]}>
        <Dot />
        <Dot />
        <Dot />
        <Dot />
        <Dot />
        <Dot />
        <Dot />
        <Dot />
        <Dot />
        <Dot />
        <Dot />
        <Dot />
        <Dot />
        <Dot />
        <Dot />
        <Dot />
      </div>
      <div className={Style["game__squares"]}>
        {state.squares.map((el) => (
          <GameSquare key={el.id} SquareData={el} dispatch={dispatch} />
        ))}
      </div>
    </div>
  );
};

export default GameBoard;
