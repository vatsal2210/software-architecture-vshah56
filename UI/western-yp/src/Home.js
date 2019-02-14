import React from 'react';

class Home extends React.Component {
    render(){
        return (
        <div>
            <div style={{width: '50%', height: '85vh'}}>
                <div style={{position: 'relative', top: '40%', left: '50%', width: '100%'}}>
                    <button className="button" onClick={() => window.location='/microservice?s=1'}>
                        Ski Resorts
                    </button>
                    <button className="button" onClick={() => window.location='/microservice?s=2'}>
                        Restaurants
                    </button>
                    <button className="button" onClick={() => window.location='/microservice?s=3'}>
                        Museums
                    </button>
                    <button className="button" onClick={() => window.location='/microservice?s=4'}>
                        Fortune Companies
                    </button>
                </div>
            </div>
            <div>
                <p>Western University</p>
            </div>
        </div>
    )};
}


export default Home;