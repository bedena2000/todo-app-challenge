import React, { Component } from 'react';

// Redux connect
import { connect } from 'react-redux';

// Actions
import { changeComplete } from '../../redux/actions/actions';

class TodoListItem extends Component {
  render() {
    const { dispatch } = this.props;
    return (
      <div className="flex items-center gap-[7px] cursor-pointer">
        <input
          onChange={() => dispatch(changeComplete(this.props.id))}
          id="todoListItem"
          className="w-[24px] h-[24px]"
          type="checkbox"
          defaultChecked={this.props.completed ? true : false}
        />
        <label
          htmlFor="todoListItem"
          className="text-black font-montserat font-medium text-[18px] leading-[21.94px]">
          {this.props.itemText}
        </label>
      </div>
    );
  }
}

function stateForTodoListItem(state) {
  return {
    allTodos: state.allTodos,
  };
}

export default connect(stateForTodoListItem)(TodoListItem);
