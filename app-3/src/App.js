import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      pigArray:['pig','hog','swine','boar','sow','piglet','porcine'],
      userInput: ''
  }
  }

  handleChange(val){
    this.setState({ userInput: val })
  }

  render() {
    var filterArray = this.state.pigArray.filter((element) => (element.includes(this.state.userInput))
    )

    var mapArray = filterArray.map((element,index) => {
      return (
        <h2 key = {index}>{element}</h2>
      )
    })


    return (
      <div className="App">
        <input onChange={(e) => this.handleChange(e.target.value)}/>
        {mapArray}
      </div>
    );
  }
}

export default App;
