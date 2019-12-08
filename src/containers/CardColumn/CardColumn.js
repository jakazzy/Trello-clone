import React, { useState } from "react";
import Card from "../../components/card/Card";
import "./CardColumn.css";
import { Draggable, Droppable } from "react-beautiful-dnd";
import uuidv4 from "uuid/v4";

function CardColumn({
  column,
  tasks,
  index,
  createCard,
  removeCard,
  editCard,
  data,
  moveCard,
  deleteColumn
}) {
  const [removeColumn, setRemoveColumn] = useState(false);

  const handleclick = id => {
    const cardid = uuidv4();
    const card = {
      id: `card${cardid}`,
      content: "",
      focus: true,
      button: "Add Card"
    };
    createCard(`card${cardid}`, card, id);
  };

  const showDelete = () => {};

  return (
    <Draggable draggableId={column.id} index={index}>
      {provided => (
        <div
          className="column"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className="list-header">
            <h2 className="list-header-text">{column.title}</h2>
            <div className="dropDown">
              <div className="list-header-icon" onclick={showDelete}>
                ...
              </div>
              <div className="dropDown-content">delete column</div>
            </div>
          </div>
          <Droppable droppableId={column.id} type="task">
            {provided => (
              <div
                className="column-row-cards"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <ul className="row-cards">
                  {tasks.map((task, index) => (
                    <Card
                      task={task}
                      key={task.id}
                      index={index}
                      removeCard={removeCard}
                      column={column}
                      editCard={editCard}
                      data={data}
                      moveCard={moveCard}
                    />
                  ))}
                  {provided.placeholder}
                </ul>
              </div>
            )}
          </Droppable>

          <div className="card-bottom">
            <span className="card-bottom-icon">+</span>
            <span
              className="card-bottom-text"
              onClick={() => handleclick(column.id)}
            >
              Add another card
            </span>
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default CardColumn;
