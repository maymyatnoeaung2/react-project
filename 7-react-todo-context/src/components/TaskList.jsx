import React, { useContext } from "react";
import Task from "./Task";
import TaskContext from "../context/TaskContext";

const TaskList = ({}) => {
  const {tasks,removeTask} =useContext(TaskContext);

  return (
    <div>
      <h3 className="font-bold text-xl mb-3">Task List (Total {tasks.length}, Done {0}) </h3>
      <div>
        {tasks.map((el) => (
          <Task key={el.id} job={el} removeTask={removeTask} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
