import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { addTodoText } from '../../redux/actions/actions';
import { addTodo } from '../../redux/actions/actions';

class TextField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
    };
    this.submitText = this.submitText.bind(this);
  }
  submitText() {
    const todoObject = {
      id: Math.random(),
      text: this.state.inputText,
      completed: false,
    };
    const { dispatch } = this.props;
    if (this.state.inputText) {
      dispatch(addTodoText(this.state.inputText));
      dispatch(addTodo(todoObject));
    }
    
    this.setState({
      inputText: '',
    });
  }
  render() {
    return (
      <div className="flex h-[56px] justify-between mt-[18px] gap-[25px]">
        <input
          type="text"
          placeholder="add details"
          value={this.state.inputText}
          onChange={(event) =>
            this.setState({
              inputText: event.target.value,
            })
          }
          className="
          border-[1px]
            border-[#BDBDBD]
            bg-white
            text-[18px]
            font-normal
            leading-[21.94px]
            text-black
            pl-[12px]
            pr-[12px]
            outline-none
            rounded-[12px]
            min-w-[120px]
            max-w-[476px]
          "
        />
        <button
          onClick={this.submitText}
          className="text-white text-[14px] leading-[17.07px] font-montserat font-semibold px-[40px] bg-[#2F80ED] rounded-[12px]">
          Add
        </button>
      </div>
    );
  }
}

function getStateToTextField(state) {
  return {
    inputText: state.todoText,
  };
}

export default connect(getStateToTextField)(TextField);
