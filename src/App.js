import React, { useState } from "react";
import "./App.css";
import CardColumn from "./containers/CardColumn/CardColumn";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Navbar from "./components/navbar/Navbar";
import data from "./data";
import uuidv4 from "uuid/v4";

function App() {
  const [columns, setColumns] = useState(data);

  const editCard = card => {
    delete card.button;
    delete card.focus;
    const { id } = card;
    const newColumns = {
      ...columns,
      tasks: { ...columns.tasks, [id]: card }
    };
    setColumns({ ...newColumns });
  };

  const createCard = (name, card, id) => {
    const newColumns = columns;
    newColumns.tasks[name] = card;
    newColumns.columnsData[id].taskIds.push(name);
    setColumns({ ...newColumns });
  };

  const removeCard = (card, columnId) => {
    const { id } = card;
    const data = columns;
    console.log(columnId, "this is columnid");
    data.columnsData[columnId].taskIds = data.columnsData[
      columnId
    ].taskIds.filter(cardId => id !== cardId);
    setColumns({ ...data });
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
  };

  const moveCard = (card, column, previousposition, previousColumn, val) => {
    val.pos = parseInt(val.pos - 1);
    if (previousposition === val.pos && previousColumn === val.col) return;
    let finishid = columns.columnOrder.filter(
      column => columns.columnsData[column].title === val.col
    );
    finishid = finishid.toString();
    const start = columns.columnsData[column.id];
    const finish = columns.columnsData[finishid];

    if (previousColumn === val.col && previousposition !== val.pos) {
      const newTaskIds = Array.from(start.taskIds);
      const index = newTaskIds.indexOf(card.id);
      newTaskIds.splice(index, 1);
      newTaskIds.splice(val.pos, 0, card.id);
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
    if (previousColumn !== val.col && previousposition !== val.pos) {
      const startTaskIds = Array.from(start.taskIds);
      const index = startTaskIds.indexOf(card.id);
      startTaskIds.splice(index, 1);
      const newStart = {
        ...start,
        taskIds: startTaskIds
      };
      const finishTaskIds = Array.from(finish.taskIds);
      finishTaskIds.splice(val.pos, 0, card.id);
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
    }
  };

  const addList = () => {
    console.log("hi");
    const columnid = uuidv4();
    const column = {
      id: `column${columnid}`,
      title: ""
    };
  };
  return (
    <div className="task-board">
      <Navbar />
      <div className="board">
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
                      createCard={createCard}
                      removeCard={removeCard}
                      editCard={editCard}
                      data={columns}
                      moveCard={moveCard}
                    />
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <div onClick={addList} className="add-another-list">
          <div className="add-list add-board">
            <span className="plus-icon">+</span>
            <span>Add Another list</span>
          </div>
          <div className="textArea-add-list">
            <form>
              <input
                id="add-list-textarea"
                class="list-name-input"
                type="text"
                name="name"
                placeholder="Enter list title..."
                autocomplete="off"
                dir="auto"
                maxlength="512"
              ></input>
              <button type="button"> Add list</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
