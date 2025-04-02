import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import Modal from "./Modal";

import "../styles/addTodo.css";

const AddTodo = ({ addTodo }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <button className="add-button" onClick={() => setModalOpen(true)}>
        <FaPlus /> Add Todo
      </button>
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setModalOpen(false)} 
        onSave={addTodo} 
      />
    </div>
  );
};

export default AddTodo;
