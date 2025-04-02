import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

import "../styles/modal.css";

const Modal = ({ isOpen, onClose, onSave }) => {
  const [todoName, setTodoName] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = () => {
    if (!todoName.trim()) return;
    onSave(todoName, description);
    setTodoName("");
    setDescription("");
    onClose();
  };

  return (
    <div className={`modal-overlay ${isOpen ? "show" : ""}`}>
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          <IoClose size={24} />
        </button>
        <h2>Add Todo</h2>
        <input
          type="text"
          placeholder="Todo Name"
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="save-button" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default Modal;