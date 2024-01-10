import GameBoard from "./components/Game/GameBoard";
import Information from "./components/Information/Information";
import Title from "./components/title/title";
import { useSelector } from "react-redux";
import { RootState } from "./reducers/gameStore";
function App() {
  const state = useSelector((state: RootState) => state);
  return (
    <>
      <Title />
      {state.winner === 0 && <GameBoard state={state} />}
      {state.winner !== 0 && <h2>Player {state.winner} Won the Game</h2>}
      <Information
        currentPlayer={state.currentPlayer}
        player1={state.player1}
        player2={state.player2}
        remainingSquares={state.remainingSquares}
      />
    </>
  );
}

export default App;
