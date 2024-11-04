import React, { useEffect, useState } from "react";
import Heading from "./components/Heading";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";
import { dotSpinner } from "ldrs";
import SkeletonLoader from "./components/SkeletonLoader";

const App = () => {
  dotSpinner.register();

  const [tasks, setTasks] = useState([]);
  const [taskLoading, setTaskLoading] = useState(false);
  const [sending, setSending] = useState(false);
  const [remove, setRemove] = useState(false);


  const addTask = async (newTask) => {
    setSending(true);
    const response = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });

    const data = await response.json();

    setTasks([...tasks, data]);
    setSending(false);
  };

  const removeTask = async (id) => {
    setRemove(true)
    const response = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });

    const data = await response.json();

    setTasks(tasks.filter((task) => task.id !== id));
    setRemove(false)
  };

  const doneTask = async (id, currentState) => {
    const response = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isDone: !currentState }),
    });

    const data = await response.json();
    console.log(data);

    setTasks(tasks.map((task) => (task.id === id ? data : task)));
  };

  const fetchTask = async () => {
    setTaskLoading(true);
    const response = await fetch("http://localhost:5000/tasks");
    const data = await response.json();
    setTasks(data);
    setTaskLoading(false);
  };

  useEffect(() => {
    fetchTask();
  }, []);

  return (
    <div className="py-5 px-10">
      <Heading />

      <CreateTask sending={sending} addTask={addTask} />
      <TaskList tasks={tasks} removeTask={removeTask} doneTask={doneTask} remove={remove}/>
      {/* {taskLoading ? "Loading..." : ""} */}
      {taskLoading && <SkeletonLoader />}
    </div>
  );
};

export default App;
