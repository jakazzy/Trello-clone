import React, { useState } from "react";
import "./App.css";
import CardColumn from "./containers/CardColumn/CardColumn";
import { DragDropContext } from "react-beautiful-dnd";
import Navbar from "./components/navbar/Navbar";
import data from "./data";

function App() {
  const [columns, setColumns] = useState(data);

  const onDragEnd = results => {
    // const { destination, source } = results;
    // if (!destination) {
    //   return;
    // }
    // if (
    //   destination.droppableId === source.droppableId &&
    //   destination.index === source.index
    // ) {
    //   return;
    // }
    // const newColumn = columns[parseInt(source.droppableId) - 1];
    // const newData = Array.from(newColumn.data);
    // const value = newData[source.index];
    // newData.splice(source.index, 1);
    // newData.splice(destination.index, 0, value);
    // const changedColumn = {
    //   ...newColumn,
    //   data: newData
    // };
    // const newColumns = [...columns];
    // newColumns.splice(source.droppableId - 1, 1, changedColumn);
    // console.log(newColumns);
    // console.log(Object.is(newColumns, columns));
    // setColumns([...newColumns]);
  };

  return (
    <div className="task-board">
      <Navbar />
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="sub-board">
          {columns.columnOrder.map(columnValue => {
            const column = columns.columnsData[columnValue];
            // console.log(column, "this is column");
            // const tasks = column.taskIds;
            const tasks = column.taskIds.map(taskId => columns.tasks[taskId]);
            // console.log(tasks, "this is tasks");
            return <CardColumn column={column} key={column.id} tasks={tasks} />;
          })}
        </div>
      </DragDropContext>
    </div>
  );
}

export default App;
