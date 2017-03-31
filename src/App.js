import React, { Component } from 'react';
import Modal from 'react-modal'
import logo from './logo.svg';
import Todolist from './components/Todolist'
import './App.css';

const appElement = document.getElementById('app');



const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class App extends Component {
  constructor() {
    super()
    this.state = {
      modalIsOpen: false
    }
    this.openModal = this.openModal.bind(this)
    this.afterOpenModal = this.afterOpenModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal() {
    this.setState({
      modalIsOpen: true
    })
  }

  afterOpenModal() {
    this.refs.subtitle.style.color = '#f00'
  }

  closeModal() {
    this.setState({
      modalIsOpen: false
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <br/>
          <input className="todo-create-init" type="text" placeholder="Create todo..."/>
        </div>
        <Todolist />
      </div>
    );
  }
}

export default App;
