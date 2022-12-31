import React from 'react'


//changing PropEx to accept a parameter 
const PropEx = (props) => { // child comp, which accepts three args from the call 
    
    console.log(props); 

    const {flag, Data, parentCompHandler} = props; //destructure those args 

    return (
        <div>
            {
                //&& passes back both values 
                //flag && someData
                //changing flag to false and below is an if else 
                flag ? Data : 'flag is false'
            }
            {/* - on click I want to pass data back to the parent comp
                - going to demo this in returnProp.jsx
                - on click, I am simply printing bc that all that in parentcomphandler*/}
            <button onClick = {parentCompHandler}> Click Me!</button>
        </div>
    )    
}

export default PropEx; 