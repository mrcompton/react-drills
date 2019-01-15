import React, {Component} from 'react'
import Todo from './Todo'

class List extends Component{
    render(){
        var mapArray = this.props.userInArray.map((element, index) => {
            return (
              <Todo key={index} task={element} />
          )
          })
        return(
            <div>{mapArray}</div>
        )
    }
}

export default List