import './App.css';
import ExampleComponent from './department/ExampleComponent';
import Departments from './department/Departments';
import Navbar from './NavBar';
import {Route, Switch} from 'react-router-dom'
import EmployeeList from './Employee/EmployeeList';
import {useLocation} from 'react-router-dom';
import DepartmentForm from './department/DepartmentForm';
import EmployeeForm from './Employee/EmployeeForm';
import EmployeePage from './Employee/EmployeePage';

// TODO : Update API Change "Date" to "DateOfJoining"
function App() {
  var page = useLocation().pathname.split("/");
  var Id;
  if(page.length > 2 && page[1].toLowerCase() == "employees")
    Id = page[2];
  console.log(Id);
  return (
    
    <div className="App">
      <Navbar active={useLocation().pathname.replace('/','')}/>
      <div className="main">        
        <Switch>
          <Route exact path='/' component={ExampleComponent}/>
          <Route exact path='/Department' component={props =>
            <div>
              <Departments/>
              <DepartmentForm/>
            </div>}/>
          <Route exact path='/Employees' component={props =>
            <div>
              <EmployeeList/>
              <EmployeeForm/>
            </div>
          }/>
          <Route path='/Employees/' component={props => <EmployeePage id={Id}/>}/>
        </Switch>        
      </div>
    </div>
  );
}

export default App;
