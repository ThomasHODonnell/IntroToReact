import React, { Component } from 'react';

class EventHandler extends Component {

    state = {
        formData: { // this updates as values are inputted 
            name: '',
            age: ''
        },
        finalData: {
            name: '',
            age: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault() //this makes it so the page does not refresh upon submitting
        // - this function is called whenever the submit button is clicked.
        // - without it, the page will refresh and the console will be reset
        const { formData } = this.state;
        this.setState((prevState => ({
            ...prevState, //not sure what this does
            finalData: {
                ...prevState.finalData,
                ...formData //why do we need this?
            }, 
            formData: {
                name: '', 
                age: ''
            }
        })))
    }

    //called whenver the name input is called
    //through the onChange method which requires a live state
    //for this reason, it needs to be called with a .this
    //and any changes to the state(setState) need to be hit with the .this method
    //as they are an instance of the live state
    //event is the param of live data from the state 
    handleNameChange = (event) => {
        //what does the .target method do?
        //I dont see any changes in the console when removed. 
        const { value } = event.target; //from the value declared in the input

        //This block is defining the current state
        //setState takes an arrow function arg
        //this arrow function arg is prevState and follows with a void function
        //in this void function, we redefine the .name through the value paramater in our input bar
        this.setState(prevState => ({
            formData: {
                ...prevState.formData, // what does ... do?
                name: value
            }
        }))
    }

    //handleAgeChange is the same code as above, with one change to update .age
    handleAgeChange = (event) => {
        const { value } = event.target;

        this.setState(prevState => ({
            formData: {
                ...prevState.formData,
                age: value
            }
        }))

    }

    //here is our UI 
    render() {
        console.log(this.state); //prints current state once page is loaded  
        return (
            <div>
                {/* - the onsubmit method will make the page refresh without handleSubmit, see ^ 
                - what is the <form></form> */}
                <form onSubmit={this.handleSubmit}>
                    <input
                        name='name'
                        placeholder='name' //transparent text in input box 
                        type={'text'} //dt 
                        value={this.state.formData.name} //the input loaded as variable value 
                        onChange={this.handleNameChange} //all passed through to the onchange method for manip
                    >
                    </input>
                    <input
                        name='age' //same as above 
                        placeholder='age'
                        type={'number'}
                        value={this.state.formData.age}
                        onChange={this.handleAgeChange}
                    >
                    </input>
                    <button
                        type='submit'
                        //not sure what an aria label is 
                        aria-label='submit'>
                        Submit
                    </button>
                </form>
                {
                    Object.keys(this.state.finalData.age).length > 0 &&
                    (
                        <h1>
                            Your name is {this.state.finalData.name} and
                            your age is {this.state.finalData.age}!
                        </h1>
                    )
                }
            </div>
        )
    }
}

export default EventHandler; 