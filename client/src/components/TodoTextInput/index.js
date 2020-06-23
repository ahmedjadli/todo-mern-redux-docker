import React, { useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const TodoTextInput = ({ onSave, text, placeholder, editing, newTodo }) => {
  const [Stext, setStext] = useState(text || "");

  const handleSumbit = (e) => {
    const text = e.target.value.trim();
    if (e.which === 13) {
      onSave(text);
      if (newTodo) {
        setStext("");
      }
    }
  };

  return (
    <input
      className={classnames({
        edit: editing,
        "new-todo": newTodo,
      })}
      type="text"
      placeholder={placeholder}
      autoFocus="true"
      value={Stext}
      onBlur={(e) => {
        !newTodo && onSave(e.target.value);
      }}
      onChange={(e) => {
        setStext(e.target.value);
      }}
      onKeyDown={handleSumbit}
    />
  );
};

TodoTextInput.propTypes = {
  onSave: PropTypes.func.isRequired,
  text: PropTypes.string,
  placeholder: PropTypes.string,
  editing: PropTypes.bool,
  newTodo: PropTypes.bool,
};

export default TodoTextInput;
