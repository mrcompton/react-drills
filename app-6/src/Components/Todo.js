import React, { Component } from 'react'

class Todo extends Component{
    render(){
        var mapArray = this.props.userInput.map((element, index) => {
            return (
              <h2 key = {index}>{element}</h2>
          )
          })
        return(
            <div>{mapArray}</div>
        )
    }
}

export default Todo