import Style from "./style.module.scss";
import GameSquare from "./GameSquare";
import { GameBoardProps } from "../../types/GameTypes";
import Dot from "./Dot";
import { useEffect,useState } from "react";

const GameBoard = ({ state }: GameBoardProps) => {
const {columns,rows} = state.init
  const [dots,setDots]=useState<JSX.Element[]>([])
  useEffect(()=>{
    const squaresNumber = ((rows+1)*(columns+1));
    const dotsArr=Array(squaresNumber).fill(<Dot/>)
    setDots(dotsArr)
  },[])

    return (
    <div className={Style["game__container"]}>
      <div className={Style["game__dots"]} style={{
        gridTemplateColumns:`repeat(${columns+1},max-content`,gridTemplateRows:`repeat(${rows+1},max-content`
      }}>
        {dots}
      </div>
      <div className={Style["game__squares"]}  style={{
        gridTemplateColumns:`repeat(${columns},max-content`,gridTemplateRows:`repeat(${rows},max-content`
      }}>
        {state.squares.map((el) => (
          <GameSquare key={el.id} id={el.id} SquareData={el} />
        ))}
      </div>
    </div>
  );
};

export default GameBoard;
