import React from 'react'
import homeIcon from '../../images/homeIcon.png'

function Home () {
  return (
    <span>
      <img
        src={homeIcon}
        className='Home-icon'
        alt='Home icon'
        width='32px'
        height='32px'
      />
    </span>
  )
}

export default Home
