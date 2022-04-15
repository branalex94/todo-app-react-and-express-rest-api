import "./singleTodo.css";
import { useState } from "react";

export default function SingleTodo({ todo }) {
  const { completed, name } = todo;
  const [isCompleted, setIsCompleted] = useState(completed);

  return (
    <>
      <li className="todoItem">
        <h4 className="todoName">{name}</h4>
        <p className="todoOptions">
          <span className="todoEdit">Edit</span>
          <span className="todoDelete">Delete</span>
          <span>
            Completed:{" "}
            <input
              type="checkbox"
              className="todoCompleted"
              checked={isCompleted}
              onChange={() => setIsCompleted(!isCompleted)}
            />
          </span>
        </p>
      </li>
      <hr />
    </>
  );
}
