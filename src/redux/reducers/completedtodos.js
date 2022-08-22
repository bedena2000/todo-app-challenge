const initialState = [];

function completedTodos(state = initialState, action) {
  switch (action.type) {
    case 'todo/addToCompleted':
      return [...state, action.payload];
    default:
      return state;
  }
}

export default completedTodos;
