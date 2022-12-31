import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


//useEffect is intended to handle any kind of side effects in functional comps 
    //'imperitive function that can return a clean up function' 



function UseEffectHook () {

    let [count, setCount] = useState(0); 

    const clickHandler = () => {
        setCount( count + 1 ); 
    }

    //useEffect syntax ... 
    //call useEffect, accepts arrow function as first param 
    //everytime I click the button use effect gets called
    //therefore, everytime the browser renders something, this effect would be hit ... 
    //bc you prob wouldnt want this to be hit everytime something happened, you can control iterations 
        //this is the second param after the arrow function 
    //you can have multiple useEffects in one comp, would want to be hit at diff actions 
    useEffect ( () => {
        console.log('inside useEffect() ...');
    }, []) //an empty array here will run only once every initial render 

    //so lets make one at a functional interval 
    //there is a difference between calling the update method setFlag and useFlag  ... 
        //what is it?? 
     let [flag, setFlag] = useState(false);
     
     useEffect ( () => {
        //when count is 5, flag is true, render something 
        if (count === 5) {setFlag(true)}
     }, 
        [count] //accepts a dependency list ..., which in this case is count 
     ) //so this useEffect is only hit when count it clicked 

     //we can also use useEffect as a form of destructor, similar to compwillunmount ... 
     useEffect ( () =>{
        return () => {
                console.log('cleanup ... ');
        }
     }) //has no dependency, so anytime the brower renders this runs 
     //why use this??

    console.log(count);

    return (
        <div>
        <button
        onClick = {clickHandler}
        >
            Click Me!
        </button>
        {flag && <h1> The count is 5! </h1>}
        </div>
    )
}

export default UseEffectHook