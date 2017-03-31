import React, {Component} from 'react'
import Moment from 'react-moment'

const Todo = props => (
  <div className="todo-card">
    <p className="todo-content">{props.todo.todo}</p>
    <p className="todo-created-at">
      <Moment fromNow>{props.todo.createdAt}</Moment>
    </p>
  </div>
)

export default Todo

