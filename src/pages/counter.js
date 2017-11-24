import React, { Component } from 'react'
import { Link } from 'gatsby-link'

class Counter extends Component{
    constructor(){
        super()
        this.state = {
            counter: 0
        }
    }

    handleAdd = (event) => {
        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1
            }
        })
    }
    handleSubtract = (event) => {
        this.setState((prevState) => {
            return {
                counter: prevState.counter - 1
            }
        })
    }

    render(){
        return (
            <div>
                <h2>Hello Counter</h2>
                <p>Current count: {this.state.counter}</p>
                <button onClick={this.handleAdd}>
                    Plus
                </button>
                <button onClick={this.handleSubtract}>
                    Minus
                </button>
            </div>
        )
    }
}

export default Counter