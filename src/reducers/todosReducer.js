export const todos = (state = [], action) => {
  switch (action.type) {
    case 'GET_TODOS':
      return action.todos.slice()
      break;
    case 'SEARCH_TODOS':
			let filteredTodos = state.filter(todo => todo.todo.toLowerCase().search(action.keyword.toLowerCase()) !== -1)
      console.log(filteredTodos)
			return Object.assign({}, state, filteredTodos)
			break;
    case 'ADD_TODO':

			return state
			break;
    default:
      return state
  }
}