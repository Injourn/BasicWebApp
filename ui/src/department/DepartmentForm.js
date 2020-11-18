import React from 'react';



class DepartmentForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {name: 'Name'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        console.log(event);
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
            <div className="form-group">
                <label>Department Name</label>
                <input className = "input-control" type="text" value={this.state.name} onChange={this.handleChange}></input>
            </div>
            <div className="form-group">
                <input type="submit" value="submit"/>            
            </div>
        </form>)
    }
}

export default DepartmentForm;