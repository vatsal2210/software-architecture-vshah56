import React from 'react';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';

class Register extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    sendRegisterRequest(){

    }

    render(){
        return <div style={{margin: '0 auto', display: 'block'}}>
            <h1>Register</h1>
            <div style={{margin: 0, position: 'absolute', top: '28%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                <InputText
                    placeholder={"Username"}
                    value={this.state.username}
                    onChange={(e) => this.setState({username: e.target.value})}
                /><br/><br/>
                <InputText
                    placeholder={"Password"}
                    value={this.state.password}
                    onChange={(e) => this.setState({password: e.target.value})}
                /><br/><br/>
                <Button label={"Submit"} />
            </div>
        </div>
    }

}

export default Register;