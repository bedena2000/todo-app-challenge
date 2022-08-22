import React, { Component } from 'react';
import { CgTrashEmpty } from 'react-icons/cg';

// Redux connect
import { connect } from 'react-redux';

// Actions
import { changeComplete } from '../../redux/actions/actions';

class TodoListItemDone extends Component {
  render() {
    const { dispatch } = this.props;
    return (
      <div className="cursor-pointer flex justify-between">
        <div className="flex items-center gap-[7px]">
          <input
            id="todoListItem"
            className="w-[24px] h-[24px]"
            type="checkbox"
            defaultChecked={true}
          />
          <label
            htmlFor="todoListItem"
            className="text-black font-montserat font-medium text-[18px] leading-[21.94px] cursor-pointer line-through">
            {this.props.text}
          </label>
        </div>
        <div>
          <CgTrashEmpty size={26} onClick={() => dispatch(changeComplete(this.props.id))} />
        </div>
      </div>
    );
  }
}

function stateForTodoItemDone(state) {
  return {
    allTodos: state.allTodos,
  };
};

export default connect(stateForTodoItemDone)(TodoListItemDone);
