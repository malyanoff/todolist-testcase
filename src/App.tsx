import React from "react";
import TodoList from "./components/TodoList/TodoList";
import TodoForm from "./components/TodoForm/TodoForm";

function App() {
  return (
    <div className="app">
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
