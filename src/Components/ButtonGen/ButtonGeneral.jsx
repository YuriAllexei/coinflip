import React from "react";
import { Button } from "react-bootstrap";
import "../ButtonGen/ButtonGeneral.css";
export const ButtonGeneral = ({ filler, variante, func, val }) => {
  return (
    <>
      <Button
        onClick={() => {
          func(val);
        }}
        className="wanortu"
        variant={`${variante}`}
      >
        {`${filler}`}{" "}
      </Button>
    </>
  );
};
