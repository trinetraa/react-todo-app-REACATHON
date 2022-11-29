import { UsbOutlined } from "@material-ui/icons";
import { React, useState } from "react";
import uuid from "uuid";

function AddTask({ submitTask }) {
  const [task, setTask] = useState({
    id: "",
    taskText: ""
  });

  function handleInput(e) {
    setTask({ ...task, taskText: e.target.value });
  }

  //LATER
  function handleSubmit(e) {
    e.preventDefault();
    //prevents default action of form > Won't refresh/reload the page when submit clicked
    if (task.taskText.trim()) {
      submitTask({ ...task, id: uuid.v4() });
      //calling submit func and also passing a unique id
      setTask({ ...task, taskText: "" });
      //resetting state of addTask comp so previously added text doesnt keep showing up
      //in the input
      //can console.log the task in app.js to show how it works
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={task.taskText}
          onChange={handleInput}
          style={{ width: "300px", borderRadius: "5px", marginRight: "15px" }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "#61dafb",
            borderRadius: "5px",
            margin: "10px auto"
          }}
        >
          Add Task
        </button>
      </form>
    </div>
  );
}

export default AddTask;
