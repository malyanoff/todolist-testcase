import { observer } from "mobx-react-lite";
import React from "react";
import Todo from "../Todo/Todo";
import { ITodo } from "../../types/Todo";
import todo from "../../store/TodoStore";
import styles from './TodoList.module.scss'

// interface ITodoListProps {
//   todoList: ITodo[];
// }

const TodoList: React.FC = observer(() => {
  return (
    <div className={styles.list}>
      {todo.todos.map((todo: ITodo) => {
        const { id, title, completed } = todo;
        return <Todo id={id} title={title} completed={completed} />;
      })}

      {todo.todos.length === 0 && <p>Нет текущих задач.</p>}
    </div>
  );
});

export default TodoList;
