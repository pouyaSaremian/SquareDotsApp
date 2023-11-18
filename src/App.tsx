import GameBoard from "./components/Game/GameBoard";
import Information from "./components/Information/Information";
import Title from "./components/title/title";
import { useReducer } from "react";
import gameReducer, { boardInitializer } from "./reducers/game-reducer";
function App() {
  const [state, dispatch] = useReducer(gameReducer, {}, boardInitializer);
  return (
    <>
      <Title />
      <GameBoard dispatch={dispatch} state={state} />
      <Information
        currentPlayer={state.currentPlayer}
        remainingSquares={state.remainingSquares}
      />
    </>
  );
}

export default App;
