import React, { useContext } from "react";

import TodoContext from "../../store/TodoContext";

import classes from '../../styles/TodoFooter.module.css';

const TodoFooter = () => {


    return (
        <footer>
            <p>Drag and drop to reorder list</p>
        </footer>
    )
}

export default TodoFooter;