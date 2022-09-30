import React, { useEffect, useState } from 'react';

const Lesson2 = () => {
    const [post, setPost] = useState({});
    console.log(post);

 const loadPost = async() =>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
    const data = await res.json();
   setPost(data)
    
 }
    useEffect(()=>{
      loadPost()
    },[])
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
};

export default Lesson2;