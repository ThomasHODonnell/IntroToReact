import React from 'react'; 
import PropEx from '../propExample/example';
import ReturnProp from '../propExample/returnProp';



//Cannot call Child from App.js
const Child = () => {
    return (
        <p> Child Comp </p>
    )
}
//must call Child from FunBasedComp function. 
//Why cant I call child directly?

//passing data from one comp to another is props through paramaters 
    //presumably because I am not passing any data through props??
//props can be used from parent to child or child to parent


// I want to pass data from FunBasedComp to PropEx. 
//Therefore, FunBasedComp is the parent Comp to PropEx. 
function FunctionalBasedComp() { // parent function to Child

    const parentCompHandler = () => {
        console.log('Hello from parent handler');
    }

    const getValueFromChildComp = (value) => {
        console.log(value);
    }

    return (
        <div>
            <Child/>
            FunBasedComp text
    {/* - this is not just a call to PropEx
        - this is also where data can be passed.
        - child is a call without any args 
        - propex is a call with args
        - parentCompHandler sends the function defined above
        - flag is a local bool value 
        - some data is a local string */}
            <PropEx parentCompHandler = {parentCompHandler} flag = {false} someData = 'data as prop' />


            {/* - Here I call a new comp that I want to send data back to me
            - this function simply prints a value that is passed to it */}
            <ReturnProp getValueFromChildComp = {getValueFromChildComp} />

        </div>
    )
}

export default FunctionalBasedComp; 