import React from 'react';
import EmployeeElement from './EmployeeElement';

class EmployeeList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            employee: []
        };
    }
    componentDidMount(){
        fetch('https://sghtest.azurewebsites.net/api/employee')
        .then(res => res.json())
        .then((data) => {
            this.setState({employee: data})
        })        
    }
    render(){
        const employee = this.state.employee;
        return(
            <table className="simpleTable">
                <thead>
                    <tr>
                        <th>EmployeeId</th>
                        <th>EmployeeName</th>                 
                        <th>Department</th>
                        <th>DateofJoining</th>                    
                    </tr>
                </thead>
                <tbody>
                    {employee.map(function(d,idx){
                        return(
                            <EmployeeElement key={idx} secondary={idx % 2} employee={d}/>
                        )
                    })}
                </tbody>
            </table>
        );
    }
}


export default EmployeeList;