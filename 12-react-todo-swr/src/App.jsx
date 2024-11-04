import React, { useState } from "react";
import Heading from "./components/Heading";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";
import useSWR, { mutate, useSWRConfig } from "swr";
import { trefoil } from "ldrs";

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
    "http://localhost:5000/tasks",
    fetcher
  );
  const { mutate } = useSWRConfig()


  trefoil.register();

  if(isLoading===true){
return  "loading"
  }


  const addTask = async (newTask) => {


    const response = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newTask),
    });

    const data = await response.json()
    mutate("http://localhost:5000/tasks")
    console.log(data);
    // setTasks([...tasks, newTask]);
  };

  const removeTask =async (id) => {
    // setTasks(data.filter((task) => task.id !== id));
const response = await fetch(`http://localhost:5000/tasks/${id}`,{
  method:"DELETE"
})
mutate("http://localhost:5000/tasks")
  };

  const doneTask =async (currentState,id) => {
    // setTasks(
    //   data.map((el) => {
    //     return {
    //       ...el,
    //       isDone: !el.isDone,
    //     };
    //   })
    // );

    const response = await fetch(`http://localhost:5000/tasks/${id}`,{
      method:"PATCH",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify({isDone:!currentState})
    })
    mutate("http://localhost:5000/tasks")
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
        <TaskList tasks={data} removeTask={removeTask} doneTask={doneTask} isLoading={isLoading}/>
      )}
    </div>
  );
};

export default App;
