import React, { Component } from 'react';

// Components
import TodoListItem from './TodoListItem';

export default class TodoList extends Component {
  render() {
    return (
      <div className="mt-[33px]">
        <TodoListItem />
      </div>
    );
  }
}
