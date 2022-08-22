const initialState = [];

function allTodos(state = initialState, action) {
  switch (action.type) {
    case 'todo/addTodo':
      return [...state, action.payload];
    case 'todo/changeComplete': {
      const newArray = state.map((item) => {
        if (item.id === action.payload)
          return {
            ...item,
            completed: !item.completed,
          };
        return item;
      });
      console.log(newArray);
      return newArray;
    }
    default:
      return state;
      break;
  }
}

export default allTodos;
