import React from "react";
import "./App.css";
import CardColumn from "./containers/CardColumn/CardColumn";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="task-board">
      <Navbar />
      <CardColumn />
    </div>
  );
}

export default App;
