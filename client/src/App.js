import "./App.css";
import { useState } from "react";
import Dashboard from "./components/dashboard";
import Modal from "./components/modal";

const TODOS_URL = "http://localhost:8080/api/todos/";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleAddClick = () => {
    showModal();
  };

  const createTodo = async (body) => {
    try {
      const res = await fetch(TODOS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const todo = await res.json();
      console.log(todo);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main className={`mainWrapper`}>
      {isModalOpen && (
        <Modal
          createTodo={createTodo}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
      <div className={`appWrapper  ${isModalOpen && "blurBackground"}`}>
        <header className="appTitleContainer">
          <h1 className="appTitle">To-Do App</h1>
          <span className="appAddTodo" onClick={handleAddClick}>
            <i>+</i>
          </span>
        </header>
        <Dashboard createTodo={createTodo} />
      </div>
    </main>
  );
}

export default App;
