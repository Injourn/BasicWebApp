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
        fetch('https://sghtest.azurewebsites.net/api/department')
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
                <table className="simpleTable">
                    <thead>
                        <tr>
                            <th style={{width:"10%"}}>Department ID</th>
                            <th style={{width:"80%"}}>Department Name</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                {department.map(function(d, idx) {
                    return (                
                    
                        <Department secondary={idx % 2} department={d}/>
                    
                    )})}   
                    </tbody>
                </table>         
            </div>
        );
    }

}

export default Departments;