import Styles from "./boardSizeInit.module.scss";
import { useDispatch } from "react-redux";
import { gameSlice } from "../../reducers/gameSlice";
const BoardSizeInit = () => {
  const dispatch = useDispatch();
  function boardInitHandler(arg: 3 | 5 | 7) {
    dispatch({
      type: gameSlice.actions.boardInit.type,
      payload: { rows: arg, columns: arg },
    });
  }

  return (
    <div className={Styles.boardInit}>
      <h2 className={Styles["boardInit--title"]}>choose the board size:</h2>
      <form onSubmit={(e) => e.preventDefault}>
        <div className={Styles["boardInit--container"]}>
          <button
            className={Styles["boardInit--button"]}
            onClick={() => boardInitHandler(3)}
          >
            3x3
          </button>
          <button
            className={Styles["boardInit--button"]}
            onClick={() => boardInitHandler(5)}
          >
            5x5
          </button>
          <button
            className={Styles["boardInit--button"]}
            onClick={() => boardInitHandler(7)}
          >
            7x7
          </button>
        </div>
      </form>
    </div>
  );
};

export default BoardSizeInit;
