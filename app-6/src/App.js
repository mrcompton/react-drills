import React, { Component } from 'react';
import './App.css';
import Todo from './Components/Todo'

class App extends Component {
  constructor(){
    super()

    this.state = {
      userInput: '',
      userInputArray: []
    }

    this.handleAddToArray = this.handleAddToArray.bind(this)
  }

  handleChange(val){
    this.setState({userInput : val})
  }


  handleAddToArray(userIn){
    var arr1 = this.state.userInputArray.slice()

    arr1.push(userIn)
    console.log(arr1)

    this.setState({userInputArray: arr1, userInput: ''})
    
    
  }

  render(){
  

    return (
      <div className="App">
          <h1>My To-do list:</h1>
          <input onChange={(e) => this.handleChange(e.target.value)}
          value={this.state.userInput}
          placeholder = 'Enter new task'
          />
          <button onClick={() => this.handleAddToArray(this.state.userInput)}>Add</button>
          <Todo userInput = {this.state.userInputArray}/>
      </div>
    );
  }
}

export default App;
