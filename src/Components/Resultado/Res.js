import React from "react";
import "./Res.css";
export const Res = ({ tipo }) => {
  return (
    <div className={tipo}>
      {tipo === "win" ? (
        <h4 className="txt">YOU WON!</h4>
      ) : (
        <h4 className="txt">YOU LOST!</h4>
      )}
    </div>
  );
};
