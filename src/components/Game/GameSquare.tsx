import type { GameSquareProps } from "../../types/GameTypes";
import Style from "./style.module.scss";
const GameSquare = ({ SquareData, dispatch }: GameSquareProps) => {
  function StyleHandler(number: number) {
    if (SquareData.positions[number].taken) {
      if (SquareData.positions[number].player === 2) {
        return Style["player-2"];
      } else if (SquareData.positions[number].player === 1) {
        return Style["player-1"];
      }
    } else return "";
  }

  return (
    <>
      <div key={SquareData.id} className={Style["game__square"]}>
        <div
          className={`${Style["game__square--left"]} ${StyleHandler(0)}`}
          onClick={() =>
            dispatch({
              type: "LINE_SELECTED",
              payload: {
                id: SquareData.id,
                position: SquareData.positions[0].id,
              },
            })
          }
        ></div>
        <div
          className={`${Style["game__square--top"]} ${StyleHandler(1)}`}
          onClick={() =>
            dispatch({
              type: "LINE_SELECTED",
              payload: {
                id: SquareData.id,
                position: SquareData.positions[1].id,
              },
            })
          }
        ></div>
        <div
          className={`${Style["game__square--right"]} ${StyleHandler(2)}`}
          onClick={() =>
            dispatch({
              type: "LINE_SELECTED",
              payload: {
                id: SquareData.id,
                position: SquareData.positions[2].id,
              },
            })
          }
        ></div>
        <div
          className={`${Style["game__square--bottom"]} ${StyleHandler(3)}`}
          style={
            SquareData.positions[3].taken
              ? SquareData.positions[3].player === 2
                ? { borderColor: "var(--color-player-2)" }
                : { borderColor: "var(--color-player-1)" }
              : {}
          }
          onClick={() =>
            dispatch({
              type: "LINE_SELECTED",
              payload: {
                id: SquareData.id,
                position: SquareData.positions[3].id,
              },
            })
          }
        ></div>
      </div>
    </>
  );
};

export default GameSquare;
