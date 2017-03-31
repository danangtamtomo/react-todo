import React, {Component} from 'react'
import {connect} from 'react-redux'

import Todo from './Todo'

import {fetchTodos} from '../actions'

class Todolist extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchTodos()
  }

  render() {
    return (
      <div className="todo-list container">
        {this.props.todos.map(todo => {
          return(
              <div className="col-md-3">
                <Todo key={todo.id} todo={todo}/>
              </div>
            )
        })}
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
  return {todos: state.todos}
}

export default connect(mapStateToProps, mapDispatchToProps)(Todolist)


