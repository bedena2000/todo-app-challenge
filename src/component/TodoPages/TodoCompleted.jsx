import React, { Component } from 'react';

// Redux connect
import { connect } from 'react-redux';

// Components
import TodoListItemDone from './TodoListItemDone';

class TodoCompleted extends Component {
  render() {
    const { allTodos } = this.props;
    return (
      <div className="mt-[33px] flex flex-col gap-[15px]">
        {
          allTodos.map(item => {
            if(item.completed) return <TodoListItemDone text={item.text} key={item.id} id={item.id} />
          })
        }
      </div>
    );
  }
}

function stateForTodoCompleted(state) {
  return {
    allTodos: state.allTodos,
  };
}

export default connect(stateForTodoCompleted)(TodoCompleted);
