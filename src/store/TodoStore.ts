import { makeAutoObservable } from "mobx";
import { ITodo } from "../types/Todo";

export interface ITodoStore {
  todos: ITodo[];
  addTodo(todo:ITodo):void
  removeTodo(id:number):void
  completeTodo(id:number):void
}

class TodoStore implements ITodoStore {
  todos:ITodo[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo:ITodo) {
    this.todos.push(todo);
  }

  removeTodo(id:number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  completeTodo(id:number) {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  }
}

export default new TodoStore();
