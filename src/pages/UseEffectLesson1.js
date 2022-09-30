import React, { useEffect, useState } from 'react';

const UseEffectLesson1 = () => {
    const [post, setPost] = useState({});
    const [random, setRandom] = useState(1);
    const loadPost = async(random) =>{
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${random}`);
        const data = await res.json();
       setPost(data)
     }

    const handlePost =()=>{
        const randomNumber =Math.ceil(Math.random() * 10)
        setRandom(randomNumber);
    }

    useEffect(()=>{
        loadPost(random)
    },[random]);

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <button onClick={()=> handlePost()}>New Post</button>
        </div>
    );
};

export default UseEffectLesson1;