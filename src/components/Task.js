import { React } from "react";

function Task({ task, id, deleteTask }) {
  function handleDelete() {
    deleteTask(id);
  }

  return (
    <div
      style={{
        width: "100%",
        wordWrap: "break-word",
        textAlign: "Left",
        margin: "10px"
      }}
    >
      <span style={{ width: "90%" }}>
        <b>{task}</b>
      </span>
      <button
        onClick={handleDelete}
        style={{
          float: "right",
          backgroundColor: "#61dafb"
        }}
      >
        X
      </button>
    </div>
  );
}

export default Task;
