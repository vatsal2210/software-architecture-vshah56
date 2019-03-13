import React from 'react';
import {Button} from 'primereact/button';
import {InputText} from "primereact/inputtext";
import {Dropdown} from 'primereact/dropdown';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.dropdownItems = [];

        this.state = {
            service: '',
            query: '',
            skiResortCountry: '',
            skiResortMinPrice: '',
            skiResortMaxPrice: ''
        };

        this.handleSearchClick = this.handleSearchClick.bind(this);
    }

    componentDidMount() {
        console.log("Fetching dropdown items...");
        fetch('https://gateway-team01.mybluemix.net/list', {
            mode: 'cors',
            headers: {'Access-Control-Allow-Origin':'*'},
            crossDomain:true,
            })
            .then((res) => res.json())
            .then((data) => {
                let items = [];
                if (data.message){
                    if (data.message[0].skiResort === 1){
                        items.push({label: 'Ski Resorts', value: 'skiResort'});
                    }
                    if (data.message[0].restaurants === 1){
                        items.push({label: 'Restaurants', value: 'restaurant'});
                    }
                    if (data.message[0].museums === 1){
                        items.push({label: 'Museums', value: 'museums'});
                    }
                    if (data.message[0].fortuneCompanies === 1){
                        items.push({label: 'Fortune Companies', value: 'fortuneCompanies'});
                    }
                }

                items.forEach((item) => {
                    this.dropdownItems.push(item);
                });

                this.forceUpdate();

            }).catch((err) => console.log("error fetching dropdown: ", err));
    }

    handleSearchClick(){
        let additionalQueries = "";
        if (this.state.service === 'skiResorts'){
            additionalQueries = additionalQueries.concat("&country=" + this.state.skiResortCountry,
                "&pricerange=" + this.state.skiResortMinPrice + "-" + this.state.skiResortMaxPrice);
        }

        window.location='/microservice?serviceName=' + this.state.service +
            '&searchParam=' + this.state.query + additionalQueries;
    }


    render(){
        return (
        <div>
            <div style={{width: '50%', height: '85vh'}}>
                <div style={{position: 'relative', top: '40%', left: '50%', width: '100%'}}>
                    <div className="p-grid p-fluid">
                        <div className="p-col-12 p-md-8">
                            <div className="p-inputgroup">
                                <Dropdown
                                    options={this.dropdownItems}
                                    value={this.state.service}
                                    onChange={(e) => {
                                        this.setState({service: e.value});
                                        console.log("service set to ", e.value);
                                    }}
                                    placeholder="Select service..." style={{maxWidth: '35%'}}
                                />
                                <InputText
                                    placeholder="Keywords..."
                                    value={this.state.query}
                                    onChange={(e) => this.setState({query: e.target.value})}
                                />
                                <Button
                                    label="Search"
                                    disabled={this.state.service === ''}
                                    onClick={this.handleSearchClick}
                                />
                            </div>
                            {
                                this.state.service === 'skiResort' ?
                                    <span>
                                        <InputText
                                            placeholder="Country..."
                                            value={this.state.skiResortCountry}
                                            onChange={(e) => this.setState({skiResortCountry: e.target.value})}
                                            style={{width: '30%', marginLeft: '25px'}}
                                        />
                                        <InputText
                                            placeholder="Min. Price $"
                                            value={this.state.skiResortMinPrice}
                                            onChange={(e) => this.setState({skiResortMinPrice: e.target.value})}
                                            style={{width: '18%'}}
                                        />
                                        <InputText
                                            placeholder="Max. Price $"
                                            value={this.state.skiResortMaxPrice}
                                            onChange={(e) => this.setState({skiResortMaxPrice: e.target.value})}
                                            style={{width: '18%'}}
                                        />
                                    </span>
                                    : null
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p>Western University</p>
            </div>
        </div>
    )};
}


export default Home;