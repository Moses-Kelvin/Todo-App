import React, { useContext} from "react";
import check from "../../images/icon-check.svg";
import cross from "../../images/icon-cross.svg";
import TodoContext from "../../store/TodoContext";
import classes from "../../styles/TodoList.module.css";

const TodoItem = ({ item, onDragStart, onDragEnter, onDragEnd }) => {
  const {
    deleteItem,
    mode,
    markTodoCompleted
  } = useContext(TodoContext);

  const gradient = "to right , hsl(192, 100%, 67%) , hsl(280, 87%, 65%)";

  const customStyle = {
    borderColor: mode ? "hsl(233, 14%, 35%)" : "#ccc",
    color: mode
      ? `${item.completed ? "hsl(234, 11%, 52%)" : "hsl(234, 39%, 85%)"}`
      : `${item.completed ? "hsl(233, 11%, 84%)" : "hsl(235, 19%, 35%)"}`,
    textDecoration: item.completed && "line-through",
  };

  const completedStyle = {
    border: item.completed && 0,
    backgroundImage: item.completed && `linear-gradient(${gradient})`,
  };

  return (
    <div
      className={classes["todo-list__item"]}
      style={customStyle}
      onDragStart={onDragStart}
      onDragEnter={onDragEnter}
      onDragEnd={onDragEnd}
      draggable
    >
      <div className={classes.item}>
        <div
          className={classes.check}
          style={completedStyle}
          onClick={()=> markTodoCompleted(item.id)}
        >
          {item.completed && <img src={check} alt="" />}
        </div>
        <div className={classes.content}>
          <h3> {item.title} </h3>
          <p>{item.description}</p>
        </div>
      </div>
      <div className={classes.cross} onClick={() => deleteItem(item.id)}>
        <img src={cross} alt="" />
      </div>
    </div>
  );
};

export default TodoItem;
