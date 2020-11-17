import React from 'react';

class EmployeeElement extends React.Component{
    render(){
        return(
            <tr className={this.props.secondary === 1 ? '' : 'altST'}>
                <td>{this.props.employee.EmployeeId}</td>
                <td>{this.props.employee.EmployeeName}</td>
                <td>{this.props.employee.Department}</td>
                <td>{this.props.employee.DateOfJoining}</td>
            </tr>
        );
    }
}

export default EmployeeElement;