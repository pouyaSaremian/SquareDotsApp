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
      {state.winner === 0 && <GameBoard dispatch={dispatch} state={state} />}
      {state.winner !== 0 && <h2>Player {state.winner} Won the Game</h2>}
      <Information
        currentPlayer={state.currentPlayer}
        remainingSquares={state.remainingSquares}
      />
    </>
  );
}

export default App;
