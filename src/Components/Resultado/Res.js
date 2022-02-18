import React from "react";
import "./Res.css";
export const Res = ({ tipo }) => {
  return (
    <div className={tipo === "User won" ? "won" : "loss"}>
      {tipo === "User won" ? (
        <h4 className="txt">YOU WON!</h4>
      ) : (
        <h4 className="txt">YOU LOST!</h4>
      )}
    </div>
  );
};
