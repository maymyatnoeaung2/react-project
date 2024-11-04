import React, { useState } from 'react'

const App = () => {
const [count,setCount] = useState(0)
const handlerIncrement = () => {
 setCount(count+1)
}

const handlerDecrement = () => {
  setCount(count-1)
}

  return (
    <div className='text-center'>
      <h1 className='text-9xl font-bold'>{count}</h1>
      <button onClick={handlerIncrement} className='mr-5 border bg-black text-white py-2 px-4 rounded hover:scale-95 duration-300 ease-in-out'>increment</button>
      <button onClick={handlerDecrement} className='border bg-black text-white py-2 px-4 rounded hover:scale-95 duration-300 ease-in-out'>decrement</button>

    </div>
  )
}

export default App
