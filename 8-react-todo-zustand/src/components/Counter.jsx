import React, { useState } from "react";
import useCounterStore from "../store/useCounterStore";

const Counter = () => {
  const { count, resetCount, increaseCount, decreaseCount } = useCounterStore();

  //   const[count,setCount] = useState(7)

  const haldleIncrement = () => {
    // setCount(count + 1);
    increaseCount(5);
  };

  const handleReset = () => {
    // setCount(0);
    resetCount(0);
  };

  const handleDecrement = () => {
    // setCount(count - 1);
    decreaseCount();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 shadow-md">
      <h1 className="text-4xl font-bold mb-6">React Counter App</h1>
      <div className="text-9xl font-bold mb-4">{count}</div>
      <div>
        <button
          onClick={haldleIncrement}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          +
        </button>
        <button
          onClick={handleReset}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Reset
        </button>
        <button
          onClick={handleDecrement}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded "
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
