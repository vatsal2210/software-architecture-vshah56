import React from 'react';
import {Button} from 'primereact/button';
import {InputText} from "primereact/inputtext";
import {MultiSelect} from 'primereact/multiselect';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.dropdownItems = [];

        this.state = {
            items: [],
            query: ''
        }
    }

    componentDidMount() {
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
                        items.push({label: 'Ski Resorts', value: '1'});
                    }
                    if (data.message[0].restaurants === 1){
                        items.push({label: 'Restaurants', value: '2'});
                    }
                    if (data.message[0].museums === 1){
                        items.push({label: 'Museums', value: '3'});
                    }
                    if (data.message[0].fortuneCompanies === 1){
                        items.push({label: 'Fortune Companies', value: '4'});
                    }
                }

                items.forEach((item) => {
                    this.dropdownItems.push(item);
                });

                this.forceUpdate();

            }).catch((err) => console.log("error fetching dropdown: ", err));
    }

    selectedItemTemplate(value){
        let dropdownItems = ['Ski Resorts', 'Restaurants', 'Museums', 'Fortune Companies' ];
        if (value){
            return <span>{dropdownItems[value-1]}<br/></span>
        }
        else {
            return <span className="my-multiselected-empty-token">Select service...</span>
        }
    }

    render(){
        return (
        <div>
            <div style={{width: '50%', height: '85vh'}}>
                <div style={{position: 'relative', top: '40%', left: '50%', width: '100%'}}>
                    <div className="p-grid p-fluid">
                        <div className="p-col-12 p-md-8">
                            <div className="p-inputgroup">
                                <MultiSelect
                                    options={this.dropdownItems}
                                    value={this.state.items}
                                    onChange={(e) => this.setState({items: e.value})}
                                    placeholder="Select service..." style={{maxWidth: '35%'}}
                                    selectedItemTemplate={this.selectedItemTemplate}
                                />
                                <InputText
                                    placeholder="Keywords..."
                                    value={this.state.query}
                                    onChange={(e) => this.setState({query: e.target.value})}
                                />
                                <Button
                                    label="Search"
                                    onClick={() => window.location='/microservice?s=' + this.state.items + '&query=' + this.state.query}
                                />
                            </div>
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