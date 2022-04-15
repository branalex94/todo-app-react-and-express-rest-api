import "./App.css";
import { useState } from "react";
import Dashboard from "./components/dashboard";
import Modal from "./components/modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleAddClick = () => {
    showModal();
  };

  return (
    <main className={`mainWrapper`}>
      {isModalOpen && (
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      )}
      <div className={`appWrapper  ${isModalOpen && "blurBackground"}`}>
        <header className="appTitleContainer">
          <h1 className="appTitle">To-Do App</h1>
          <span className="appAddTodo" onClick={handleAddClick}>
            <i>+</i>
          </span>
        </header>
        <Dashboard />
      </div>
    </main>
  );
}

export default App;
