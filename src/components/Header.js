import React, { Component } from 'react'
import { connect } from 'react-redux'
// import logo from '../logo.svg';
import { addTodoHandler } from '../actions'

class Header extends Component {
  render() {
    return(
      <div className="App-header">
        <h1>React Todo</h1>
        <br/>
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <br/>
        <input className="todo-create-init" type="text" onKeyPress={e => this.props.addTodoHandler(e)} placeholder="Create todo..."/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addTodoHandler: (e) => {
    dispatch(addTodoHandler(e))
  }
})

export default connect(null, mapDispatchToProps)(Header)
