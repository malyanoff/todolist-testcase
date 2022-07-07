import { observer } from "mobx-react-lite";
import React from "react";
import tdStorage from "../../store/TodoStore";
import styles from "./TodoForm.module.scss";

const TodoForm: React.FC = observer(() => {
  const validateInput = (title: string): boolean => {
    if (title === "" || title.length > 128) {
      return false;
    }

    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const title = formData.get("title")?.toString() || "";

    if (!validateInput(title)) {
      alert("Заголовок отсутствует или его длина превышает 128 символов.");
      return;
    }

    tdStorage.addTodo({
      id: Date.now(),
      title: title,
      completed: false,
    });

    // Очистка инпута после добавления todo.
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <p>Todo List App</p>
      <div className={styles.wrapper}>
        <input type="text" placeholder="Введите название задачи" name="title" />
        <button type="submit">Добавить задачу</button>
      </div>
    </form>
  );
});

export default TodoForm;
