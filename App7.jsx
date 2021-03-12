import React from 'react';
class App7 extends React.Component {
    constructor(props) {
        super(props);
        this.toggleInputCase=this.toggleInputCase.bind(this);
        this.state={
            uppercase:false
        }
    }

    toggleInputCase() {
        console.log(this.refs)
        const isUpper=this.state.uppercase
        const value=this.refs.inputField.value
        this.refs.inputField.value=isUpper ? value.toLowerCase() : value.toUpperCase();
        this.setState({uppercase:!isUpper})
    }

    render() {
        return(
            <div>
                <input type="text" ref="inputField"></input>
                <button type="button" onClick={this.toggleInputCase}>
                    ToggleCase
                </button>
            </div>
        )
    }

}

export default App7