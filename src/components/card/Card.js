import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import GetCard from "../../displayCard/displayCard";

function Card({ task, index, removeCard, column, editCard, data }) {
  const [values, setValues] = useState({
    content: ""
  });

  const [isOpen, setIsOpen] = useState(false);
  const [isMove, setIsMove] = useState(false);
  const [position, setPosition] = useState({ modalTop: "", modalLeft: "" });
  const [openCard, setOpenCard] = useState("");
  const [cardClicked, setcardClicked] = useState("");
  const handleBlur = (event, value) => {
    console.log("i am the reason");
    event.preventDefault();
    removeCard(value, column.id);
    console.log("see you");
  };

  const handleSubmit = event => {
    console.log("it works");
    if (
      (event.keyCode === 13 && event.shiftKey === false) ||
      event.target.id === "add-card-button"
    ) {
      console.log("me too");
      editCard(values, column.id);
      setValues({ content: "" });
      if (isOpen) setIsOpen(false);
    }
  };

  const handleChange = (event, card) => {
    event.persist();
    console.log("hi");
    setValues({ ...values, ...card, content: event.target.value });
  };

  const handleClick = event => {
    console.log(task.id, "hievent");
    setcardClicked(task.id);
    setOpenCard(task.id);
    setIsOpen(!isOpen);
    setPosition({
      ...position,
      modalTop: event.clientY - 29,
      modalLeft: event.clientX - 231
    });
    console.log(position, "this is it");
  };

  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  const handleMove = () => {
    setIsMove(!isMove);
  };
  const handleDelete = value => {
    removeCard(value, column.id);
  };

  const value = (
    <GetCard
      key={task.id}
      column={column}
      task={task}
      handleBlur={handleBlur}
      handleChange={handleChange}
      values={values}
      handleSubmit={handleSubmit}
      handleClick={handleClick}
      isOpen={isOpen}
      handleClose={handleClose}
      position={position}
      handleDelete={handleDelete}
      handleMove={handleMove}
      isMove={isMove}
      data={data}
      openCard={openCard}
      cardClicked={cardClicked}
    />
  );

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
