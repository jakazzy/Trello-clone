import React from 'react'
import homeIcon from '../../../images/homeIcon.png'
import './homeicon.css'

function HomeIcon () {
  return (
    <div className='home-icon'>
      <img
        src={homeIcon}
        id='home-icon-img'
        alt='Home icon'
        width='20px'
        height='20px'
      />
    </div>
  )
}

export default HomeIcon
