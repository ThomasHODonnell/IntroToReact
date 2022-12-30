import React, {Component} from 'react'; 

// What is a state?
    //object for managing data
    //states are only accessable inside comps 
        //therefore, its cannot be passed between comps without conversion to a prop

class StateClass extends Component{

    //2 ways to create a state 

     state = {
         //all state properties 
         count: 0 //initializer
     }

     clickHandler = () => {
// do not mutate the state directly 
        //this.state.count = this.state.count + 1 //directly mutating the state 
//instead, use setState method 
        const {count} = this.state; //destructuring 
        this.setState({
            count : count + 1
        }, () => {
            console.log(this.state)
     })
    }

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         //write all state properties
    //     }
    // }

    render () {
        console.log(this.state);
        return (
            <div>
                <button
                    onClick = {this.clickHandler}
                >
                    Click Me!
                </button>
                {
                    //if count == 5 print ...
                    this.state.count === 5 && 'count is 5'

                }
            </div>
        )
    }
}

export default StateClass