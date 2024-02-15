import Styles from "./boardSizeInit.module.scss";
import { useDispatch } from "react-redux";
import { gameSlice } from "../../reducers/gameSlice";
const BoardSizeInit = () => {
  const dispatch = useDispatch();
  function boardInitHandler(arg: 4 | 6 | 8) {
    dispatch({
      type: gameSlice.actions.boardInit.type,
      payload: { rows: arg, columns: arg },
    });
  }

  return (
    <div className={Styles.boardInit}>
      <h2 className={Styles["boardInit--title"]}>choose the board:</h2>
      <form onSubmit={(e) => e.preventDefault}>
        <div className={Styles["boardInit--container"]}>
          <button
            className={Styles["boardInit--button"]}
            onClick={() => boardInitHandler(4)}
          >
            4*4
          </button>
          <button
            className={Styles["boardInit--button"]}
            onClick={() => boardInitHandler(6)}
          >
            6*6
          </button>
          <button
            className={Styles["boardInit--button"]}
            onClick={() => boardInitHandler(8)}
          >
            8*8
          </button>
        </div>
      </form>
    </div>
  );
};

export default BoardSizeInit;
