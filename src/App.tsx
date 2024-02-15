import GameBoard from "./components/Game/GameBoard";
import Information from "./components/Information/Information";
import Title from "./components/title/title";
import { Provider, useSelector } from "react-redux";
import { RootState, store } from "./reducers/gameStore";
import BoardSizeInit from "./components/Information/boardSizeInit";
function App() {
  const state = useSelector((state: RootState) => state);
  return (
    <>
      <Title />
        {!state.init.status && <BoardSizeInit />}
        {state.init.status && <GameBoard state={state} />}
        {state.winner !== 0 && <h2>Player {state.winner} Won the Game</h2>}
        {state.init.status && (
          <Information
            currentPlayer={state.currentPlayer}
            player1={state.player1}
            player2={state.player2}
            remainingSquares={state.remainingSquares}
          />
        )}
    </>
  );
}

export default App;
