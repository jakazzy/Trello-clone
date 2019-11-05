import React from "react";
import Card from "../../components/card/Card";
import "./CardColumn.css";
import { Droppable } from "react-beautiful-dnd";

function CardColumn({ column, tasks }) {
  // console.log(tasks);
  return (
    <div className="column">
      <div className="list-header">
        <h2 className="list-header-text">{column.title}</h2>
        <div className="list-header-icon">...</div>
      </div>
      <Droppable droppableId={column.id}>
        {provided => (
          <div
            className="column-row-cards"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <ul className="row-cards">
              {tasks.map((task, index) => (
                <Card task={task} key={task.id} index={index} />
              ))}
              {provided.placeholder}
            </ul>
          </div>
        )}
      </Droppable>

      <div className="card-bottom">
        <span className="card-bottom-icon">+</span>
        <span className="card-bottom-text">Add another card</span>
      </div>
    </div>
  );
}

export default CardColumn;
