import Style from "./style.module.scss";
import { useReducer } from "react";
import gameReducer, { boardInitializer } from "../../reducers/game-reducer";
import GameSquare from "./GameSquare";

const GameBoard = () => {
  const [state, dispatch] = useReducer(gameReducer, {}, boardInitializer);

  return (
    <div className={Style["game__container"]}>
      <div className={Style["game__squares"]}>
        {state.squares.map((el) => (
          <GameSquare key={el.id} SquareData={el} dispatch={dispatch} />
        ))}
      </div>
    </div>
  );
};

export default GameBoard;
