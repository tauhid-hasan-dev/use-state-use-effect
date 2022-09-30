import React, { useState } from 'react';

const Lession1 = () => {
    const [count , setCount] = useState(0);
    const delay =()=>{
        setTimeout(()=>{
            setCount(current => current+1)
        },3000)
    }
    setTimeout(()=>{

    },2000)
    
    return (
        <div>
            <h1>{count}</h1>
            <button style={{
                margin:10
                }} onClick={()=> setCount(current => current + 1)}>Increment</button>
            <button style={{
                margin:10
                }} onClick={()=> setCount(current => current - 1)}>Decrement</button>
            <button onClick={delay}>Delay</button>
        </div>
    );
};

export default Lession1;