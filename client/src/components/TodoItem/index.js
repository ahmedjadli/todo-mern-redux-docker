import React, { useState } from "react";
import PropTypes from "prop-types";
import TodoTextInput from "../TodoTextInput";
import classnames from "classnames";

let element;

const TodoItem = ({ todo, completeTodo, deleteTodo, editTodo }) => {
  const [editing, setEditing] = useState(false);

  const handleSave = (id, text) => {
    if (text.length === 0) {
      deleteTodo(id);
    } else {
      editTodo(id, text);
    }
    setEditing(false);
  };

  if (editing) {
    element = (
      <TodoTextInput
        text={todo.text}
        editing={editing}
        onSave={(text) => {
          handleSave(todo._id, text);
        }}
      />
    );
  } else {
    element = (
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={() => completeTodo(todo._id)}
        />
        <label onDoubleClick={() => setEditing(!editing)}>{todo.text}</label>
        <button className="destroy" onClick={() => deleteTodo(todo._id)} />
      </div>
    );
  }
  return (
    <li className={classnames({ completed: todo.completed, editing: editing })}>
      {element}
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onEditTodo: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  onCompleteTodo: PropTypes.func.isRequired,
};
export default TodoItem;
