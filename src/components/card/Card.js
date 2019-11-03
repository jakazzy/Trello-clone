import React from "react";

function Card({ card }) {
  return (
    <div>
      <li className="card">
        <span className="card-info">{card}</span>
      </li>
    </div>
  );
}

export default Card;
