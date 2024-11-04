import React, { useState } from "react";
import Faq from "./Faq";
import UseFaqStore from "../store/UseFaqStore";

const FaqSection = () => {

  const {questions} = UseFaqStore();

  // const [questions, setQuestions] = useState([
  //   {
  //     id: 1,
  //     question: "What is React?",
  //     answer: "React is a JavaScript library for building user interfaces.",
  //     isOpen: false,
  //   },
  //   {
  //     id: 2,
  //     question: "What is JSX?",
  //     answer:
  //       "JSX is a syntax extension for JavaScript that looks similar to XML or HTML.",
  //     isOpen: false,
  //   },
  //   {
  //     id: 3,
  //     question: "What are components?",
  //     answer:
  //       "Components are the building blocks of a React application's UI. These can be class-based or functional.",
  //     isOpen: false,
  //   },
  //   {
  //     id: 4,
  //     question: "What is state?",
  //     answer:
  //       "State is a built-in object that stores property values that belong to a component.",
  //     isOpen: false,
  //   },
  //   {
  //     id: 5,
  //     question: "What are props?",
  //     answer:
  //       "Props are short for properties. They are read-only attributes that are used to pass data from one component to another.",
  //     isOpen: false,
  //   },
  //   // { id: 6, question: "What is a hook?", answer: "Hooks are functions that let you use state and other React features without writing a class." },
  //   // { id: 7, question: "What is useEffect?", answer: "The useEffect hook lets you perform side effects in function components, such as data fetching or DOM manipulation." },
  //   // { id: 8, question: "What is useContext?", answer: "The useContext hook allows you to access context values directly without needing to use the Context.Consumer component." },
  //   // { id: 9, question: "What is a controlled component?", answer: "A controlled component is an input element whose value is controlled by React state." },
  //   // { id: 10, question: "What is the virtual DOM?", answer: "The virtual DOM is a lightweight copy of the actual DOM that React uses to optimize updates and rendering." },
  //   // { id: 11, question: "What is context in React?", answer: "Context provides a way to pass data through the component tree without having to pass props down manually at every level." }
  // ]);

  // const toggleQuestion = (id) => {
  //   setQuestions(
  //     questions.map((el) => 
  //       el.id === id ? {...el, isOpen: !el.isOpen } : {...el, isOpen: false }
  //     )
  //   );
  // };

  return (
    <div className="p-10 ">
      <h1 className="text-3xl mb-5  font-bold font-serif">
        Frequently Asked Questions
      </h1>
      <div className="">
        {questions.map((question) => (
          <Faq
            key={question.id}
            faq={question}
          
          />
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
