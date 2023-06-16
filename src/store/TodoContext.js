import React from "react";

const TodoContext = React.createContext({
    items:[],
    addItem: (item) => {},
    deleteItem: (id)  => {},
    markTodoCompleted: (id) => {},
    mode: false,
    modeHandler: () => {},
    dropItem: (items) => {},
});

export default TodoContext;