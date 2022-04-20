import React from 'react';
import './App.css';
import { ChildClass } from './ReactInheritance/ChildClass';
import Home from './ReactInheritance/Home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: " Geeks for Geeks message"
    };
  }
  render() {
    return (
      <div className="App">
        {/* Compositation Example */}
        <Home/>
        {/* Inheritance Example  */}
        <h4>Hello Amit</h4>
        <ChildClass message={this.state.message} />
      </div>
    );
  }
}


export default App;