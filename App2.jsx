import React from 'react';


class App2 extends React.Component {
 
    constructor(props) {
        super(props);
        this.state={
            userName: 'Jainendra'
        }
    }

    render(){
        return (
            <div>
                <h1>{this.props.data}</h1>
                <h1>{this.state.userName}</h1>
            </div>
        )
    }

}

export default App2;