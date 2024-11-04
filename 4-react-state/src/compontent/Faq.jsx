import React, { useState } from "react";
import FaqSection from "./FaqSection";
import UseFaqStore from "../store/UseFaqStore";

const Faq = ({ faq: { id, question, answer, isOpen } }) => {
  const { toggleQuestion } = UseFaqStore();

  // const questions = [{ id: 1, question: "Hello", answer: "Hi" }];
  // const [open, setOpen] = useState(isOpen);

  const handleToggle = () => {
    // setOpen(!open);
    toggleQuestion(id);
  };

  return (
    <div className="">
      <div
        onClick={handleToggle}
        className="border border-black p-5 select-none active:scale-95 duration-300 ease-in-out flex justify-between cursor-pointer"
      >
        <h1 className="text-xl "> {question}</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`size-6 duration-700 ease-in-out ${
            isOpen === true ? "rotate-180" : ""
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      <p className={`bg-gray-200 p-5 ${isOpen === false ? "hidden" : ""}`}>
        {answer}
      </p>
    </div>
  );
};

export default Faq;
