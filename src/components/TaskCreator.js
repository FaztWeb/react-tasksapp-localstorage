import { useState } from "react";

export const TaskCreator = ({ createNewTask }) => {
  const [newTaskName, setNewTaskName] = useState("");

  const handleSubmit = (e) => {
    if (newTaskName.trim() === "") {
      alert("Por favor ingrese el nombre de su tarea");
      return;
    }

    e.preventDefault();
    createNewTask(newTaskName);
    setNewTaskName("");
  };

  return (
    <form className="my-2 row" onSubmit={handleSubmit}>
      <div className="col-9">
        <input
          type="text"
          className="form-control"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          placeholder="Ingresa tú tarea..."
          autoFocus
        />
      </div>
      <div className="col-3 p-0 d-flex align-items-center">
        <button className="btn btn-primary btn-sm" type="submit">
          Guardar
        </button>
      </div>
    </form>
  );
};
