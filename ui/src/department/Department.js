import React from 'react';

class Department extends React.Component{
    render(){
        return(
            <h1>{this.props.department}</h1>
        );
    }
}

export default Department;