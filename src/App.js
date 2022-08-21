import React, { Component } from 'react';

// Components
import Title from './component/Title/Title';
import Navigation from './component/Navigation/Navigation';
import TextField from './component/TextField/TextField';
import TodoList from './component/TodoPages/TodoList';

export default class App extends Component {
  render() {
    return (
      <div className="max-w-[608px] mx-auto px-[15px]">
        <Title />
        <Navigation />
        <TextField />
        <TodoList />
      </div>
    );
  }
}
