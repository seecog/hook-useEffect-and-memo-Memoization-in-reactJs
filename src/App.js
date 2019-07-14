import React, {Component} from 'react';
import Home from './Home.js';
import Mystate from './use-reducer.js';
import Cricket from './use-reducer-assignment1.js';
class App extends Component{
  render(){
    return(
      <div>
        <p>Here.. I have created</p>
        <Home/>
        <hr/>
        <Mystate/>
        <hr/>
        <Cricket/>

      </div>
    )
  }
}

export default App;
