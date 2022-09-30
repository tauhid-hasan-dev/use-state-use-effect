import React, { useState } from 'react';

const Explain = () => {
    const [toggle , setToggle] = useState(true);
    console.log(toggle);
    console.count('render')
    return (
        <div>
            {toggle && <h1>this is explain</h1>}
            <button onClick={()=> setToggle(!toggle)}>
                {toggle ? 'hide': 'show'}
                </button>
        </div>
    );
};

export default Explain;