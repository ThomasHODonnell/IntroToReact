import React from 'react';


const ReturnProp = (props) => {

    const { getValueFromChildComp } = props;

    // I want to pass data back to the parent comp onClick
    const handleClick = () => {
        const count = 5;
        getValueFromChildComp(count + 1)
    }

    return (
        <div>
            <button
                onClick={handleClick}>
                iterator ...
            </button>
        </div>
    )
}

export default ReturnProp; 