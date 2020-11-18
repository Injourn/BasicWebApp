import './App.css';
import ExampleComponent from './department/ExampleComponent';
import Departments from './department/Departments';
import Navbar from './NavBar';
import {Route, Switch} from 'react-router-dom'
import EmployeeList from './Employee/EmployeeList';
import {useLocation} from 'react-router-dom';
import DepartmentForm from './department/DepartmentForm';
import EmployeeForm from './Employee/EmployeeForm';

// TODO : Update API Change "Date" to "DateOfJoining"
function App() {
  return (
    
    <div className="App">
      <Navbar active={useLocation().pathname.replace('/','')}/>
      <div className="main">        
        <Switch>
          <Route exact path='/' component={ExampleComponent}/>
          <Route path='/Department' component={props =>
            <div>
              <Departments/>
              <DepartmentForm/>
            </div>}/>
          <Route path='/Employees' component={props =>
            <div>
              <EmployeeList/>
              <EmployeeForm/>
            </div>
          }/>
        </Switch>        
      </div>
    </div>
  );
}

export default App;
