import React, { useState } from "react";

const CreateTask = ({ addTask }) => {
  const [job, setTask] = useState("");

  const handelOnChange = (e) => {
    setTask(e.target.value);
  };

  const handelAddTaskBtn = () => {
    const newTask = {
      id: Date.now(),
      task: job,
      isDone: false,
    };
    addTask(newTask);
    setTask("");
  };

  return (
    <div className="flex mb-3">
      <input
        type="text"
        className="flex-grow border-2 border-black py-2 px-4 rounded-l-lg"
        value={job}
        onChange={handelOnChange}
        placeholder="Write your new task here..."
      />
      <button
        className="border border-black py-2 px-2 rounded-r-lg bg-black text-white"
        onClick={handelAddTaskBtn}
      >
        Add Task
      </button>
    </div>
  );
};

export default CreateTask;
