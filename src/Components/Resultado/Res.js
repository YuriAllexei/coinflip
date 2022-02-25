import React from "react";
import "./Res.css";
export const Res = ({ tipo }) => {
  return (
    <div className={tipo === "win" ? "win" : "loss"}>
      {tipo === "win" ? (
        <p className="txt">YOU WON!</p>
      ) : (
        <p className="txt">YOU LOST!</p>
      )}
    </div>
  );
};
