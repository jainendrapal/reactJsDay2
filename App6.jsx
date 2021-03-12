import React from 'react';
import './public/stylesheet/style.css';
// import './public/stylesheet/style2.scss';


const htmlContent = require('./records.html')

const ExampleInline=()=>{
    const wrapper={
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width:'100%',
        padding: '50px',
        color: '#444',
        border:'1px solid #1890ff'
    };
    const btn={
        padding: '50px 20px',
        border: '1px solid #2329ff',
        background:'#3453ff',
        fontSize: '14px'

    }
}


class App6 extends React.Component {

    render() {
        return(
                <button style={ExampleInline.btn}>CLICK ME</button>
          
        )
    }
}
export default App6