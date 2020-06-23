import * as types from "../constants/TodoActionTypes";
import axios from "axios";

// FETCH TODOS
export const requestTodos = () => ({
  type: types.REQUEST_TODOS,
  loading: true,
});

export const requestTodosSuccess = (todos) => ({
  type: types.REQUEST_TODOS_SUCCESS,
  todos,
  loading: false,
});

export const requestTodosError = (error) => ({
  type: types.REQUEST_TODOS_ERROR,
  loading: false,
  error,
});

export const fetchTodos = () => {
  return (dispatch) => {
    dispatch(requestTodos());

    return axios
      .get("/api/todos")
      .then((res) => {
        if (!res.data.success) return res.data.err;
        return res.data.todos;
      })
      .then((todos) => dispatch(requestTodosSuccess(todos)))
      .catch((err) => {
        console.error(err);
        dispatch(requestTodosError(err));
      });
  };
};

// ADD TODOS
export const addingTodo = () => ({
  type: types.ADD_TODO,
  loading: true,
});

export const addTodoSuccess = (todo) => ({
  type: types.ADD_TODO_SUCCESS,
  todo: todo,
  loading: false,
});

export const addTodoError = (error) => ({
  type: types.ADD_TODO_ERROR,
  error,
  loading: false,
});

export const addTodo = (text) => {
  return (dispatch) => {
    dispatch(addingTodo());

    return axios
      .post("/api/todos", { text })
      .then((res) => {
        if (!res.data.success) return res.data.err;
        return res.data.todo;
      })
      .then((todo) => dispatch(addTodoSuccess(todo)))
      .catch((err) => dispatch(addTodoError(err)));
  };
};

// EDIT TODO
export const editingTodo = () => ({
  type: types.EDIT_TODO,
  loading: true,
});

export const editTodoSuccess = (id, text) => ({
  type: types.EDIT_TODO_SUCCESS,
  id,
  text,
  loading: false,
});

export const editTodoError = (error) => ({
  type: types.EDIT_TODO_ERROR,
  error,
  loading: false,
});

export const editTodo = (id, text) => {
  return (dispatch) => {
    dispatch(editingTodo());

    return axios
      .put(`/api/todos/${id}`, { text })
      .then((res) => {
        if (!res.data.success) return res.data.err;
        return res.data.text;
      })
      .then((text) => dispatch(editTodoSuccess(id, text)))
      .catch((err) => dispatch(editTodoError(err)));
  };
};

export const completingTodo = () => ({
  type: types.COMPLETE_TODO,
  loading: true,
});

export const completeTodoSuccess = (id) => ({
  type: types.COMPLETE_TODO_SUCCESS,
  id,
  loading: false,
});

export const completeTodoError = (error) => ({
  type: types.COMPLETE_TODO_ERROR,
  error,
  loading: false,
});

export const completeTodo = (id) => {
  return (dispatch) => {
    dispatch(completingTodo());
    return axios
      .put(`/api/todos/com/${id}`)
      .then((res) => {
        if (!res.data.success) return res.data.err;
        return res.data.success;
      })
      .then(() => dispatch(completeTodoSuccess(id)))
      .catch((err) => dispatch(completeTodoError(err)));
  };
};

// DELETE TODO
export const deletingTodo = () => ({
  type: types.DELETE_TODO,
  loading: true,
});

export const deleteTodoSuccess = (id) => ({
  type: types.DELETE_TODO_SUCCESS,
  id,
  loading: false,
});

export const deleteTodoError = (error) => ({
  type: types.DELETE_TODO_ERROR,
  error,
  loading: false,
});

export const deleteTodo = (id) => {
  return (dispatch) => {
    dispatch(deletingTodo());
    return axios
      .delete(`/api/todos/${id}`)
      .then((res) => {
        if (!res.data.success) return res.data.err;
        return res.data.success;
      })
      .then(() => dispatch(deleteTodoSuccess(id)))
      .catch((err) => dispatch(deleteTodoError(err)));
  };
};

// COMPLETE ALL TODOS
export const completingAllTodos = () => ({
  type: types.COMPLETE_ALL_TODOS,
  loading: true,
});

export const completeAllTodosSuccess = (todos) => ({
  type: types.COMPLETE_ALL_TODOS_SUCCESS,
  todos,
  loading: false,
});

export const completeAllTodosError = (error) => ({
  type: types.COMPLETE_TODO_ERROR,
  error,
  loading: false,
});

export const completeAllTodos = () => {
  return (dispatch) => {
    dispatch(completingAllTodos());
    return axios
      .get("/api/todos/com/all")
      .then((res) => {
        if (!res.data.success) return res.data.err;
        return res.data.success;
      })
      .then(() => dispatch(completeAllTodosSuccess()))
      .catch((err) => dispatch(completeAllTodosError(err)));
  };
};

export const clearingCompleted = () => ({
  type: types.CLEAR_COMPLETED,
  loading: true,
});

export const clearCompletedSuccess = () => ({
  type: types.CLEAR_COMPLETED_SUCCESS,
  loading: false,
});

export const clearCompletedError = (error) => ({
  type: types.CLEAR_COMPLETED_ERROR,
  error,
  loading: false,
});

export const clearCompleted = () => {
  return (dispatch) => {
    dispatch(clearingCompleted());
    return axios
      .get("/api/todos/com/clr")
      .then((res) => {
        if (!res.data.success) return res.data.err;
        return res.data.success;
      })
      .then(() => dispatch(clearCompletedSuccess()))
      .catch((err) => dispatch(clearCompletedError(err)));
  };
};

export const setVisibilityFilter = (filter) => ({
  type: types.SET_VISIBILITY_FILTER,
  filter,
});
