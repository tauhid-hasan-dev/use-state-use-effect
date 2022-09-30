import React, { useState, useEffect } from 'react';

const UseEffectAdvanced = () => {
    const [time, setTime] = useState(0);
    useEffect(()=>{
       const interval = setInterval(()=>{
            setTime(current => current + 1)
        },1000);

        return ()=>{
            clearInterval(interval)
        }
    },[])

    return (
        <div>
            <h1>{time}</h1>
        </div>
    );
};

export default UseEffectAdvanced;