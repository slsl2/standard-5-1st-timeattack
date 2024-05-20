import React from "react";
import { useState } from "react";
import TodoForm from "./components/TodoForm.jsx";
import TodoList from "./components/TodoList.jsx";

export default function App() {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <h1>투두리스트 타임어택</h1>
      <div>
        <TodoForm setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </>
  );
}
