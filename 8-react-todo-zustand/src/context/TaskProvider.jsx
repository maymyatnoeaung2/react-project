import React, { useState } from "react";
import TaskContext from "./TaskContext";

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    { id: 1, task: "Learn HTML", isDone: false },
    { id: 2, task: "Learn CSS", isDone: false },
    { id: 3, task: "Learn JavaScript", isDone: false },
    { id: 4, task: "Build a portfolio", isDone: false },
    { id: 5, task: "Apply for jobs", isDone: false },
  ]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

const doneTask = (id) => {
    setTasks(tasks.map((el) => el.id === id ?{...el,isDone:!el.isDone}:el))
}
 

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask, doneTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;



//   const doneTask = (id) => {
//     setTasks(
//       tasks.map((el) => {
//         return {
//       (el.id === id ?{...el,idDone:!el.isDone}:el})
//         }
//       })
//     );
//   };