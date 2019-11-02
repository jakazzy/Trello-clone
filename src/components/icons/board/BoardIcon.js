import React from 'react'
import trelloIcon from '../../../images/trelloIcon.svg'
import './boardicon.css'

function BoardIcon () {
  return (
    <div className='board-icon'>
      <img
        src={trelloIcon}
        className='Trello-icon'
        alt='Trello icon'
        width='20px'
        height='20px'
      />
      <span>Boards</span>
    </div>
  )
}

export default BoardIcon
