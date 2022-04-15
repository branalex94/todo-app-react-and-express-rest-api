import "./editModal.css";
import { useRef } from "react";

const TODOS_URL = "http://localhost:8080/api/todos/";

export default function EditModal({
  setIsEdit,
  todo,
  isCompleted,
  setIsCompleted,
}) {
  const newTaskNameRef = useRef();
  const handleClick = () => {
    setIsEdit(false);
  };

  const updateTodo = async (toUpdate, id) => {
    try {
      const res = await fetch(TODOS_URL + id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(toUpdate),
      });
      const data = await res.json();
      console.log(data);
      return;
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = () => {
    const newName = newTaskNameRef.current.value || todo.name;
    updateTodo({ name: newName, completed: isCompleted }, todo._id);
    setIsEdit(false);
  };

  return (
    <section className="editModal">
      <h3 className="modalTitle">{todo.name}</h3>
      <label htmlFor="newTaskNameInput">Set a new task name</label>
      <input
        type="text"
        className="newTaskNameInput"
        id="newTaskNameInput"
        ref={newTaskNameRef}
      />
      <label htmlFor="completed">Completed task?</label>
      <input
        type="checkbox"
        checked={isCompleted}
        id="completed"
        onChange={() => setIsCompleted(!isCompleted)}
      />
      <div className="btnContainer">
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleClick}>Cancel</button>
      </div>
    </section>
  );
}
