import React, { Component } from 'react';

class APIClass extends Component {

    //This class will demo ... 
    // lists and keys 
    //calling an API 
    //upon page render, want to call an API
    //send data to UI as list 

    state = {
        //create a state with a array member called data 
        data: []
    }

    componentDidMount() {
        //should print an empty array upon page render 
        this.getData();
    }

    //using ... 
    //jsonplaceholder.typicode.com 
    //for a API of dummy data 
    //async function that collects data from API 
    getData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        //response holds raw data 
        const data = await response.json();
        //convert to json so we can manip and collect it 
        //dont totally get why we need to include both of these here 
        if (data && data.length) {
            this.setState({
                //setState with incoming data 
                data
            })
        }
    }

    //render method 
    render() {
        //print arrays that have been collected 
        console.log(this.state);
        return (
            <div>
                {
                    //again, why do we need both ...
                    //if ...
                        //filter for unique data 
                        //dont totally understand this 
                    this.state.data && this.state.data.length > 0 ?
                        this.state.data.map((dataItem, index) => (
                            <p
                                key = {`
                                ${dataItem.id}
                                ${index}
                                    `} 
                                >
                                {dataItem.title}
                            </p>
                        )) 
                        //else 
                            //didnt recieve data and state is empty 
                        : null
                }
            </div>
        );
    }
}

export default APIClass; 