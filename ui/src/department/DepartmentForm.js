import React from 'react';



class DepartmentForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {name: 'Name'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({name: event.target.value});
    }

    handleSubmit(event){
        this.handlePostData();
        event.preventDefault();   
    }

    handlePostData(){
        fetch('https://sghtest.azurewebsites.net/api/department', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                DepartmentName: this.state.name
            })
        }).then((response) => {window.location.reload()})
    }
    render(){
        return(
        <form onSubmit={this.handleSubmit}>
            <label> What is the new department name? </label>
            <input type="text" value={this.state.name} onChange={this.handleChange}></input>
            <input type="submit" value="submit"/>
        </form>)
    }
}

export default DepartmentForm;