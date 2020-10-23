import React from 'react'
import './DrawerButton.css'

const SideDrawer = props => {
  console.log(props.click)
 return (
    <button onClick={props.click}>
      <div className="button__line"></div>
      <div className="button__line"></div>
      <div className="button__line"></div>
    </button>
  )
}
export default SideDrawer