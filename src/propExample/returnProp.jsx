import React from 'react';


const ReturnProp = (props) => { // child comp that recieves one arg 

    const { getValueFromChildComp } = props; // destructure the arg

    // I want to pass data back to the parent comp onClick
    const handleClick = () => {
        //sets a constant value of 5 every time this function is called 
        // so could never print anything other than 6 
        const count = 5;
        //calls original function with our updated value which prints it. 
        getValueFromChildComp(count + 1)
    }

    return (
        <div>
            <button
            // on click we call the function handle above
                onClick={handleClick}> 
                iterator ...
            </button>
        </div>
    )
}

export default ReturnProp; 