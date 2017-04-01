import React, {Component} from 'react'
import {connect} from 'react-redux'
import {deleteTodoAction, updateIsComplete} from '../actions'
import Moment from 'react-moment'

const Todo = props => (
  <div className="todo-card">
    <p className="todo-content">{props.todo.todo}</p>
    <p className="todo-created-at">
      <Moment fromNow>{props.todo.createdAt}</Moment>
    </p>
    <p className="todo-card-footer">
      {props.todo.is_complete
        ? <input checked onChange={e => props.updateIsComplete(e, props.todo)} type="checkbox"/>
        : <input onChange={e => props.updateIsComplete(e, props.todo)} type="checkbox"/> }

      <button>Edit</button>
      <button onClick={e => props.deleteTodoAction(e, props.todo.id)}>Delete</button>
    </p>
  </div>
)

const mapDispatchToProps = dispatch => ({
  updateIsComplete: (e, oldStatus) => {
    dispatch(updateIsComplete(e, oldStatus))
  },
  deleteTodoAction: (e, id) => {
    dispatch(deleteTodoAction(id))
  }
})

export default connect(null, mapDispatchToProps)(Todo)

