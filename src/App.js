import React, { Component } from 'react';

// Routers
import { Routes, Route } from 'react-router-dom';

// Components
import Title from './component/Title/Title';
import Navigation from './component/Navigation/Navigation';
import TodoActive from './component/TodoPages/TodoActive';
import TodoCompleted from './component/TodoPages/TodoCompleted';
import TodoList from './component/TodoPages/TodoList';
import Footer from './component/Footer/Footer';

export default class App extends Component {
  render() {
    return (
      <div className="max-w-[608px] mx-auto px-[15px] pt-[32px] pb-[32px] min-h-screen flex flex-col justify-between">
        <div>
          <Title />
          <Navigation />
          <Routes>
            <Route path="/" element={<TodoList />} />
            <Route path="/todoActive" element={<TodoActive />} />
            <Route path="/todoComplete" element={<TodoCompleted />} />
          </Routes>
        </div>
        <Footer />
      </div>
    );
  }
}
