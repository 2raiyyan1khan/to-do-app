import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }
  submitHandle = (todoInput) => {
    this.setState((state) => {
      let todosLength = state.todos.length;
      let id = todosLength ? state.todos[todosLength - 1].id + 1 : 1;
      return {
        todos: [...state.todos, { id: id, task: todoInput }],
      };
    });
  };

  removeTodo = (id) => {
    this.setState((prevState) => {
      let todos = prevState.todos.filter((todo) => todo.id !== id);
      return {
        todos: [...todos],
      };
    });
  };

  render() {
    let todos = this.state.todos;
    return (
      <div className="container">
        <div className="input-bar">
          <h1>To-do App</h1>
          <TodoForm submitHandle={this.submitHandle} />
        </div>

        <div className="list-bar">
          {todos.map((item) => {
            return (
              <TodoList
                key={item.id}
                item={item}
                removeTodo={this.removeTodo}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
