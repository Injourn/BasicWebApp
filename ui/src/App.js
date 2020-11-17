import logo from './logo.svg';
import './App.css';
import ExampleComponent from './department/ExampleComponent';
import Departments from './department/Departments';
import DepartmentForm from './department/DepartmentForm';
import Navbar from './NavBar';
import EmployeeList from './Employee/EmployeeList';
import EmployeeForm from './Employee/EmployeeForm';
// TODO : Update API Change "Date" to "DateOfJoining"
function App() {
  return (
    
    <div className="App">
      <Navbar active="Home"/>
      <div>
        <EmployeeList/>
        <EmployeeForm/>      
        <Departments/>
        <DepartmentForm />
      </div>
    </div>
  );
}

export default App;
