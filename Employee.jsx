import React from "react"
import axios from 'axios'
class Employee extends React.Component{
    constructor(props){
        super(props)
        this.state={
            person:[],
            curr:[]
        }
    }
    Display(e){
        var val=e.target.value;
         var c=[];
        if(e.target.value!==""){
           var c=this.state.persons;
            c=this.state.person.filter(el=>{
                return(el.name.toLowerCase().includes((e.target.value.toLowerCase())));
                
            })

            this.setState({curr:c});
            
        }

        else{c=this.state.persons;}

    }

    
    componentDidMount(){
        
       axios.get("http://jsonplaceholder.typicode.com/users")
       .then(res=>{
           console.log(res.data)
           const persons=res.data;

           this.setState({person: persons, curr:persons});
       })
        
      // console.log(this.state.person)//
      //console.log(curr);
   //   this.state(curr);

    }
    render(){
        return(

            <div>
    <table>
      <td>id</td>
      <td>name</td>
      <td>username</td>
      <td>mail</td>
      
       {this.state.curr.map((person,ival)=> 
        (<tr key={ival}>
        <td>{person.id}</td>
        <td>{person.name} </td>
        <td>{person.username} </td>
        <td>{person.email}</td>
        </tr>)
        )}
      
  </table>
  <br></br>
            <input type="text" onChange={(e)=>this.Display(e)}/>
            </div>
        );
    }
}

export default Employee;
