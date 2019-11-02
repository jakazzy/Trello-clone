// import React, { Component } from "react";
// import HomeIcon from "../icons/home/HomeIcon";
// import BoardIcon from "../icons/board/BoardIcon";
// import Input from "../input/Input";
// import "./Navbar.css";

// export className Navbar extends Component {
//   render() {
//     return (
//       <div className="navbar">
//         <HomeIcon />
//         <BoardIcon />
//         <Input />
//       </div>
//     );
//   }
// }

// export default Navbar;

import React from "react";
import "./Navbar.css";
import trelloIcon from "../../images/trelloIcon.svg";
import homeIcon from "../../images/homeIcon.png";
function Navbar() {
  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        <div className="icon">
          <img src={homeIcon} width="20px" heigh="20px" alt="Home" />
        </div>
        <div className="icon board-icon">
          <img src={trelloIcon} width="20px" heigh="20px" alt="trello" />
          <span> Boards</span>
        </div>
        <div>
          <form>
            <input type="text" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
