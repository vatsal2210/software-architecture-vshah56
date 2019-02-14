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
        this.dropdownItems = [
            {label: 'Ski Resorts', value: '1'},
            {label: 'Restaurants', value: '2'},
            {label: 'Museums', value: '3'},
            {label: 'Fortune Companies', value: '4'}
        ];

        this.state = {
            items: [],
            query: ''
        }
    }

    selectedItemTemplate(value){
        let dropdownItems = ['Ski Resorts', 'Restaurants', 'Museums', 'Fortune Companies' ];
        if (value){
            console.log(dropdownItems);
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