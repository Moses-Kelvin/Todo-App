import React, { useContext, useState, useEffect } from "react";

import TodoContext from "../../store/TodoContext";

import classes from '../../styles/TodoListFooter.module.css';

const TodoListFooter = ({onFilterAll, onFilterActive, onFilterCompleted}) => {

    const [bump, setBump] = useState(false);

    const {mode, items, completed, clearCompleted} = useContext(TodoContext);
    const itemsLeft = items.length - completed.length;

    const customStyle = {
        color : mode ? "hsl(234, 39%, 85%)" : "hsl(235, 19%, 35%)"
    }

    useEffect(()=> {
        if (itemsLeft.length === 0) {
            return;
        }
        setBump(true);

        const timer = setTimeout(()=> {
            setBump(false);
        }, 300);
        return () => {
            clearTimeout(timer);
        };
        
    }, [itemsLeft]);

    return (
        <div className={classes["todo-list__footer"]} style={customStyle}>
            <p className={`${classes.itemsLeft} ${bump && classes.bump}`} > 
            {itemsLeft === 0 ? "no item left" : itemsLeft === 1 ? "1 item left" : itemsLeft + " items left"}
            </p>
            <div className={classes.state}>
                <p className={`${classes.action} ${classes.all}`} onClick={onFilterAll} >All</p>
                <p className={`${classes.action} ${classes.active}`} onClick={onFilterActive} >Active</p>
                <p className={`${classes.action} ${classes.completed}`} onClick={onFilterCompleted} >Completed</p>
            </div>
            <p className={classes.action} onClick={clearCompleted} >Clear Completed</p>
        </div>
    )
}

export default TodoListFooter;