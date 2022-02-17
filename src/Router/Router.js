import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Bet } from "../Views/Bets/Bet";
import Login from "../Views/Sign/Login";

export const Rutas = () => {
  const [sign, setSign] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login sign={sign} setSign={setSign} />} />

        <Route path="bet" element={<Bet sign={sign} setSign={setSign} />}>
          {" "}
          /
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
