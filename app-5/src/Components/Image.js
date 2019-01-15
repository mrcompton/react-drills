import React, { Component } from 'react'

class Image extends Component {

    render(){
        return (
            <div>
                <img src={this.props.conflictImage} alt ='Conflict 409 - sword fight'/>
            </div>
        )
    }
}

export default Image