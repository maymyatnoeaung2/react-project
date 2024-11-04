import React from "react";
import Task from "./Task";

const TaskList = ({tasks,removeTask,doneTask,remove}) => {

  return (
    <div>
      <h3 className="font-bold text-xl mb-3">Task List (Total {tasks.length}, Done {tasks.filter((el) => el.isDone).length}) </h3>
      <div>
        {tasks.map((el) => (
          <Task key={el.id} job={el} removeTask={removeTask} doneTask={doneTask} remove = {remove}/>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
