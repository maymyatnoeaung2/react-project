import React, { useState } from "react";
import Heading from "./components/Heading";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, task: "Learn HTML", isDone: true },
    { id: 2, task: "Learn CSS", isDone: false },
    { id: 3, task: "Learn JavaScript", isDone: true },
    { id: 4, task: "Build a portfolio", isDone: false },
    { id: 5, task: "Apply for jobs", isDone: true },
  ]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const doneTask = () => {
    setTasks(
      tasks.map((el) => {
        return {
          ...el,
          isDone: !el.isDone,
        };
        console.log(el);
      })
    );
  };

  return (
    <div className="py-5 px-10">
      <Heading />
      <CreateTask addTask={addTask} />
      <TaskList tasks={tasks} removeTask={removeTask} />
    </div>
  );
};

export default App;
