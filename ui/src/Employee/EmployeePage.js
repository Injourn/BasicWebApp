import React from 'react'


class EmployeePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            employee :{},
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    


    handleSubmit(event){
        event.preventDefault();
        var formData = new FormData();
        var file = document.getElementById("file").files[0];
        var filetype = file.name.split(".")[1];
        var fileName = this.state.employee.EmployeeName.replace(" ","_") + this.state.employee.EmployeeId + "." + filetype;
        var newFile = new File([file.slice(0,file.size,'image/' + filetype)], fileName , {type: 'image/' + filetype});
        formData.append("",newFile);
        console.log(newFile);
        fetch('https://sghtest.azurewebsites.net/api/employee/SaveFile', {
            method: 'POST',
            body: formData
        }).then((response) => {/*window.location.reload()*/
            fetch('https://sghtest.azurewebsites.net/api/employee', {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({    
                    EmployeeId : this.state.employee.EmployeeId,        
                    EmployeeName : this.state.employee.EmployeeName,
                    Department : this.state.employee.Department,
                    DateOfJoining : this.state.employee.DateOfJoining,
                    PhotoFileName : fileName
                })
            })
        
        }).then((response) => {window.location.reload()});;
    }
    componentDidMount(){        
        fetch('https://sghtest.azurewebsites.net/api/employee')
        .then(res => res.json())
        .then((data) => {
            this.setState({employee: data.find(element => element.EmployeeId == this.props.id)})
        })        
    }

    handlePostData(){
        fetch('https://sghtest.azurewebsites.net/api/employee', {
            method: 'POST',
            body: this.state.file     
        }).then((response) => {window.location.reload()})
    }

    render(){
        return(<div className="container">
            <div className="employeeBox box">
                <img width="200" height="200" src={"https://sghtest.azurewebsites.net/Photos/" + this.state.employee.PhotoFileName}></img>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label> Change Picture </label>
                        <input id="file" type="file" className="input-control" accept="image/png, image/jpeg"/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
                <br/>
                {this.state.employee.EmployeeName}
                <br/>
                {this.state.employee.DateOfJoining}

            </div>
            <div className="informationBox box">
                <h1>{this.state.employee.Department}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            </div>
        </div>)
    }
}


export default EmployeePage;