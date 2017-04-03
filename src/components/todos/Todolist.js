import React, { Component } from 'react'
import { connect } from 'react-redux'

import SearchTodos from './SearchTodos'

import Todo from './Todo'

import { fetchTodos } from '../../actions'

class Todolist extends Component {
  componentDidMount() {
    this.props.fetchTodos()
  }

  render() {
    return (
      <div className="container">
          <SearchTodos />
          <div className="todo-list">
              {this.props.todos.map(todo => {
                  if (!todo.is_complete) {
                    return(
                      <Todo key={todo.id} todo={todo}/>
                    )
                  }
              })}
          </div>
          <hr/>
            <div className="todo-list">
              {this.props.todos.map(todo => {
                if (todo.is_complete) {
                  return(
                    <Todo key={todo.id} todo={todo}/>
                  )
                }
              })}
            </div>
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => ({
  fetchTodos: () => {
    dispatch(fetchTodos())
  }
})

const mapStateToProps = state => {
  console.log(state)
  return {todos: state.todos}
}

export default connect(mapStateToProps, mapDispatchToProps)(Todolist)


