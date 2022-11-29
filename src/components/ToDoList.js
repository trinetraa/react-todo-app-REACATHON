import { React } from "react";
import Task from "./Task.js";

function ToDoList({ tasks, deleteTask }) {
  return (
    <div style={{ maxWidth: "320px", width: "320px", margin: "40px auto" }}>
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          task={task.taskText}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}
export default ToDoList;
