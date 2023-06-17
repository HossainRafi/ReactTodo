import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  
  return (
    <form className="TodoForm">
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="Write Your Todays Task"
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};
