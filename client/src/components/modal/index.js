import { useRef, useState } from "react";
import "./modal.css";

export default function Modal({ isModalOpen, setIsModalOpen }) {
  const [isWarning, setIsWarning] = useState(false);
  const newTodoRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newTodoRef.current.value);
    if (!newTodoRef.current.value) {
      setIsWarning(true);
      setTimeout(() => {
        setIsWarning(false);
      }, 2000);
      return;
    }
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section className="addTodoModal">
      <h3 className="modalTitle">Add New Todo</h3>
      <form className="modalForm" onSubmit={handleSubmit}>
        {isWarning && <span className="warning">Please enter a value</span>}
        <input type="text" ref={newTodoRef} />
        <button type="submit" className="addBtn">
          Add
        </button>
      </form>
    </section>
  );
}
