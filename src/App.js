import React, { useState } from "react";
import "./App.css";
import CardColumn from "./containers/CardColumn/CardColumn";
import { DragDropContext } from "react-beautiful-dnd";
import Navbar from "./components/navbar/Navbar";
import data from "./data";

function App() {
  const [columns, setColumns] = useState(data);

  const onDragEnd = results => {
    const { destination, source, draggableId } = results;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const column = columns.columnsData[source.droppableId];

    const newTaskIds = Array.from(column.taskIds);
    console.log(column);
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);
    const newColumn = {
      ...column,
      taskIds: newTaskIds
    };
    const newData = {
      ...columns,

      columnsData: {
        ...columns.columnsData,
        [newColumn.id]: newColumn
      }
    };
    setColumns(newData);
  };

  return (
    <div className="task-board">
      <Navbar />
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="sub-board">
          {columns.columnOrder.map(columnValue => {
            const column = columns.columnsData[columnValue];
            const tasks = column.taskIds.map(taskId => columns.tasks[taskId]);
            return <CardColumn column={column} key={column.id} tasks={tasks} />;
          })}
        </div>
      </DragDropContext>
    </div>
  );
}

export default App;
