import React from 'react';

class EmployeeElement extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            editing: false,
            employeeName: this.props.employee.EmployeeName,
            department: this.props.employee.Department,
            date: this.props.employee.DateOfJoining
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleChange(event){
        if(event.target.id === "name")
            this.setState({employeeName: event.target.value});
        else if(event.target.id === "department")
            this.setState({department: event.target.value});
        else
            this.setState({date: event.target.value});
    }
    handleSubmit(event){
        fetch('https://sghtest.azurewebsites.net/api/employee', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({    
                EmployeeId : this.props.employee.EmployeeId,        
                EmployeeName : this.state.employeeName,
                Department : this.state.department,
                DateOfJoining : this.state.date,
                PhotoFileName : this.props.employee.PhotoFileName
            })
        }).then((response) => {window.location.reload()});      
        event.preventDefault();
    }
    handleDelete(event){
        fetch('https://sghtest.azurewebsites.net/api/employee/' + this.props.employee.EmployeeId, {
            method: 'DELETE'            
        }).then((response) => {window.location.reload()});
        event.preventDefault();
    }

    render(){
        if(this.state.editing){
            return(
                <tr className={this.props.secondary === 1 ? '' : 'altST'}>
                    <td>{this.props.employee.EmployeeId}</td>
                    <td><input id="name" type="text" value={this.state.employeeName} onChange={this.handleChange}/></td>
                    <td><input id="department" type="text" value={this.state.department} onChange={this.handleChange}/></td>
                    <td><input id="date" type="text" value={this.state.date} onChange={this.handleChange}/></td>
                    <td><button onClick={this.handleSubmit}>Submit</button><button onClick={() => {this.setState({editing:false});}}>Cancel</button><button onClick={this.handleDelete}>Delete</button></td>
                </tr>
            )
        }
        else{
            return(
                <tr className={this.props.secondary === 1 ? '' : 'altST'}>
                    <td>{this.props.employee.EmployeeId}</td>
                    <td>{this.props.employee.EmployeeName}</td>
                    <td>{this.props.employee.Department}</td>
                    <td>{this.props.employee.DateOfJoining}</td>
                    <td><button onClick={() => {this.setState({editing:true});}}>Edit</button></td>
                </tr>
            );
        }
    }
}

export default EmployeeElement;