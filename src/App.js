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
    const start = columns.columnsData[source.droppableId];
    const finish = columns.columnsData[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);

      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);
      const newColumn = {
        ...start,
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
      return;
    }

    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);

    const newFinish = {
      ...finish,
      taskIds: finishTaskIds
    };

    const newState = {
      ...columns,
      columnsData: {
        ...columns.columnsData,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    };
    setColumns(newState);
    return;
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
