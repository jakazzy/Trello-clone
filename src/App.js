import React, { useState } from "react";
import "./App.css";
import CardColumn from "./containers/CardColumn/CardColumn";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Navbar from "./components/navbar/Navbar";
import data from "./data";

function App() {
  const [columns, setColumns] = useState(data);

  const addCard = (name, card, id) => {
    const newColumns = columns;
    newColumns.tasks[name] = card;
    newColumns.columnsData[id].taskIds.push(name);
    setColumns({ ...newColumns });
  };

  const removeCard = (card, columnId) => {
    const newColumns = columns;
    const { id } = card;
    delete newColumns.tasks[`${id}`];
    newColumns.columnsData[`${columnId}`].taskIds.pop();
    setColumns({ ...newColumns });
  };

  const onDragEnd = results => {
    const { destination, source, draggableId, type } = results;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === "column") {
      const newColumnOrder = Array.from(columns.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ...columns,
        columnOrder: newColumnOrder
      };
      setColumns(newState);
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
        <Droppable
          droppableId="all-columns"
          direction="horizontal"
          type="column"
        >
          {provided => (
            <div
              className="sub-board"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {columns.columnOrder.map((columnValue, index) => {
                const column = columns.columnsData[columnValue];
                const tasks = column.taskIds.map(
                  taskId => columns.tasks[taskId]
                );
                return (
                  <CardColumn
                    column={column}
                    key={column.id}
                    tasks={tasks}
                    index={index}
                    addCard={addCard}
                    removeCard={removeCard}
                  />
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;
