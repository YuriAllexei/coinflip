import React from "react";
import { Button } from "react-bootstrap";
import "../ButtonGen/ButtonGeneral.css";
export const ButtonGeneral = ({ filler, variante }) => {
  return (
    <>
      <Button className="wanortu" variant={`${variante}`}>
        {`${filler}`}{" "}
      </Button>
    </>
  );
};
