import * as actionTypes from "./ActionTypes";

const initialState = {
  todos: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO_ITEM: {
      let todosLength = state.todos.length;
      let id = todosLength ? state.todos[todosLength - 1].id + 1 : 1;
      return {
        todos: [...state.todos, { id: id, task: action.payload }],
      };
    }
    case actionTypes.REMOVE_TODO_ITEM: {
      let todos = state.todos.filter((item) => item.id !== action.payload);
      return {
        todos: [...todos],
      };
    }
    default:
      return state;
  }
};
