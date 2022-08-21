import React, { Component } from 'react';

export default class TodoListItem extends Component {
  render() {
    return (
      <div className="flex items-center gap-[7px] cursor-pointer">
        <input id="todoListItem" className="w-[24px] h-[24px]" type="checkbox" />
        <label
          htmlFor="todoListItem"
          className="text-black font-montserat font-medium text-[18px] leading-[21.94px]">
          Do Codding Challenges
        </label>
      </div>
    );
  }
}
