import { ADD_TODO } from '../actionsType/actionsVariables';
import { ADD_TODO_ACTIVE } from '../actionsType/actionsVariables';
import { ADD_TODO_COMPLETED } from '../actionsType/actionsVariables';
import { ADD_TODO_TEXT } from '../actionsType/actionsVariables';
import { CHANGE_TODO_COMPLETE } from '../actionsType/actionsVariables';

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: todo,
  };
}

export function addTodoActive(todo) {
  return {
    type: ADD_TODO_ACTIVE,
    payload: todo,
  };
}

export function addtodoCompleted(todo) {
  return {
    type: ADD_TODO_COMPLETED,
    payload: todo,
  };
}

export function addTodoText(todoText) {
  return {
    type: ADD_TODO_TEXT,
    payload: todoText,
  };
}

export function changeComplete(itemId) {
  return {
    type: CHANGE_TODO_COMPLETE,
    payload: itemId,
  };
}
