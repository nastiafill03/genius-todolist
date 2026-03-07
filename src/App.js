import "./index.css";
import { useState } from "react";
import TodoList from "./TodoList";

function App() {

  const [todos, setTodos] = useState([
    {id: 1, name: "Buy bread"},
    {id: 2, name: "Learn English"},
    {id: 3, name: "Go to the dance class"}
  ]);
  const [input, setInput] = useState("");
  
  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const addTodo = () => {
    const value = input.trim();
    if (!value) return;

    const newTodo = {
      id: Date.now(),
      name: value
    };
  
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setInput("");
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const onEnterHandler = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  return (
    <div>
      <h1>ToDo List</h1>
      <h2>{todos.length}</h2>
      <input 
      value={input}
      onChange={onChangeHandler}
      onKeyDown={onEnterHandler}
      />

      <button onClick={addTodo}>Add Todo</button>

      <TodoList 
      todos={todos}
      deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
