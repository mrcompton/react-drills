import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      myArray: ['Beets', 'Potatoes', 'Carrots', 'Lingonberries', 'Meatballs']
      
    }
  }
  render() {

    var listArray = this.state.myArray.map((element,index) => {
      return (
        <h2 key={index}>{element}</h2>
      )
    });

    return (
      <div className="App">
        {listArray}
      </div>
    );
  }
}

export default App;
