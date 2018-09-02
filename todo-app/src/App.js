import React, { Component } from 'react';
import logo from './logo.svg';
import { TodoList } from './TodoList.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    const todos = [{text:"Learn React", priority:5, dueDate: new Date() },
          {text:"Learn about APIs", priority:4, dueDate: new Date(2018,8,30) },
          {text:"write TODO App", priority:3, dueDate: new Date(2018,9,30) }];

    this.state = {items : todos, text: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangePriority = this.handleChangePriority.bind(this);
  }

  handleChange(e) {
    // console.log(e);
    this.setState({ text: e.target.value });
  }

  handleChangePriority(e) {
    this.setState({ priority: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      priority: this.state.priority,
      dueDate: Date.now()
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <input
            id="new-todo"
            type="text"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <br />
          <label htmlFor="new-todo-priority">
            What is its priority?
          </label>
          <input 
            id="new-todo-priority"
            type="number" 
            onChange={this.handleChangePriority}
            defaultValue="1"/>
          <br />
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

export default App;
