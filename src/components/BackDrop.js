import React from 'react'
import './Backdrop.css'

const BackDrop = (props) => {
  return (
    <div className="backdrop" onClick={props.click}> </div>
  )
}

export default BackDrop