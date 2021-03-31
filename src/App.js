import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Router";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}
