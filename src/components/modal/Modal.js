import React from "react";

const Modal = ({ isOpen }) => {
  return (
    <div className="modal" style={{ display: isOpen ? "block" : "none" }}>
      <span className="close">&times;</span>
      {/* <div > */}
      <textarea
        className="modal-content"
        name=""
        cols="23"
        rows="1"
        onChange={console.log("nice")}
        value="here we are"
      ></textarea>
      {/* </div> */}
    </div>
  );
};

export default Modal;
