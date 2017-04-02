import React, {Component} from 'react'
import TextareaAutosize from 'react-autosize-textarea';
import {connect} from 'react-redux'
import {deleteTodoAction, editTodo, updateIsComplete} from '../actions'
import Moment from 'react-moment'

class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isTodoEdit: false
    }
  }

  editTodoHandler(event) {
    this.setState({isTodoEdit: !this.state.isTodoEdit})
  }

  render() {
    return(
      <div style={this.props.todo.is_complete ? {textDecoration: 'line-through',background: '#3498DB'} : {}} className="todo-card">
        <p className="todo-check">
          <i className={this.props.todo.is_complete ? 'glyphicon glyphicon-ok': 'glyphicon glyphicon-unchecked'} onClick={e => this.props.updateIsComplete(this.props.todo)}> </i>
        </p>
        {this.state.isTodoEdit
        ? <p className="todo-content" onClick={e => this.editTodoHandler(e)}>
            <TextareaAutosize autoFocus={true}
                              defaultValue={this.props.todo.todo}
                              onBlur={e => Promise.resolve(this.props.editTodo(e, this.props.todo)).then(() => this.editTodoHandler(e)) }>
                              </TextareaAutosize></p>
        : <p className="todo-content" onClick={e => this.editTodoHandler(e)}>{this.props.todo.todo}</p>}
        <p className="todo-created-at">
          <Moment fromNow>{this.props.todo.createdAt}</Moment>
        </p>
        <p className="btn-todo-delete todo-card-footer">
          <i onClick={e => this.props.deleteTodoAction(e, this.props.todo.id)} className="glyphicon glyphicon-remove"></i>
        </p>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateIsComplete: (oldStatus) => {
    dispatch(updateIsComplete(oldStatus))
  },
  editTodo: (e, oldValues) => {
    dispatch(editTodo(e, oldValues))
  },
  deleteTodoAction: (e, id) => {
    dispatch(deleteTodoAction(id))
  }
})

export default connect(null, mapDispatchToProps)(Todo)

