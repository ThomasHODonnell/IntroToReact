import React, { useContext } from 'react';
import { context } from '../App'; 


//Note: Context and useContext are designed to manage global state
//  ** To use contect, we have to use create context. 
    //we want to do this in App.js
//syntax to create context ... 
    // export dt varname = createContext(initializing value)
        //log(varname) ...
//this gives us two primary properties to use ... 
    //  Consumer: recieves value from provider 
        //can use consumer or useContext to collect data from provider 
    //Provider: provides value to component tree 
        //if have mult sub comps from app ...
        //this will give a value to all the subcomps




function UseContextHook () {
    
    //can have mult Contexts so ... (varname)
    const getValueFromContext = useContext(context)
    console.log(getValueFromContext);


    return (
        <div>
            <button
                style = {{backgroundColor : getValueFromContext}}
            >   Click 
            </button>
        </div>
    )
}

export default UseContextHook;