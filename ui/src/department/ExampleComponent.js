import React from 'react';


class ExampleComponent extends React.Component {

    constructor(props){
        super(props);
        //Basically all of the fields and stuff in OOC stuff that changes
        //While component exist
        this.state = { randomNumber: Math.random()};               
    }
    changeNumber(number){
        this.setState(state => ({
            randomNumber: number
        }));
    }
    render(){        
        return(
            <h1>
                Hello {this.props.name} &lt;3! <br/> The number is {this.state.randomNumber}
            </h1>
        );
    }

}
export default ExampleComponent;