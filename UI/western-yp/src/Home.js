import React from 'react';

class Home extends React.Component {
    render(){
        return (
        <div>
            <div style={{width: '50%', height: '85vh'}}>
                <div style={{position: 'relative', top: '40%', left: '50%', width: '100%'}}>
                    <button className="button">Ski Resorts</button>
                    <button className="button">Restaurants</button>
                    <button className="button">Museums</button>
                    <button className="button">Fortune Companies</button>
                </div>
            </div>
            <div>
                <p>Western University</p>
            </div>
        </div>
    )};
}


export default Home;