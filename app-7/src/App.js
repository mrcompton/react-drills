import React, { Component } from 'react';
import './App.css';
import NewTask from './Components/NewTask'
import List from './Components/List'

class App extends Component {
  constructor(){
    super()

    this.state = {
      userInputArray: []
    }

    this.handleAddToArray = this.handleAddToArray.bind(this)
  }

  // handleChange(val){
  //   this.setState({userInput : val})
  // }


  handleAddToArray(userIn){
    this.setState({userInputArray: [...this.state.userInputArray, userIn]})
    
    
  }

  render(){
    return (
      <div className="App">
      <h1>My to-do list:</h1>
          <NewTask addItem = {this.handleAddToArray}/>
          <List userInArray = {this.state.userInputArray}/>
      </div>
    );
  }
}

export default App;
