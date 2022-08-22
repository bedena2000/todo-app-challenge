import React, { Component } from 'react';

// Redux connect
import { connect } from 'react-redux';

// Components
import TodoListItem from './TodoListItem';
import TextField from '../TextField/TextField';

class TodoActive extends Component {
  render() {
    const { allTodos } = this.props;
    return (
      <div className="mt-[33px]">
        <TextField />
        <div className='flex mt-[30px] flex-col gap-[15px]'>
        {allTodos.map((item) => {
          if (!item.completed)
            return <TodoListItem itemText={item.text} key={item.id} id={item.id} />;
        })}
        </div>
      </div>
    );
  }
}

function stateForTodoActive(state) {
  return {
    allTodos: state.allTodos,
  };
}

export default connect(stateForTodoActive)(TodoActive);
