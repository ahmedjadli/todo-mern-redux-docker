import {
  ADD_TODO,
  ADD_TODO_SUCCESS,
  ADD_TODO_ERROR,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL_TODOS,
  CLEAR_COMPLETED,
  REQUEST_TODOS,
  REQUEST_TODOS_SUCCESS,
  REQUEST_TODOS_ERROR,
  EDIT_TODO_SUCCESS,
  EDIT_TODO_ERROR,
  COMPLETE_TODO_SUCCESS,
  COMPLETE_TODO_ERROR,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_ERROR,
  COMPLETE_ALL_TODOS_SUCCESS,
  COMPLETE_ALL_TODOS_ERROR,
  CLEAR_COMPLETED_SUCCESS,
  CLEAR_COMPLETED_ERROR,
} from "../constants/TodoActionTypes";

const initialState = {
  todos: [],
  loading: true,
  error: {},
};

export default function todos(state = initialState, action) {
  switch (action.type) {
    case REQUEST_TODOS:
      return {
        ...state,
        loading: action.loading,
      };

    case REQUEST_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.todos,
        loading: action.loading,
      };

    case REQUEST_TODOS_ERROR:
      return {
        ...state,
        loading: action.loading,
        error: action.error,
      };

    case ADD_TODO:
      return {
        ...state,
        loading: action.loading,
      };

    case ADD_TODO_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        todos: [...state.todos, action.todo],
      };

    case ADD_TODO_ERROR:
      return {
        ...state,
        loading: action.loading,
        error: action.error,
      };

    case EDIT_TODO:
      return {
        ...state,
        loading: action.loading,
      };

    case EDIT_TODO_SUCCESS:
      console.log(action);
      return {
        ...state,
        loading: action.loading,
        todos: state.todos.map((todo) => {
          return todo._id === action.id
            ? {
                ...todo,
                text: action.text,
              }
            : todo;
        }),
      };

    case EDIT_TODO_ERROR:
      return {
        ...state,
        loading: action.loading,
        error: action.error,
      };

    case COMPLETE_TODO:
      return {
        ...state,
        loading: action.loading,
      };

    case COMPLETE_TODO_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        todos: state.todos.map((todo) => {
          return todo._id === action.id
            ? {
                ...todo,
                completed: !todo.completed,
              }
            : todo;
        }),
      };

    case COMPLETE_TODO_ERROR:
      return {
        ...state,
        loading: action.loading,
        error: action.error,
      };

    case DELETE_TODO:
      return {
        ...state,
        loading: action.loading,
      };

    case DELETE_TODO_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        todos: state.todos.filter((todo) => todo._id !== action.id),
      };

    case DELETE_TODO_ERROR:
      return {
        loading: action.loading,
        error: action.error,
      };

    case COMPLETE_ALL_TODOS:
      return {
        ...state,
        loading: action.loading,
      };

    case COMPLETE_ALL_TODOS_SUCCESS:
      const areAllMarked = state.todos.every((todo) => todo.completed);
      let newTodos = state.todos.map((todo) => ({
        ...todo,
        completed: !areAllMarked,
      }));
      return {
        ...state,
        loading: action.loading,
        todos: newTodos,
      };

    case COMPLETE_ALL_TODOS_ERROR:
      return {
        ...state,
        loading: action.loading,
        error: action.error,
      };

    case CLEAR_COMPLETED:
      return {
        ...state,
        loading: action.loading,
      };

    case CLEAR_COMPLETED_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        todos: state.todos.filter((todo) => todo.completed === false),
      };

    case CLEAR_COMPLETED_ERROR:
      return {
        ...state,
        loading: action.loading,
        error: action.error,
      };

    default:
      return state;
  }
}
