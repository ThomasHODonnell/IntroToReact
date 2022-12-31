import React, {createRef, useEffect} from 'react'; 

//ref and useRef are used to manage any kind of DOM limts or operations in comps 

// first createRef with some initializer value, might have to be null 
//second, pass ref in the jsx your using 
//third use that in useEffect for some effect with a DOM element. 

function UseRefAndDOM () {
    
    const inputRef = createRef(null);
    
    useEffect ( () => {
        console.log(inputRef.current);
        inputRef.current.focus(); //focus function throws cursor into input box upon page load 
    }, [])

    return (
        <div>
            {/* no onchange, not intended to handle info here. */}
            <input
            ref = {inputRef}
            name = 'name'
            placeholder = 'name'
            type = 'text'
            >
            
            </input>
        </div>
    )
}

export default UseRefAndDOM; 