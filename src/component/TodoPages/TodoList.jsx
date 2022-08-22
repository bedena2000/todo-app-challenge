import React, { Component } from 'react';

// Redux connect
import { connect } from 'react-redux';

// Components
import TodoListItem from './TodoListItem';
import TextField from '../TextField/TextField';

class TodoList extends Component {
  render() {
    const { allTodos } = this.props;
    return (
      <div className="mt-[33px]">
        <TextField />
        <div className='flex flex-col gap-[15px] mt-[30px]'>
          {allTodos.map((item) => (
            <TodoListItem completed={item.completed} itemText={item.text} key={item.id} id={item.id} />
          ))}
        </div>
      </div>
    );
  }
}

function getStateForTodoList(state) {
  return {
    allTodos: state.allTodos,
  };
}

export default connect(getStateForTodoList)(TodoList);
