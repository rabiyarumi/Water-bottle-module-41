import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Bottles from "./components/bottles/Bottles";

function App() {
  return (
    <>
      <h2>Water Bottle</h2>
      <Header></Header>
      <Bottles></Bottles>
    </>
  );
}

export default App;
