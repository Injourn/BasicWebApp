import React from 'react';



class EmployeeForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: 'Name',
            department: 'department',
            date: Date.now,
            picture: "image.txt"
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        if(event.target.id == "name")
            this.setState({name: event.target.value});
        else if(event.target.id == "department")
            this.setState({department: event.target.value});
        else if(event.target.id == "date")
            this.setState({date: event.target.value});
        else
            this.setState({picture: event.target.value})
    }

    handleSubmit(event){
        this.handlePostData();
        event.preventDefault();
    }

    handlePostData(){
        fetch('https://sghtest.azurewebsites.net/api/employee', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({            
                EmployeeName : this.state.name,
                Department : this.state.department,
                Date : this.state.date,
                PhotoFileName : this.state.picture,
            })
        }).then((response) => {window.location.reload()})
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>                
                <div className="form-group">
                    <label for="name"> Employee Name </label>
                    <input id="name" type="text" className="input-control" value={this.state.name} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label for="department"> Department </label>
                    <input id="department" type="text" className="input-control" value={this.state.department} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label for="name"> Date Joined </label>
                    <input id="date" type="date" className="input-control" value={this.state.date} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label for="name"> FileName </label>
                    <input id="fileName" type="text" className="input-control" value={this.state.picture} onChange={this.handleChange}/>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>                
            </form>
        )
    }
}
export default EmployeeForm;