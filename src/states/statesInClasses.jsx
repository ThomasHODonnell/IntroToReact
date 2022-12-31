import React, {Component} from 'react'; 

// What is a state?
    //object for managing data
    //states are only accessable inside comps 
        //therefore, its cannot be passed between comps without conversion to a prop

//calling this directly from app comp 
class StateClass extends Component{

    //2 ways to create a state 

     state = {
         //all state properties 
         count: 0, 
         //when count is 10, flag flips to true, prints text inside countupdate 
         flag: false //initializer
     }

     clickHandler = () => {
// do not mutate the state directly 
        //this.state.count = this.state.count + 1 //directly mutating the state 
//instead, use setState method 
        const {count} = this.state; //destructuring 
        this.setState({
            count : count + 1 //update the state
        }, () => {
            console.log(this.state) //print new state
     }) //does this accept as many arrow functions as I like?
    } // or is update -> return / print just convension 

//second way to create a state, not going to worry about this bc the first way is easier 
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         //write all state properties
    //     }
    // }

    //Life Cycle Methods
    //there are 4 ... 
        //componentDidCatch?
        //componentDidmount?
        //componentDidUpdate?
        //componentWillUnmount?
        

        //Once this component is called, this method is immediatly hit
        componentDidMount() {
            //called immediatly after comp is mounted or initial render
            console.log('Comp is mounted');
        }

        //called immediatly after update occurs, not for initial render 
        //if you hover over these methods it tells you
        componentDidUpdate(prevProps, prevState) { //takes 2 args 
            //can check between prev props and current state
            //same for states 
            //does some functionality based on comparing these data points 
            console.log(prevState, this.state);
                if (prevState && prevState.count !== this.state.count && this.state.count === 10){
                    this.setState({
                        flag: true
                    })
                }
        }

        //hit immediatly before a comp is destroyed, cleanup method
        //state delete method??
        componentWillUnmount() {
            
        }

        //handles exeptions from descending components
        //dont need to know this one as well. 
        componentDidCatch() {

        }

    render () {
        //prints state, which starts at 0
        console.log(this.state);
        return (
            <div>
                <button
                //each time its clicked, we call function with the instance of state 
                    onClick = {this.clickHandler}
                >
                    Click Me!
                </button>
                {
                    //if count is 5 print ...
                    this.state.count === 5 && 'count is 5'

                }
                {
                    //if flag is true, then 
                    this.state.flag && <p> Flag is true </p>
                }
            </div>
        )
    }
}

export default StateClass