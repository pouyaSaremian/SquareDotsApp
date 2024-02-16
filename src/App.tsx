import GameBoard from "./components/Game/GameBoard";
import Information from "./components/Information/Information";
import Title from "./components/title/title";
import { useSelector } from "react-redux";
import { RootState } from "./reducers/gameStore";
import BoardSizeInit from "./components/Information/boardSizeInit";
function App() {
  const state = useSelector((state: RootState) => state);
  return (
    <>
      <Title />
      {console.log(import.meta.url)}
      {!state.init.status && <BoardSizeInit />}
      {state.init.status && <GameBoard state={state} />}
      {state.winner !== 0 && <h2 className="winner"><span>Player {state.winner} </span>Won the Game</h2>}
      {state.init.status && state.winner === 0 &&(
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
