import { useState } from "react";
import { UsersProps } from "../../types/InformationTypes";
import Style from "./style.module.scss";
const Users = ({ currentPlayer }: UsersProps) => {
  return (
    <div className={Style["info__users"]}>
      <div
        className={`${Style["info__users--1"]} ${
          currentPlayer === 1 ? Style["active"] : ""
        }`}
      >
        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path d="m221 326h70v35h-70v-35zm245-140v105h-105v35h35v35h-70v-35h-35v-35h-70v35h-35v35h-70v-35h35v-35h-105v-105h35v-35h105v-35h140v35h105v35h35zm-245 35h-70v35h70v-35zm140 0h-70v35h70v-35zm105 175v-35h-70v35h70zm-420 0h70v-35h-70v35z" />
        </svg>
        <span>Player 1</span>
      </div>
      <div
        className={`${Style["info__users--2"]} ${
          currentPlayer === 2 ? Style["active"] : ""
        }`}
      >
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="m7 6h-2v-2h2zm10 0h2v-2h-2zm6 6v6h-2v-4h-2v4h-2v-2h-10v2h-2v-4h-2v4h-2v-6h2v-2h2v-2h2v-2h2v2h6v-2h2v2h2v2h2v2zm-8-2v2h2v-2zm-8 2h2v-2h-2zm4 6h-4v2h4zm6 0h-4v2h4z" />
        </svg>
        <span>Player 2</span>
      </div>
    </div>
  );
};

export default Users;
