import { create } from "zustand";

const useTaskStore = create((set) => ({
  tasks: [
    { id: 1, task: "Learn HTML", isDone: false },
    { id: 2, task: "Learn CSS", isDone: false },
    { id: 3, task: "Learn JavaScript", isDone: false },
    { id: 4, task: "Build a portfolio", isDone: false },
    { id: 5, task: "Apply for jobs", isDone: false },
  ],

  addTask: (newTask) => set((state) => ({ tasks: [...state.tasks, newTask] })),

  removeTask: (removeId) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== removeId),
    })),

  doneTask: (doneId) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === doneId ? { ...task, isDone: !task.isDone } : { ...task }
      ),
    })),
}));

export default useTaskStore;
