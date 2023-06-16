import React, { useContext, useRef } from "react";
import TodoContext from "../../store/TodoContext";

import classes from "../../styles/Input.module.css";

const Input = () => {

  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  const { addItem, mode } = useContext(TodoContext);

  const submitTodo = (event) => {
    event.preventDefault();

    const title = titleRef.current.value;
    const description = descriptionRef.current.value;

    if (title.trim().length !== 0 && description.trim().length !== 0) {
      const newItem = {
        id: Date.now(),
        title: title,
        description: description,
        completed: false,
      };
      addItem(newItem);
      console.log(newItem);
    } else {
      alert("Enter items");
    }
  };

  return (
    <form onSubmit={submitTodo}>
      <div
        className={`${classes["form-control"]} ${
          mode ? classes["dark-mode"] : classes["light-mode"]
        }`}
      >
        <input
          ref={titleRef}
          type="text"
          placeholder="Create todo title..."
          className={`${mode ? classes["dark-mode"] : classes["light-mode"]}`}
          required
        />
      </div>
      <div
        className={`${classes["form-control"]} ${
          mode ? classes["dark-mode"] : classes["light-mode"]
        }`}
      >
        <input
          ref={descriptionRef}
          type="text"
          placeholder="Enter todo description..."
          className={`${mode ? classes["dark-mode"] : classes["light-mode"]}`}
          required
        />
      </div>
      <button  className={`${mode ? classes["dark-mode"] : classes["light-mode"]}`} type="submit">Add Item + </button>
    </form>
  );
};

export default Input;
