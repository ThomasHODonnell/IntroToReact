import React, { useReducer } from 'react';

// similar to useState, but for more complex states??
    //didnt give good explaination ... 
//takes a state and a dispatcher function 
    //dispatch function updates state in some way 
//the dispatch function sends your action(s) ...
    //we want to send that upon some click so its in the jsx 
    //each action we might want done is its own type
//dispatch needs to define some mandatory param type(s) to be hit in the switch 
    //the switch does some operation
//then returns your updated state 

    const initialState = {
        flag: false
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'TOGGLE_BUTTON':
                return {
                    ...state, 
                    flag: !state.flag
                };
        
            default:
                return state;
        }
    }


function UseReducerHook () {

    const [state, dispatch] = useReducer(reducer, initialState)

    console.log(state.flag);

    return (
        <div>
            <button
            onClick = { () => {
                dispatch({type: 'TOGGLE_BUTTON'})
            }}
            >
                Toggle
            </button>

        </div>
        )
}

export default UseReducerHook; 