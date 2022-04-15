import "./singleTodo.css";
import { useState } from "react";
import EditModal from "../editModal";

export default function SingleTodo({ todo, updateTodo }) {
  const { completed, name } = todo;
  const [isCompleted, setIsCompleted] = useState(completed);
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(true);
  };

  if (isEdit) {
    return (
      <EditModal
        updateTodo={updateTodo}
        todo={todo}
        setIsEdit={setIsEdit}
        isCompleted={isCompleted}
        setIsCompleted={setIsCompleted}
      />
    );
  }

  return (
    <>
      <li className="todoItem">
        <h4 className="todoName">{name}</h4>
        <p className="todoOptions">
          <span className="todoEdit" onClick={handleEdit}>
            Edit
          </span>
          <span className="todoDelete">Delete</span>
          <span className="taskCompleteText">
            Completed:{" "}
            {isCompleted ? "Task completed" : "Task not completed yet"}
            {/* <input
              type="checkbox"
              className="todoCompleted"
              checked={isCompleted}
              onChange={handleChange}
            /> */}
          </span>
        </p>
      </li>
      <hr />
    </>
  );
}
