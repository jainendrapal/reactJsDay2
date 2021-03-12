import React from 'react';

class App5 extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            data:[]
        };
        this.onLoad=this.onLoad.bind(this)
    }
 

    componentDidMount(){
        fetch('./public/data.json')
        .then(res=>res.json())
        .then(this.onLoad)
    }

    onLoad(d1){
        this.setState({data:d1})
    }

    render() {
        return (
            <div>
                {
                this.state.data.map((item,i)=>(<div key={i}> 
                <a href={`mail to :${item.email}`}>{item.name}</a>
                {item.company}</div>))
                }
                
                
            </div>
           
        )
    }
}

export default App5