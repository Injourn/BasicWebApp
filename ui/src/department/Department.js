import React from 'react';

class Department extends React.Component{
    render(){
        return(
            <tr>
                <td>{this.props.department.DepartmentId}</td>
                <td>{this.props.department.DepartmentName}</td>
            </tr>
        );
    }
}

export default Department;