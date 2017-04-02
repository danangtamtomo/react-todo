export const todos = (state = [], action) => {
	console.log(state)
	console.log(action)
  switch (action.type) {
    case 'GET_TODOS':
      return action.todos
      break;
    default:
      return state
  }
}
