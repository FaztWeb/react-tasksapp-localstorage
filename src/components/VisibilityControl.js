export const VisibilityControl = ({
  isChecked,
  callback,
  description,
  cleanTasks,
}) => {
  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete all ${description}?`)) {
      cleanTasks();
    }
  };

  return (
    <div className="form-check form-switch d-flex justify-content-between">
      <input
        type="checkbox"
        className="form-check-input"
        checked={isChecked}
        onChange={(e) => callback(e.target.checked)}
      />
      <label htmlFor="form-check-label">Show {description}</label>
      <button className="btn btn-danger btn-sm" onClick={handleDelete}>
        Clear
      </button>
    </div>
  );
};
