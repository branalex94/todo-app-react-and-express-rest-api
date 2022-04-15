import "./modal.css";
import { useRef, useState } from "react";

export default function Modal({ createTodo, isModalOpen, setIsModalOpen }) {
  const [isWarning, setIsWarning] = useState(false);
  const newTodoRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTodoRef.current.value) {
      setIsWarning(true);
      setTimeout(() => {
        setIsWarning(false);
      }, 2000);
      return;
    }
    const newTodo = newTodoRef.current.value;
    createTodo({ name: newTodo });
    setIsModalOpen(!isModalOpen);
  };

  const handleCancel = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section className="addTodoModal">
      <h3 className="modalTitle">Add New Todo</h3>
      <form className="modalForm" onSubmit={handleSubmit}>
        <label htmlFor="newTaskName" className="addTaskText">
          New task name:{" "}
        </label>
        {isWarning && <span className="warning">Please enter a value</span>}
        <input
          type="text"
          ref={newTodoRef}
          id="newTaskName"
          className="addTaskInput"
        />
        <div className="btnContainer">
          <button type="submit" className="addBtn">
            Add
          </button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </section>
  );
}
