import type { GameSquareProps } from "../../types/GameTypes";
import Style from "./style.module.scss";
const GameSquare = ({ SquareData, dispatch }: GameSquareProps) => {
  return (
    <>
      <div
        key={SquareData.id}
        className={Style["game__square"]}
        style={SquareData.taken ? { background: "blue" } : {}}
      >
        <div
          className={Style["game__square--left"]}
          style={SquareData.positions[0].taken ? { borderColor: "blue" } : {}}
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
          className={Style["game__square--top"]}
          style={SquareData.positions[1].taken ? { borderColor: "blue" } : {}}
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
          className={Style["game__square--right"]}
          style={SquareData.positions[2].taken ? { borderColor: "blue" } : {}}
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
          className={Style["game__square--bottom"]}
          style={SquareData.positions[3].taken ? { borderColor: "blue" } : {}}
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
