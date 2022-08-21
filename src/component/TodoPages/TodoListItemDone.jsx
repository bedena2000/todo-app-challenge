import React, { Component } from 'react';
import { CgTrashEmpty } from 'react-icons/cg';

export default class TodoListItemDone extends Component {
  render() {
    return (
      <div className="cursor-pointer flex justify-between">
        <div className="flex items-center gap-[7px]">
          <input id="todoListItem" className="w-[24px] h-[24px]" type="checkbox" checked />
          <label
            htmlFor="todoListItem"
            className="text-black font-montserat font-medium text-[18px] leading-[21.94px] cursor-pointer line-through">
            Task done
          </label>
        </div>
        <div>
          <CgTrashEmpty size={26}/>
        </div>
      </div>
    );
  }
}
