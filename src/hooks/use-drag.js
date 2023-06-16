import { useContext, useRef } from "react";

import TodoContext from "../store/TodoContext";

const useDrag = () => {
  const { dropItem, items } = useContext(TodoContext);

  const dragItem = useRef();
  const dragOverItem = useRef();

  const dragStart = (e, position) => {
    dragItem.current = position;
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
  };

  const drop = () => {
    const copyListItems = [...items];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    dropItem(copyListItems);
  };

  return [dragStart, dragEnter, drop];
};

export default useDrag;
