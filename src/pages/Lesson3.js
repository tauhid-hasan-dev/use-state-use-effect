import React, { useState } from 'react';

const Lesson3 = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    return (
        <div>
            <h1>Name: {name}</h1>
            <h1>Email: {email}</h1>
            <label >Name:</label>
            <input type="text" onChange={(e)=> setName(e.target.value)} />
            <label >Email:</label>
            <input type="text"  onChange={(e)=> setEmail(e.target.value)}/>
        </div>
    );
};

export default Lesson3;