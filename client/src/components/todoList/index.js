import "./todoList.css";
import { useEffect, useState } from "react";
import SingleTodo from "../singleTodo";
import Loading from "../loading";

const GET_TODOS_URL = "http://localhost:8080/api/todos/";

export default function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getTodos = async () => {
      setLoading(true);
      const res = await fetch(GET_TODOS_URL);
      const data = await res.json();
      setTodoList(data);
      setLoading(false);
    };
    getTodos();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <ul className="todoListContainer">
      {todoList.length < 1 ? (
        <h2 className="noTodos">There are no To-Dos pending</h2>
      ) : (
        todoList.map((todo) => <SingleTodo key={todo._id} todo={todo} />)
      )}
    </ul>
  );
}
