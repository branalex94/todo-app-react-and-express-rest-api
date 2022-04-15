import "./dashboard.css";
import TodoList from "../todoList";

export default function Dashboard({ createTodo }) {
  return (
    <main className="dashboard">
      <div className="todoListTitle">
        <h2>To-Do List</h2>
      </div>
      <TodoList createTodo={createTodo} />
    </main>
  );
}
