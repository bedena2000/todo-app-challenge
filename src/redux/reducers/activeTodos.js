const initialState = [];

function activeTodos(state = initialState, action) {
  switch (action.type) {
    case 'todo/addActive':
      return [...state, action.payload];
    default:
      return state;
  }
}

export default activeTodos;