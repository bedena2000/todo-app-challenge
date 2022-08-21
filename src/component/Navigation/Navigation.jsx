import React, { Component } from 'react';

export default class Navigation extends Component {
  state = {
    linePosition: 1,
  };
  render() {
    return (
      <div className="mt-[40px] grid grid-cols-[repeat(3,_1fr)] border-b-[1px] border-[#BDBDBD] relative">
        <div
          onClick={() => this.setState({ linePosition: 1 })}
          className="font-semibold text-[14px] leading-[17.07px] font-montserat text-[#333333] text-center p-[20px] cursor-pointer transition ease-in delay-150 bg-transparent hover:bg-slate-300 hover:text-black relative">
          All
          <div
            className={`bg-[rgb(47,128,237)] w-[70%] left-[50%] right-[50%] translate-x-[-50%] h-[4px] rounded-[4px_4px_0px_0px] absolute bottom-0 ${this.state.linePosition === 1 ? 'block' : 'hidden'} `}></div>
        </div>
        <div
          onClick={() => this.setState({ linePosition: 2 })}
          className="font-semibold text-[14px] leading-[17.07px] font-montserat text-[#333333] text-center p-[20px] cursor-pointer transition ease-in delay-150 bg-transparent hover:bg-slate-300 hover:text-black relative">
          Active
          <div
            className={`bg-[#2F80ED] w-[70%] left-[50%] right-[50%] translate-x-[-50%] h-[4px] rounded-[4px_4px_0px_0px] absolute bottom-0 ${this.state.linePosition === 2 ? 'block' : 'hidden'}`}></div>
        </div>
        <div
          onClick={() => this.setState({ linePosition: 3 })}
          className="font-semibold text-[14px] leading-[17.07px] font-montserat text-[#333333] text-center p-[20px] cursor-pointer transition ease-in delay-150 bg-transparent hover:bg-slate-300 hover:text-black relative">
          Completed
          <div
            className={`bg-[#2F80ED] w-[70%] left-[50%] right-[50%] translate-x-[-50%] h-[4px] rounded-[4px_4px_0px_0px] absolute bottom-0  ${this.state.linePosition === 3 ? 'block' : 'hidden'} `}></div>
        </div>
      </div>
    );
  }
}
