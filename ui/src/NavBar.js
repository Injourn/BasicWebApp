import React from 'react';
import {Link} from 'react-router-dom';


class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name : this.props.active,            
        };        
    }
    render(){        
        return(
            <div className="nav">
                <Link to="/" onClick={(event) => {this.changeActiveElement("home")}}><p className={this.activeElement("home")}>Home</p></Link>
                <Link to="/department" onClick={(event) => {this.changeActiveElement("department")}}><p className={this.activeElement("department")}>Departments</p></Link>
                <Link to="/employees" onClick={(event) => {this.changeActiveElement("employee")}}><p className={this.activeElement("employee")}>Employees</p></Link>
            </div>

        )
    }
    changeActiveElement(element){
        this.setState({name : element});
    }
    activeElement(name){
        if(name === this.state.name)
            return "active";
        else return "";
    }

}

export default Navbar;