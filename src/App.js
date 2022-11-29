import "./styles.css";
import { React, useState } from "react";
import ToDoList from "./components/ToDoList";
import AddTask from "./components/AddTask";

export default function App() {
  const [tasks, setTasks] = useState([]);

  function submitTask(toDo) {
    setTasks([toDo, ...tasks]);
    console.log(tasks);
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => id !== task.id));
  }

  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: "#61dafb" }}>
        <h3>React To Do App</h3>
      </header>
      <AddTask submitTask={submitTask} />
      <ToDoList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}
