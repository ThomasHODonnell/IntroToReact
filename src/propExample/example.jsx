import React from 'react'


//changing PropEx to accept a parameter 
const PropEx = (props) => { // child comp
    
    console.log(props); 

    const {flag, Data, parentCompHandler} = props; 

    return (
        <div>
            {
                //&& passes back both values 
                //flag && someData
                //changing flag to false and below is an if else 
                flag ? Data : 'flag is false'
            }
            {/* - on click I want to pass data back to the parent comp
                - going to demo this in returnProp.jsx*/}
            <button onClick = {parentCompHandler}> Click Me!</button>
        </div>
    )    
}

export default PropEx; 