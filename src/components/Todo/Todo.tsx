import { observer } from "mobx-react-lite";
import React from "react";
import todo from "../../store/TodoStore";
import { ITodo } from "../../types/Todo";
import styles from "./Todo.module.scss";

const Todo: React.FC<ITodo> = observer(({ id, title, completed }) => {
  return (
    <div key={id} className={styles.todo}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => todo.completeTodo(id)}
      />
      <p>{title}</p>
      <button onClick={() => todo.removeTodo(id)}>удалить</button>
    </div>
  );
});

export default Todo;
