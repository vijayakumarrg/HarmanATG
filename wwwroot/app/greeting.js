
import React from 'react';

var colors = ["#c0c0c0", "#ff0000", "#00ff00", "#0000ff"];

class Greeting extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (<div>Hello there {this.props.name}!</div>);
    }
}

export default Greeting;