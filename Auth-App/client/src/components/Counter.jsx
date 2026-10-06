import React from 'react'
import { useState, useEffect, useRef} from 'react';
const Counter = () => {
    // let count=0;
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("");
    const renderCount=useRef(0);
    useEffect(()=>{
        renderCount.current=renderCount.current+1;
    })
    useEffect(()=>{
        setMessage(`Updated Count: ${count}`);
    },[count])

    function increment(){
        setCount(count + 1);
        Console.log(count);
    }
    const decrement=()=>{
        setCount(count - 1);
        Console.log(count);
    }
  return (
    <div>
        <h1>Counter App</h1>
        <div className='counter'>
      <button className="btn" onClick={increment}>+</button>
      <div className='count'>{count}</div>
      <button className="btn" onClick={decrement}>-</button>
    </div>
    <h2>{message}</h2>
    <h3>Render Count:{renderCount.current}</h3>
    </div>
  )
}

export default Counter
