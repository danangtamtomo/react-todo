export const todos = (state = {todos:[], filterTodos:[]}, action) => {
  switch (action.type) {
    case 'GET_TODOS':
      return Object.assign({}, state, {
						todos: action.todos,
						filterTodos: action.todos
					})
      break;
		case 'SEARCH_TODOS':
			let filterTodos = state.todos.filter(todo => todo.todo.toLowerCase().search(action.keyword.toLowerCase()) !== -1)
			return Object.assign({}, state, {filterTodos})
			break;
		case 'ADD_TODO':
			// let todos = state
			// let newTodo = Object.assign({}, todos {})
			// newTodo.todos.filterTodos.push(action.todo)
			// newTodo.todos.todos.push(action.todo)
			// console.log(newTodo);
console.log({todos:Object.assign({}, state, {
	todos:action.todo,
	filterTodos:action.todo
})});
			return {todos: Object.assign({}, state, {
				todos:action.todo,
				filterTodos:action.todo
			})}
			break;
    default:
      return state
  }
}