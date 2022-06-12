import { useState, useEffect } from "react";
import { TaskBanner } from "./components/TaskBanner";
import { TaskRow } from "./components/TaskRow";
import { TaskCreator } from "./components/TaskCreator";
import { VisibilityControl } from "./components/VisibilityControl";

function App() {
  const [userName, setUserName] = useState("Fazt");
  const [taskItems, setTaskItems] = useState([
    { name: "Task One", done: false },
    { name: "Task Two", done: false },
    { name: "Task Three", done: true },
    { name: "Task Four", done: false },
  ]);
  const [showCompleted, setshowCompleted] = useState(false);

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTaskItems(JSON.parse(data));
    } else {
      setUserName("fazt");
      setTaskItems([
        { name: "Task One", done: false },
        { name: "Task Two", done: false },
        { name: "Task Three", done: true },
        { name: "Task Four", done: false },
      ]);
      setshowCompleted(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItems));
  }, [taskItems]);

  const createNewTask = (taskName) => {
    if (!taskItems.find((t) => t.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }]);
    }
  };

  const toggleTask = (task) =>
    setTaskItems(
      taskItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );

  const taskTableRows = (doneValue) =>
    taskItems
      .filter((task) => task.done === doneValue)
      .map((task) => (
        <TaskRow key={task.name} task={task} toggleTask={toggleTask} />
      ));

  const cleanTasks = () => {
    setTaskItems(taskItems.filter((task) => !task.done));
    setshowCompleted(false);
  };

  return (
    <div className="bg-dark vh-100 text-white">
      {/* Navbar with total */}
      <TaskBanner userName={userName} taskItems={taskItems} />

      {/* Main Container */}
      <div className="container">
        <div className="col-md-4 offset-md-4">
          {/* Task Form */}
          <TaskCreator createNewTask={createNewTask} />

          {/* Pendint tasks table */}
          <table className="table table-striped table-bordered table-dark border-secondary">
            <thead>
              <tr className="table-primary">
                <th>Task</th>
              </tr>
            </thead>
            <tbody>{taskTableRows(false)}</tbody>
          </table>

          <div className="bg-primary text-white text-center p-2 border-secondary">
            <VisibilityControl
              description="Completed Tasks"
              isChecked={showCompleted}
              callback={(checked) => setshowCompleted(checked)}
              cleanTasks={cleanTasks}
            />
          </div>

          {/* table */}
          {showCompleted && (
            <table className="table table-striped table-bordered table-dark border-secondary">
              <thead>
                <tr>
                  <th>Completed Tasks</th>
                </tr>
              </thead>
              <tbody>{taskTableRows(true)}</tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
