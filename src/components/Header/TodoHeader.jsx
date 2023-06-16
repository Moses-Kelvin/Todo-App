import React, { useContext } from "react";

import Input from "./Input";
import classes from '../../styles/TodoHeader.module.css';

import moon from '../../images/icon-moon.svg';
import sun from '../../images/icon-sun.svg';
import TodoContext from "../../store/TodoContext";


const TodoHeader = () => {

    const { mode, modeHandler } = useContext(TodoContext);

    const bodyMode = document.querySelector('body');
    bodyMode.style.backgroundColor = mode ? "hsl(235, 21%, 11%)" : "white";

    return (
        <div className={`${classes['todo-header']} ${mode ? classes.dark : classes.light}`} >
            <div className={classes["todo-header__title"]}>
                <h1>TODO</h1>
                <img src={mode ? sun : moon} alt="" onClick={modeHandler} />
            </div>
            <Input />
        </div>
    )
}

export default TodoHeader;