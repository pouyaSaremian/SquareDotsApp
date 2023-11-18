import { StatusProps } from "../../types/InformationTypes";
import Style from "./style.module.scss";

const Status = ({ remainingSquares }: StatusProps) => {
  return (
    <div className={Style["info__status"]}>
      <h2>
        Remaining Squares: <span>{remainingSquares}</span>
      </h2>
    </div>
  );
};

export default Status;
