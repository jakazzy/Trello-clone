import React, { Component } from "react";
import HomeIcon from "../icons/home/HomeIcon";
import BoardIcon from "../icons/board/BoardIcon";
import Input from "../input/Input";
import "./Navbar.css";

export class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <HomeIcon />
        <BoardIcon />
        <Input />
      </div>
    );
  }
}

export default Navbar;
