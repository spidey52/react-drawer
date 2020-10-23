import React from 'react'
import "./SideDrawer.css"

const SideDrawer = props => {
  let classes;

  if (props.show === true ) {
    classes = 'side-drawer show'
  }else {
    classes = 'side-drawer'
  }


  return (
  <div className={classes}>
    <div className="side-drawer-profile">
      <p className="profile-name">satyam kumar</p>
      <p className="profile-username">spidey52</p>
    </div>

    <div className="side-drawer-links" >
      <ul>
        <li><a href="/">Username</a></li>
        <li><a href="/">Admin</a></li>
      </ul>
    </div>
  </div>)
};

export default SideDrawer