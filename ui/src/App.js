import logo from './logo.svg';
import './App.css';
import ExampleComponent from './department/ExampleComponent';
import Departments from './department/Departments';
import DepartmentForm from './department/DepartmentForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload please :).
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ExampleComponent name="There"/>
        <Departments/>
        <DepartmentForm />
      </header>
    </div>
  );
}

export default App;
