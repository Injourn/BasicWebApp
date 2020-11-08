import logo from './logo.svg';
import './App.css';
import ExampleComponent from './department/ExampleComponent';
import Departments from './department/Departments';
import DepartmentForm from './department/DepartmentForm';
import Navbar from './NavBar';

function App() {
  return (
    
    <div className="App">
      <Navbar/>
      <div>
        <ExampleComponent name="There"/>
        <Departments/>
        <DepartmentForm />
      </div>
    </div>
  );
}

export default App;
