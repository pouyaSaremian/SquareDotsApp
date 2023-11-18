import { useReducer } from "react";
import Style from "./App.module.scss";
import GameBoard from "./components/Game/GameBoard";
import Title from "./components/title/title";
import gameReducer, { boardInitializer } from "./reducers/game-reducer";

function App() {
  return (
    <>
      <Title />
      <GameBoard />
    </>
  );
}

export default App;
