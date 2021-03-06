import React from "react";
import { Component } from "react";
import TodoItem from "./TodoItem";
import TodosData from "./TodosData";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: TodosData,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updatedTodos,
      };
    });
  }

  render(props) {
    const todoComp = this.state.todos.map((item) => (
      <TodoItem key={item.id} item={item} handleChange={this.handleChange} />
    ));
    return <div className="todo-list">{todoComp}</div>;
  }
}

export default App;
