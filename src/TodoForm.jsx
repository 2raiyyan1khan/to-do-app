import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      todoInput: "",
    };
  }
  onSubmitHandler = (e) => {
    e.preventDefault();
    if (this.state.todoInput !== "") {
      this.props.submitHandle(this.state.todoInput);
    }

    this.setState({
      todoInput: "",
    });
  };
  onChangeHandle = (e) => {
    this.setState({
      todoInput: e.target.value,
    });
  };
  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <input
          type="text"
          onChange={this.onChangeHandle}
          value={this.state.todoInput}
        />
        <input type="submit" value="Add" />
      </form>
    );
  }
}

export default TodoForm;
