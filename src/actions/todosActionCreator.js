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