import React from 'react';
import Child from './components/Child.jsx';
const Header=()=><h1>Header Component</h1>

function Footer(props) {
  return <h1>{props.title}Footer Component</h1>
}
class App extends React.Component {
  
    constructor(props){
        super(props);
        this.state={
            counter:0
        }
        this.clickCount=this.clickCount.bind(this)
    }

    clickCount(){
        this.setState({
            counter:this.state.counter+1
        })
    }

    render() {
        return (
            <div>
                <Header></Header>
                <Child></Child>
                <h1>Hello Day 2</h1>
                {this.state.counter}
                <Footer title="footer title"></Footer>
                <button onClick={this.clickCount}>CLICK ME</button>
                 
                </div>
        )   
    }   
}

export default App