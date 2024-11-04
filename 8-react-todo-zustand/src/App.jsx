import React, { useState } from "react";
import Heading from "./components/Heading";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";
import TaskProvider from "./context/TaskProvider";
import Counter from "./components/Counter";

const App = () => {
  return (
    // <TaskProvider>
        <div className="py-5 px-10">
        <Heading />
        <CreateTask  />
        <TaskList/>
      </div>
    // </TaskProvider>
    // <Counter/>
  );
};

export default App;
