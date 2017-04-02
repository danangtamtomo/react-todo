export const getTodos = todos => ({
  type: 'GET_TODOS',
  todos: todos
})

export const fetchTodos = () => dispatch => {
  let url = 'http://localhost:4000/todos'
  fetch(url)
    .then(response => response.json())
    .then(todos => {
      dispatch(getTodos(todos))
    })
    .catch(err => {console.log(err.message)})
}

export const addTodo = values => dispatch => {
  let url = 'http://localhost:4000/todos'
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values)
  })
    .then((response) => {
      dispatch(fetchTodos())
    })
    .catch(err => {console.log(err.message)})
}

export const addTodoHandler = e => dispatch => {
  if (e.key === 'Enter') {
    dispatch(addTodo({
      todo: e.target.value,
      is_complete: false,
      createdAt: new Date()
    }))
    e.target.value = ''
  }
}

export const updateTodo = (id, newValues) => dispatch => {
  let url = 'http://localhost:4000/todos/'+id
  fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newValues)
  })
    .then((response) => {
      dispatch(fetchTodos())
    })
    .catch(err => {console.log(err.message)})
}

export const deleteTodo = id => dispatch => {
  let url = 'http://localhost:4000/todos/'+id
  fetch(url, {
    method: 'DELETE',
  })
    .then((response) => {
      dispatch(fetchTodos())
    })
    .catch(err => {console.log(err.message)})

}

export const updateIsComplete = oldStatus => dispatch => {
  let isComplete = !oldStatus.is_complete
  oldStatus.is_complete = isComplete
  dispatch(updateTodo(oldStatus.id, oldStatus))
}

export const deleteTodoAction = id => dispatch => {
  dispatch(deleteTodo(id))
}

export const editTodo = (e, oldValues) => dispatch => {
  oldValues.todo = e.target.value 
  dispatch(updateTodo(oldValues.id, oldValues))
}
