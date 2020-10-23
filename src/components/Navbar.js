import React from 'react'
import SideDrawer from './DrawerButton'
import './Navbar.css'

const Navbar = props => (

  <header>
    <nav>
    <SideDrawer click={props.showSideDrawer} />
      <div className="logo">
        Spidey Pass
      </div>
     <div className="spacer" > </div>
      <ul>
        <li><a href="/"> Username </a></li>
        <li><a href="/"> Admin </a></li>
      </ul>
    </nav>
  </header>
)

export default Navbar