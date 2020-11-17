import React from 'react';

class Navbar extends React.Component{
    render(){
        return(
            <div className="nav">
                <a href="#" className={this.activeElement("Home")}>First</a>
                <a href="#" className={this.activeElement("Department")}>Second</a>
                <a href="#" className={this.activeElement("Employee")}>Third</a>
            </div>

        )
    }
    activeElement(name){
        if(name === this.props.active)
            return "active";
        else return "";
    }

}

export default Navbar;