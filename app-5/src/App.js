import React, { Component } from 'react';
import './App.css';
import Image from './Components/Image'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Image conflictImage = {"https://d1qhuz9ahqnrhh.cloudfront.net/wp-content/uploads/2015/10/ux-error-409.png"}/>
      </div>
    );
  }
}

export default App;
