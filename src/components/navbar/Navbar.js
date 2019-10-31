import React, { Component } from 'react'
import HomeIcon from '../icons/home/HomeIcon'
import BoardIcon from '../icons/board/BoardIcon'

export class Navbar extends Component {
  render () {
    return (
      <div>
        <HomeIcon />
        <BoardIcon />
      </div>
    )
  }
}

export default Navbar
