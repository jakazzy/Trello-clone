import React from "react";
import { Draggable } from "react-beautiful-dnd";

function Card({ card, id, index }) {
  return (
    <Draggable draggableId={id.toString()} index={index}>
      {provided => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <li className="card">
            <span className="card-info">{card}</span>
          </li>
        </div>
      )}
    </Draggable>
  );
}

export default Card;
