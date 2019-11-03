import React, { useState } from "react";
import "./App.css";
import CardColumn from "./containers/CardColumn/CardColumn";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [columns] = useState([
    {
      title: "Plan",
      data: [
        { card: "bake cake", id: 6 },
        { card: "wash utensils", id: 7 },
        { card: "Read book", id: 8 },
        { card: "complete proofread", id: 9 }
      ],
      id: 1
    },
    {
      title: "to do",
      data: [
        { card: "water plants", id: 10 },
        { card: "iron dresses", id: 11 },
        { card: "Help friends", id: 12 },
        { card: "braid hair", id: 13 }
      ],
      id: 2
    },
    {
      title: "doing",
      data: [
        { card: "comb hair", id: 14 },
        { card: "buy prepaid", id: 15 },
        { card: "sweep room", id: 16 },
        { card: "fetch water", id: 17 }
      ],
      id: 3
    },
    {
      title: "Done",
      data: [
        { card: "watch soccer", id: 18 },
        { card: "repair meter", id: 19 },
        { card: "clean room", id: 20 },
        { card: "wash car", id: 21 }
      ],
      id: 4
    },
    {
      title: "logs",
      data: [
        { card: "mob rooms", id: 22 },
        { card: "close window", id: 23 },
        { card: "run errands", id: 24 },
        { card: "water plants", id: 25 }
      ],
      id: 5
    }
  ]);
  return (
    <div className="task-board">
      {console.log(columns, "this is board")}
      <Navbar />
      <div className="sub-board">
        {columns.map(column => (
          <CardColumn
            title={column.title}
            column={column.data}
            key={column.id}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
