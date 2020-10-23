import React, { Component } from 'react'
import './App.css';
import BackDrop from './components/BackDrop';
import Navbar from './components/Navbar';
import SideDrawer from './components/SideDrawer';
import PasswordList from './components/PasswordList'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
    }
  }
  sideDrawerHandler = () => {
    this.setState(prevState => {
      return { show: !prevState.show }
    })
  }
  backDropHandler = () => {
    this.setState({ show: false })
  }
  render() {
    let backdrop;
    if (this.state.show) {
      backdrop = <BackDrop click={this.backDropHandler} />
    }

    return (
      <div className="App">
        {backdrop}
        <SideDrawer show={this.state.show} />
        <Navbar showSideDrawer={this.sideDrawerHandler} />
        <main>
          <PasswordList />
        </main>

      </div>
    )
  }
}

export default App;
