import React, { Component } from 'react';
import logo from './logo.svg';
import { TodoList } from './TodoList.js';
import './App.css';

class App extends Component {
  render() {
    const todos = [{text:"Learn React", priority:5, dueDate: new Date() },
          {text:"Learn about APIs", priority:4, dueDate: new Date(2018,8,30) },
          {text:"write TODO App", priority:3, dueDate: new Date(2018,9,30) }];

    return (
      <TodoList todoList={todos} />
    );
  }
}

export default App;
