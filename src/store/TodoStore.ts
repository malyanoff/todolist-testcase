import { makeAutoObservable } from "mobx";
import { ITodo } from "../types/Todo";

export interface ITodoStore {
  todos: ITodo[];
}

class TodoStore implements ITodoStore {
  todos: ITodo[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo: ITodo) {
    this.todos.push(todo);
    console.log("add", this.todos);
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    console.log("remove", id);
  }

  completeTodo(id: number) {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    console.log("complete", id);
  }
}

export default new TodoStore();
