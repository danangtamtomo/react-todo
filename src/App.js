import React, { Component } from 'react';
import {connect} from 'react-redux'
import logo from './logo.svg';
import Todolist from './components/Todolist'
import {addTodoHandler} from './actions'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <br/>
          <input className="todo-create-init" type="text" onKeyPress={e => this.props.addTodoHandler(e)} placeholder="Create todo..."/>
        </div>
        <Todolist />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addTodoHandler: (e) => {
    dispatch(addTodoHandler(e))
  }
})

export default connect(null, mapDispatchToProps)(App);
