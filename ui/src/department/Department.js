import React from 'react';

class Department extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            editing: false,
            departmentName: this.props.department.DepartmentName
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleChange(event){
        this.setState({departmentName: event.target.value});
    }
    handleSubmit(event){
        fetch('https://sghtest.azurewebsites.net/api/department', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                DepartmentId: this.props.department.DepartmentId,
                DepartmentName: this.state.departmentName
            })
        }).then((response) => {window.location.reload()});
        event.preventDefault();
    }
    handleDelete(event){
        fetch('https://sghtest.azurewebsites.net/api/department/' + this.props.department.DepartmentId, {
            method: 'DELETE'            
        }).then((response) => {window.location.reload()});
        event.preventDefault();
    }
    render(){
        if(this.state.editing){
            return(
                <tr className={this.props.secondary === 1 ? '' : 'altST'}>
                    <td>{this.props.department.DepartmentId}</td>
                    <td><input id="name" type="text" value={this.state.departmentName} onChange={this.handleChange}/></td>
                    <td><button onClick={this.handleSubmit}>Submit</button><button onClick={() => {this.setState({editing:false});}}>Cancel</button><button onClick={this.handleDelete}>Delete</button></td>
                </tr>
            );
        }
        else{
            return(
                <tr className={this.props.secondary === 1 ? '' : 'altST'}>
                    <td>{this.props.department.DepartmentId}</td>
                    <td>{this.props.department.DepartmentName}</td>
                    <td><button onClick={() => {this.setState({editing:true});}}>Edit</button></td>
                </tr>
            );
        }
    }
}

export default Department;