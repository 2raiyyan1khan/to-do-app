import React from "react";

const TodoList = ({ item, removeTodo }) => {
  return (
    <div>
      <p>{item.task}</p>
      <span onClick={() => removeTodo(item.id)}>&#9747;</span>
    </div>
  );
};

export default TodoList;
