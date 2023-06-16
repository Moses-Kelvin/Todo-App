import React from "react";
import TodoHeader from "./Header/TodoHeader";
import TodoList from "./TodoBody/TodoList";

const App = () => {

    return (
        <div className="todo">
            <TodoHeader />
            <TodoList />
        </div>
    )
}

export default App;