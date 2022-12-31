import React from 'react'; 
import { useState } from 'react';

//we want to use React Hooks with functional comps ...
    //useState 
        //manages state in functional comp 
    //useEffect 
        //handle side effects 
        //similar to lifecycle effects in class comps 
    //useContext
        //manage global state 
    //useReducer 
        //didnt give descrip, has lectures I will get to 
    //useRef
        //''


function UseStateHook () {

    // syntax is 
    // const [state, state method to update state] = useState(initialize); 
    let [count, setCount] = useState(0); 

    console.log(count); 

    const clickHandler = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <button
                onClick = {clickHandler}
            >
                Click Me!
            </button>
            <h1>
                The count is {count} 
            </h1> 
            {
                count === 5 && setCount(count = 0)
            }
        </div>
    )
}

export default UseStateHook