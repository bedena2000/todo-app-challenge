const initialState = '';

function todoText(state = initialState, action) {
  switch (action.type) {
    case 'add/todoText':
      return action.payload;
    default:
      return state;
  }
}

export default todoText;
