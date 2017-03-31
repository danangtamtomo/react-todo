export const todos = (state = [], action) => {

  switch (action.type) {
    case 'GET_TODOS':
      return action.todos
      break;
    default:
      return state
  }
}
