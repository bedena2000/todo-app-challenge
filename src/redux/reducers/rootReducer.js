import { combineReducers } from 'redux';

// Reducers
import allTodos from './allTodos';
import activeTodos from './activeTodos';
import completedTodos from './completedtodos';
import todoText from './todoText';

const rootReducer = combineReducers({
  allTodos: allTodos,
  activeTodos: activeTodos,
  completedTodos: completedTodos,
  todoText: todoText,
});

export default rootReducer;
