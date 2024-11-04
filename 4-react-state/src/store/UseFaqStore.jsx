import { create } from "zustand";

const UseFaqStore = create((set) => ({
  questions: [
    {
      id: 1,
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
      isOpen: false,
    },
    {
      id: 2,
      question: "What is JSX?",
      answer:
        "JSX is a syntax extension for JavaScript that looks similar to XML or HTML.",
      isOpen: false,
    },
    {
      id: 3,
      question: "What are components?",
      answer:
        "Components are the building blocks of a React application's UI. These can be class-based or functional.",
      isOpen: false,
    },
    {
      id: 4,
      question: "What is state?",
      answer:
        "State is a built-in object that stores property values that belong to a component.",
      isOpen: false,
    },
    {
      id: 5,
      question: "What are props?",
      answer:
        "Props are short for properties. They are read-only attributes that are used to pass data from one component to another.",
      isOpen: false,
    },
  ],
  toggleQuestion: (toggleId) =>
    set((state) => ({
      questions: state.questions.map((el) =>
        el.id === toggleId
          ? { ...el, isOpen: !el.isOpen }
          : { ...el, isOpen: false }
      ),
    })),
}));

export default UseFaqStore;
