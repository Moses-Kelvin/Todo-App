import React, { useContext,  Fragment } from "react";
import TodoContext from "../../store/TodoContext";
import useDrag from '../../hooks/use-drag';
import TodoItem from "./TodoItem";

import TodoFooter from "../Footer/TodoFooter";

import classes from '../../styles/TodoList.module.css';

const TodoList = () => {

    const { items, mode} = useContext(TodoContext);

    const [dragStart, dragEnter, drop] = useDrag();

    const customStyle = {
        backgroundColor: mode ? "hsl(235, 24%, 19%)" : "#fff"
    };



    return (
        <Fragment>
            <div className={classes['my-todo']}>
                <div className={classes['todo-list']} style={customStyle}>
                    { items.map((item, index) => (
                                    <TodoItem
                                        key={index}
                                        item={item}
                                        onDragStart={(e) => dragStart(e, index)}
                                        onDragEnter={(e) => dragEnter(e, index)}
                                        onDragEnd={drop}
                                    />))
                    }
                
                </div>
            </div>
            <TodoFooter />
        </Fragment>
    )
}

export default TodoList;