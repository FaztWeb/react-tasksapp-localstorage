import { useState } from "react";

export const TaskCreator = ({ createNewTask }) => {
  const [newTaskName, setNewTaskName] = useState("");

  const updateNewTaskValue = ({ target: { value } }) => setNewTaskName(value);

  const handleSubmit = (e) => {
    if (newTaskName.trim() === "") {
      alert("Please enter a task name");
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
          onChange={updateNewTaskValue}
          placeholder="Enter a new task..."
          autoFocus
        />
      </div>
    <div className="col-3 p-0 d-flex align-items-center">

      <button className="btn btn-primary btn-sm">Save Task</button>
    </div>
    </form>
  );
};
