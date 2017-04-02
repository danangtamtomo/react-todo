import React, {Component} from 'react'
import {connect} from 'react-redux'

import Todo from './Todo'

import {fetchTodos, searchTodos} from '../actions'

class Todolist extends Component {
  componentDidMount() {
    this.props.fetchTodos()
  }

  render() {
    return (

      <div className="container">
      <div className="row">
        <input style={{
                  width: '400px',
                  margin: 'auto',
                  borderBottom: 'solid thin',
                  borderTop: 'none',
                  borderLeft: 'none',
                  borderRight: 'none',
                  outline: 'none',
                  padding: '10px'
              }}
        type="text" onChange={e => this.props.searchTodos(e.target.value)} placeholder="Search..."/>
      </div>
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
  },
  searchTodos: keyword => {
    dispatch(searchTodos(keyword))
  }
})

const mapStateToProps = state => {
  return {todos: state.todos.filterTodos}
}

export default connect(mapStateToProps, mapDispatchToProps)(Todolist)


