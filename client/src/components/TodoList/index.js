import React from "react";
import TodoItem from "../TodoItem";
import PropTypes from "prop-types";

let element;

const TodoList = ({ filtredTodos, actions, loading }) => {
  // if (loading) {
  //   element = (
  //     <li>
  //       <div className="view">
  //         <label>Loading ..</label>
  //       </div>
  //     </li>
  //   );
  // } else {
  //   element = filtredTodos.map((todo) => (
  //     <TodoItem key={todo.id} todo={todo} {...actions} />
  //   ));
  // }
  return (
    <ul className="todo-list">
      {/* {element} */}
      {filtredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} {...actions} />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  filtredTodos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  actions: PropTypes.object.isRequired,
};

export default TodoList;
