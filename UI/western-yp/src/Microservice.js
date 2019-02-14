import React, { Component } from 'react';

class Microservice extends Component {
    constructor(props){
        super(props);
        this.serviceMap = ['Ski Resorts', 'Restaurants', 'Museums', 'Fortune Companies']
    }

    render() {
        return (
            <div className="App">
                <div style={{height: '20vh', width: '100%'}}>
                    <button className="button" style={{display: 'inline-block', left:'5px'}}
                        onClick={() => window.location='/'}>
                        Back
                    </button>
                    <p style={{width: '50%', display: 'inline-block'}}> Results for: {this.props.location.search.split("query=")[1]}</p>
                </div>
            </div>
        );
    }
}

export default Microservice;
