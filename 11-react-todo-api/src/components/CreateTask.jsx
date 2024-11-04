import React, { useState } from "react";

const CreateTask = ({ addTask, sending }) => {
  const [job, setTask] = useState("");

  const handelOnChange = (e) => {
    setTask(e.target.value);
  };

  const handelAddTaskBtn = () => {
  if(job.trim().length > 0){
    const newTask = {
      task: job,
      isDone: false,
    };
    addTask(newTask);
    setTask("");
  }
  };

  return (
    <div className="flex mb-3 items-center">
      <input
        type="text"
        className="flex-grow border-2 border-black py-2 px-4 rounded-l-lg"
        value={job}
        onChange={handelOnChange}
        placeholder="Write your new task here..."
      />
      <button
        className="border border-black py-2 px-2 rounded-r-lg bg-black text-white disabled:opacity-70"
        onClick={handelAddTaskBtn}
        disabled={sending}
      >
        {sending ? (
          // Default values shown
          <l-dot-spinner size="20" speed="0.9" color="white"></l-dot-spinner>
        ) : (
          "Add Task"
        )}
      </button>
    </div>
  );
};

export default CreateTask;
