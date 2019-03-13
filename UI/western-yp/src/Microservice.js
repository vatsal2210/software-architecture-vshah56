import React, { Component } from 'react';

class Microservice extends Component {
    constructor(props){
        super(props);
        this.serviceMap = ['Ski Resorts', 'Restaurants', 'Museums', 'Fortune Companies']
    }

    componentDidMount() {
        console.log("calling https://gateway-team01.mybluemix.net/search" + this.props.location.search);
        fetch('https://gateway-team01.mybluemix.net/search' + this.props.location.search, {
            method: 'POST',
            mode: 'cors',
            headers: {'Access-Control-Allow-Origin':'*'},
            crossDomain:true,
            body: {
                serviceName: 'sdasd',
                searchParam: 'asdasd',


            }
        }).then((res) => {
            return res.json()
        }).then((res) => {
            console.log("res = ", res);
        }).catch((err) => console.log(err));
    }

    render() {
        return (
            <div className="App">
                <div style={{height: '20vh', width: '100%'}}>
                    <button className="button" style={{display: 'inline-block', left:'5px'}}
                        onClick={() => window.location='/'}>
                        Back
                    </button>
                    <p style={{width: '50%', display: 'inline-block'}}> Results for: {this.props.location.search}</p>
                </div>


            </div>
        );
    }
}

export default Microservice;
