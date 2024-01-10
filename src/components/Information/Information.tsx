import { InformationProps } from "../../types/InformationTypes";
import Status from "./status";
import Style from "./style.module.scss";
import Users from "./users";
const Information = ({
  currentPlayer,
  remainingSquares,
  player1,
  player2,
}: InformationProps) => {
  return (
    <div className={Style["info"]}>
      <Users
        currentPlayer={currentPlayer}
        player1={player1}
        player2={player2}
      />
      <Status remainingSquares={remainingSquares} />
    </div>
  );
};

export default Information;
