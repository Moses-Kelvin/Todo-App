import React, { useEffect, useReducer, useState } from "react";
import TodoContext from "./TodoContext";

const defaultItems = [];

const defaultTodoState = {
  Items: defaultItems,
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const updatedItems = [action.item, ...state.Items];

      console.log(state.Items);
      return {
        Items: updatedItems,
      };
    }

    case "DELETE_ITEM": {
      const updatedItems = state.Items.filter((item) => item.id !== action.id);
      return {
        Items: updatedItems,
      };
    }

    case "MARK_COMPLETED": {
      const updatedItems = state.Items.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      return { Items: updatedItems };
    }


    case "DROP_ITEM":
      return {
        Items: action.items,
      };


    default:
      throw new Error();
    // break;
  }
};

const initializer = (initialValue = defaultItems) =>
  JSON.parse(localStorage.getItem("todoItems")) || initialValue;

const TodoContextProvider = ({ children }) => {
  const [todoState, dispatchTodoAction] = useReducer(
    todoReducer,
    defaultTodoState,
    initializer
  );
  const [mode, setMode] = useState(false);

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme === "dark") {
      setMode(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(todoState));
  }, [todoState]);

  const addItemHandler = (item) => {
    dispatchTodoAction({ type: "ADD_ITEM", item: item });
  };

  const deleteItemHandler = (id) => {
    dispatchTodoAction({ type: "DELETE_ITEM", id: id });
  };

  const markTodoCompleted = (id) => {
    dispatchTodoAction({ type: "MARK_COMPLETED", id: id });
  };


  const dropItemHandler = (items) => {
    dispatchTodoAction({ type: "DROP_ITEM", items: items });
  };

  const modeHandler = () => {
    setMode((prev) => !prev);
    if (!mode) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.removeItem("theme");
    }
  };

  const values = {
    items: todoState.Items,
    addItem: addItemHandler,
    deleteItem: deleteItemHandler,
    markTodoCompleted,
    mode: mode,
    modeHandler: modeHandler,
    dropItem: dropItemHandler,
  };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export default TodoContextProvider;
