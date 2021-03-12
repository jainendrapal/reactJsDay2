
import React from 'react';

class App3 extends React.Component {
   constructor(props) {
      super(props);
	
      this.state = {
         data: 0,
         decreasing:0
         
      }
       
      this.myNumber = this.setNewNumber.bind(this);

      this.myDecrement = this.setNewNumberDec.bind(this);
     
   };

   shouldComponentUpdate(){
       console.log("App:- shouldComponentUpdate")
       return true;
   }
   setNewNumber() {
      this.setState({data: this.state.data + 1})
    
   }
   setNewNumberDec() {
      this.setState({data: this.state.data - 1})
    
   }
   componentDidMount(){
      
   }

   render() {
      return (
         <div>
            <button onClick = {this.myNumber}>INCREMENT</button>
            <Content number = {this.state.data}></Content>

            <button onClick = {this.myDecrement}>Decrement</button>
          
         </div>
      );
   }
}
class Content extends React.Component {

    componentWillMount() {
       console.log('Component WILL MOUNT!')
    }
 
    componentDidMount() {
       console.log('Component DID MOUNT!')
    }
 
    componentWillReceiveProps(newProps) {    
       console.log('Component WILL RECIEVE PROPS!',newProps);
    }
 
    shouldComponentUpdate(newProps, newState) {
       console.log("shouldComponentUpdate",newProps,newState);
       return true;
    }
 
    componentWillUpdate(nextProps, nextState) {
       console.log('Component WILL UPDATE!',nextProps,nextState);
    }
 
    componentDidUpdate(prevProps, prevState) {
       console.log('Component DID UPDATE!',prevProps,prevState);
    }
 
    componentWillUnmount() {
       console.log('Component WILL UNMOUNT!')
    }
     
    render() {
       return (
          <div>
             <h3>{this.props.number}</h3>
          </div>
       );
    }
 }


 export default App3;