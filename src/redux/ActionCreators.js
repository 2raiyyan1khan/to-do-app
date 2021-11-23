import * as actionTypes from "./ActionTypes";
export const addTodoItem = (payload) => {
  return {
    type: actionTypes.ADD_TODO_ITEM,
    payload: payload,
  };
};

export const removeTodoItem = (payload) => {
  return {
    type: actionTypes.REMOVE_TODO_ITEM,
    payload: payload,
  };
};
