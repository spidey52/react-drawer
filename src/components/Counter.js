import React, { Component } from 'react'

class Counter extends Component {

    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    // Add() {
    //     let temp = this.state.count + 1
    //     this.setState({ count: temp })
    // }

    Add() {
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
    }

    Sub() {
        let temp = this.state.count - 1
        this.setState({ count: temp })
    }

    render() {
        return (
            <div>
                <h1> Counter </h1>
                <button onClick={() => this.Add()}>Increment</button>
                <button onClick={() => this.Sub()}>Decrement</button>
                <p> {this.state.count}</p>
            </div>
        )
    }
}

export default Counter