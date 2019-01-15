import React, { Component } from 'react'

class Input extends Component {
    constructor(){
        super()

        this.state = {
            userInput: ''
        }
    }

    handleChange(val){
        this.setState({userInput: val})
    }
    render(){
        return(
            <div>
                <input onChange={(e) => this.handleChange(e.target.value)}/>
                <p>{this.state.userInput}</p>
            </div>
            
        )
    }
}

export default Input