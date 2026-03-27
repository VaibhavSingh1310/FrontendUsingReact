import { useState } from "react";
export default function ToDo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    const taskValue = task.trim();
    if (taskValue === "") {
      alert("Cannot add empty task");
      return;
    }
    setTasks([...tasks, taskValue]);
    setTask("");
  }
  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }
  return (
    <>
      <h1>To Do List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            <span>{t}</span>
            <button onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}