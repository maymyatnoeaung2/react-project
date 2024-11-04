import React, { useContext } from "react";
import Task from "./Task";
import TaskContext from "../context/TaskContext";
import useTaskStore from "../store/useTaskStore";

const TaskList = () => {
  const {tasks} = useTaskStore()

  // const {tasks,removeTask} =useContext(TaskContext);

  return (
    <div>
      <h3 className="font-bold text-xl mb-3">Task List (Total {tasks.length}, Done {tasks.filter((el)=>el.isDone).length}) </h3>
      <div>
        {tasks.map((el) => (
          <Task key={el.id} job={el} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
