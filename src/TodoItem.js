function TodoItem({ todo, deleteTodo }) {
  return (
    <li>
      {todo.name} <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
