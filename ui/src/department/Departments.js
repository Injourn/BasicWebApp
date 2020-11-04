import React from 'react';
import Department from './Department';

class Departments extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            departments: []
        };
    }
    componentDidMount(){
        fetch('http://localhost:51561/api/department')
        .then(res => res.json())
        .then((data) => {
            this.setState({departments: data})
        })
        .catch(console.log);
        console.log(this.state.departments);
    }
    render(){
        const department = this.state.departments;
        return(
            <div>
            {department.map(function(d, idx) {
                return (<Department department={d}/>)
                })
            }            
            </div>
        );
    }

}

export default Departments;