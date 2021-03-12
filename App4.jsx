import React from 'react';
import axios from 'axios';
class App4 extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            persons:[]
        };
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            const persons=res.data
            this.setState({persons})
            console.log(persons)
        })
        
        
    }


    render() {
        return (<div>
            <ul>
                {this.state.persons.map((person,i)=><li key={i}>{person.name}</li>)}
                {this.state.persons.map((result, i) => (
                 <li key={i}>{result.name}</li>
             ))}
           </ul>


        </div>)
    }

}

export default App4