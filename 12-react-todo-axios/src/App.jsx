import React, { useState } from "react";
import Heading from "./components/Heading";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";
import useSWR, { mutate, useSWRConfig } from "swr";
import { trefoil } from "ldrs";
import axios from "axios";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const App = () => {
  // const [tasks, setTasks] = useState([
  //   { id: 1, task: "Learn HTML", isDone: true },
  //   { id: 2, task: "Learn CSS", isDone: false },
  //   { id: 3, task: "Learn JavaScript", isDone: true },
  //   { id: 4, task: "Build a portfolio", isDone: false },
  //   { id: 5, task: "Apply for jobs", isDone: true },
  // ]);


  const { data, error, isLoading } = useSWR(
    `${import.meta.env.VITE_BASE_URL}`,
    fetcher
  );

  console.log(import.meta.env.VITE_BASE_URL);

  const { mutate } = useSWRConfig();
  // console.log(data);
  // trefoil.register();

  const todoApi = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}`,
    headers: {
      "Content-Type": "application/json",
    },
  });

  const addTask = async (newTask) => {
    // setTasks([...tasks, newTask]);

    // const response = await fetch("import.meta.env.VITE_BASE_URL", {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify(newTask),
    // });

    // const data = await response.json()
    // console.log(data);

    await todoApi.post("/", newTask, {
   
    });

    mutate(`${import.meta.env.VITE_BASE_URL}`);
  };

  const removeTask = async (id) => {
    // setTasks(tasks.filter((task) => task.id !== id));

    await todoApi.delete(`/${id}`);

    mutate(`${import.meta.env.VITE_BASE_URL}`);
  };

  const doneTask = async (id, isDone) => {
    // setTasks(
    //   data.map((el) => {
    //     return {
    //       ...el,
    //       isDone: !el.isDone,
    //     };
    //     console.log(el);
    //   })
    // );
    await todoApi.patch(
      `/${id}`,
      { isDone: !isDone },
    );
    mutate(`${import.meta.env.VITE_BASE_URL}`);
  };

  return (
    <div className="py-5 px-10">
      <Heading />
      <CreateTask addTask={addTask} />
      {isLoading ? ( // Default values shown
        <div className="mt-20 flex items-center justify-center">
          <l-trefoil
            size="150"
            stroke="6"
            stroke-length="0.15"
            bg-opacity="0.1"
            speed="1.4"
            color="black"
          ></l-trefoil>
        </div>
      ) : (
        <TaskList tasks={data} removeTask={removeTask} doneTask={doneTask} />
      )}
    </div>
  );
};

export default App;
