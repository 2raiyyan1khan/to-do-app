import React from "react";
import { connect } from "react-redux";
import { addTodoItem, removeTodoItem } from "./redux/ActionCreators";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

class App extends React.Component {
  submitHandle = (todoInput) => {
    this.props.addTodo(todoInput);
  };

  removeTodo = (id) => {
    this.props.removeTodo(id);
  };

  render() {
    let todos = this.props.todos.todos;
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
const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodoItem(todo)),
    removeTodo: (id) => dispatch(removeTodoItem(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
