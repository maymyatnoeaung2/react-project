import React, { useState } from "react";

const ShowMyName = () => {
  const [name, setName] = useState("");

  const handlerMay = () => {
    setName(name + "May");
  };

  const handlerMyat = () => {
    setName(name + "Myat");
  };
  const handlerNoe = () => {
    setName(name + "Noe");
  };
  const handlerAung = () => {
    setName(name + "Aung");
  };

  const handlerClear = () => {
    setName("");
  };

  return (
    <div className="text-center my-4">
      <h1 className="text-2xl font-bold">My Name is "{name}"</h1>
      <div className="my-2">
        <button
          onClick={handlerMay}
          className="mr-5 border bg-black text-white py-1 px-2 rounded hover:scale-95 duration-300 ease-in-out"
        >
          May
        </button>
        <button
          onClick={handlerMyat}
          className="mr-5 border bg-black text-white py-1 px-2 rounded hover:scale-95 duration-300 ease-in-out"
        >
          Myat
        </button>
        <button
          onClick={handlerNoe}
          className="mr-5 border bg-black text-white py-1 px-2 rounded hover:scale-95 duration-300 ease-in-out"
        >
          Noe
        </button>
        <button
          onClick={handlerAung}
          className="mr-5 border bg-black text-white py-1 px-2 rounded hover:scale-95 duration-300 ease-in-out"
        >
          Aung
        </button>
        <button
          onClick={handlerClear}
          className="mr-5 border bg-black text-white py-1 px-2 rounded hover:scale-95 duration-300 ease-in-out"
        >
    Clear
        </button>
      </div>
    </div>
  );
};

export default ShowMyName;
