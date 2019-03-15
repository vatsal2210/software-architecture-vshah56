import React, { Component } from 'react';
import queryString from 'query-string';
import './Microservice.css';

class Microservice extends Component {
    constructor(props){
        super(props);
        this.serviceMap = ['Ski Resorts', 'Restaurants', 'Museums', 'Fortune Companies']

        this.state = {
            params: {},
            results: [],
            loading: true
        }
    }

    componentDidMount() {
        // calls ski resort endpoint at the moment
        let params = queryString.parse(this.props.location.search);
        console.log("params = ", params);
        this.setState({params: params});

        let url = 'https://ypgateway.mybluemix.net/ski/resort/test?country=' + params.country + '&min=' +
            params.pricerange.split('-')[0] + '&max=' + params.pricerange.split('-')[1] + '&name=' + params.searchParam;

        console.log("calling: ", url);

        fetch(url, {method: 'GET', mode: 'cors', headers: {'Access-Control-Allow-Origin':'*'}, crossDomain:true})
            .then((res) => res.json())
            .then((res) => {
            console.log("res = ", res);
            this.setState({results: res.responseBody, loading: false})

        }).catch((err) => console.log(err));

    }

    render() {
        let pricerange = '';
        if (this.state.params && this.state.params.pricerange){
            pricerange = this.state.params.pricerange.split('-');
        }

        return (
            <div className="App">
                <div style={{height: '10vh', width: '100%'}}>
                    <button className="button" style={{display: 'inline-block', left:'5px'}}
                        onClick={() => window.location='/'}>
                        Back
                    </button>
                    <p style={{width: '50%', display: 'inline-block'}}> Results for "{this.state.params.searchParam}" in&nbsp;
                        {this.state.params.country} from ${pricerange[0]} to ${pricerange[1]}
                    </p>
                </div>

                {this.state.results && this.state.results.length !== 0 ?
                    <table>
                        <thead style={{}}>
                        <tr>
                            <th>Resort Name</th>
                            <th>Continent</th>
                            <th>Country</th>
                            <th>Province</th>
                            <th>Altitude (m)</th>
                            <th>Slope Rating (/5)</th>
                            <th>Adult Ticket Price ($)</th>
                            <th>Youth Ticket Price ($)</th>
                            <th>Child Ticket Price ($)</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.results.map((result) => {
                            return <tr key={result.resortName} style={{}}>
                                <td>
                                    {result.resortName}
                                </td>
                                <td>
                                    {result.continent}
                                </td>
                                <td>
                                    {result.country}
                                </td>
                                <td>
                                    {result.province}
                                </td>
                                <td>
                                    {result.altitude}
                                </td>
                                <td>
                                    {result.slopeRating}
                                </td>
                                <td>
                                    {result.adultTicketPrice}
                                </td>
                                <td>
                                    {result.youthTicketPrice}
                                </td>
                                <td>
                                    {result.childTicketPrice}
                                </td>

                            </tr>
                        })}
                        </tbody>
                    </table>
                : !this.state.loading ? <p>No results found.</p> : <p>Searching...</p> }


            </div>
        );
    }
}

export default Microservice;
