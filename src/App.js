import React from 'react';

// this is to make a gt request to API call
import axios from 'axios';
import './App.css';

class App extends React.Component{
    state={ advise:''};

    componentDidMount(){
        // axios.get();

        //  since we are going to need the data initially
        // in class render so we will simply use it here in component did mount
        this.fetchAdvice();
    }
// we didn't use any var or const because this function exist inside a class so it is simply a class function  or a method

    fetchAdvice=()=>{
        axios.get('https://api.adviceslip.com/advice')
        .then((response)=>{

            const {advice}=response.data.slip;
            // this.setState({advice:advice})
            //if both have same name you can just write it as
            this.setState({advice})
        })
        .catch((error)=>{
            console.log(error);
        });
    }
    render(){
        const {advice}=this.state;
        return(
            <div className='app'>
                <div className='card'>
                    <h1 className='heading'>{advice}</h1>
                    <button className='button' onClick={this.fetchAdvice}>
                        <span>ASK ME ADVICE!</span>
                    </button>
                    
                </div>
            </div>
            
        );
    }
}

export default App;