import { InformationProps } from "../../types/InformationTypes";
import Status from "./status";
import Style from "./style.module.scss";
import Users from "./users";
const Information = ({ currentPlayer, remainingSquares }: InformationProps) => {
  return (
    <div className={Style["info"]}>
      <Users currentPlayer={currentPlayer} />
      <Status remainingSquares={remainingSquares} />
    </div>
  );
};

export default Information;
