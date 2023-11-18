import { useReducer } from "react";
import Style from "./App.module.scss";
import gameReducer, { boardInitializer } from "./reducers/game-reducer";

function App() {
  const [state, dispatch] = useReducer(gameReducer, {}, boardInitializer);

  return (
    <div className={Style["game__container"]}>
      <div className={Style["game__squares"]}>
        {state.squares.map((el) => (
          <div
            key={el.id}
            className={Style["game__square"]}
            style={el.taken ? { background: "blue" } : {}}
          >
            <div
              className={Style["game__square--left"]}
              style={el.positions[0].taken ? { borderColor: "blue" } : {}}
              onClick={() =>
                dispatch({
                  type: "LINE_SELECTED",
                  payload: { id: el.id, position: el.positions[0].id },
                })
              }
            ></div>
            <div
              className={Style["game__square--top"]}
              style={el.positions[1].taken ? { borderColor: "blue" } : {}}
              onClick={() =>
                dispatch({
                  type: "LINE_SELECTED",
                  payload: { id: el.id, position: el.positions[1].id },
                })
              }
            ></div>
            <div
              className={Style["game__square--right"]}
              style={el.positions[2].taken ? { borderColor: "blue" } : {}}
              onClick={() =>
                dispatch({
                  type: "LINE_SELECTED",
                  payload: { id: el.id, position: el.positions[2].id },
                })
              }
            ></div>
            <div
              className={Style["game__square--bottom"]}
              style={el.positions[3].taken ? { borderColor: "blue" } : {}}
              onClick={() =>
                dispatch({
                  type: "LINE_SELECTED",
                  payload: { id: el.id, position: el.positions[3].id },
                })
              }
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
