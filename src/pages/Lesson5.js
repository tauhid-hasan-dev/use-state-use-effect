import React, { useState } from 'react';

const Lesson5 = () => {
    const [user, setUser] = useState({
        name: "Tauhid",
        email: "Email"
    });

    const handleChange = (event) =>{
        console.log(event)
        setUser((current)=>{
            return {...current, [event.target.name]:event.target.value }
        })
    }
    
    return (
        <div>
            <h1>Name: {user.name}</h1>
            <h1>Email: {user.email}</h1>


            <label >Name:</label>
            <input 
                type="text" 
                name = "name"
                onChange={(e)=> handleChange(e)} />


            <label >Email:</label>
            <input 
                type="text"
                name = "email"  
                onChange={(e)=> handleChange(e)}/>
        </div>
    );
};

export default Lesson5;