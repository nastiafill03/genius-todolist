import "./index.css";
import React from "react";
import TodoList from "./TodoList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, name: "Buy bread" },
        { id: 2, name: "Learn English" },
        { id: 3, name: "Go to the dance class" },
      ],
      input: "",
    };
  }

  onChangeHandler = (e) => {
    this.setState({ input: e.target.value });
  };

  addTodo = () => {
    const value = this.state.input.trim();
    if (!value) return;

    const newTodo = {
      id: Date.now(),
      name: value,
    };

    this.setState((prevState) => ({
      todos: [...prevState.todos, newTodo],
      input: "",
    }));
  };

  deleteTodo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== id),
    }));
  };

  onEnterHandler = (e) => {
    if (e.key === "Enter") {
      this.addTodo();
    }
  };

  render() {
    return (
      <div>
        <h1>ToDo List</h1>
        <h2>{this.state.todos.length}</h2>
        <input
          value={this.state.input}
          onChange={this.onChangeHandler}
          onKeyDown={this.onEnterHandler}
          placeholder="Enter todo..."
        />

        <button onClick={this.addTodo}>Add Todo</button>

        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
