import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { getCard } from "../../lib/utils";

function Card({ task, index, removeCard, column }) {
  const handleBlur = value => {
    // value.focus = false;
    // console.log(value);
    removeCard(value, column.id);
    return value;
  };
  const value = getCard(task, handleBlur);

  return (
    <Draggable draggableId={task.id} index={index}>
      {provided => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {value}
        </div>
      )}
    </Draggable>
  );
}

export default Card;
