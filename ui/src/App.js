import logo from './logo.svg';
import './App.css';
import ExampleComponent from './department/ExampleComponent';
import Departments from './department/Departments';
import DepartmentForm from './department/DepartmentForm';
import Navbar from './NavBar';
import {Route, Switch} from 'react-router-dom'
import EmployeeList from './Employee/EmployeeList';
import EmployeeForm from './Employee/EmployeeForm';
import {useLocation} from 'react-router-dom';

// TODO : Update API Change "Date" to "DateOfJoining"
function App() {
  return (
    
    <div className="App">
      <Navbar active={useLocation().pathname.replace('/','')}/>
      <div>        
        <Switch>
          <Route exact path='/' component={ExampleComponent}/>
          <Route path='/Department' component={Departments}/>
          <Route path='/Employees' component={EmployeeList}/>
        </Switch>        
      </div>
    </div>
  );
}

export default App;
