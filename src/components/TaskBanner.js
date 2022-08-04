export const TaskBanner = ({ userName, taskItems }) => (
  <h4
    className="text-white text-center p-4 mb-5 fw-bold"
    style={{ background: "#303030" }}
  >
    {userName}'s Todo App{" "}
    <span className="text-info">
      ({taskItems.filter((t) => !t.done).length} tarea por completar)
    </span>
  </h4>
);
