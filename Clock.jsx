import React from 'react';

class Clock extends React.Component {

    constructor(props){
        super(props);
        this.state={date: new Date()}
    }

    componentDidMount(){
        this.timeID=setInterval(()=>this.tick(),1000

        );
    }

    tick(){
        this.setState({date: new Date()})
    }
    render(){
        return (
            <div>
                <h1>{this.props.data}</h1>
                <h1>{this.state.date.toLocaleDateString()}</h1>
            </div>
        )
    }
}

export default Clock;