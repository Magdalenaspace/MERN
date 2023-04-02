import logo from './logo.svg';
import './App.css';

// ! In React, components are defined as functions that take in props (input) and return a description of the UI (output) and must start with capital letter

function App() { //<- functional component ->hold. data, api calls, other funcs
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello Dojo!</h1>
        <a
          className="App-link"
          href="https://login.codingdojo.com/dashboard"
          target="_blank"
          rel="noopener noreferrer"
        >
        <ul>
          <li>Learn React!</li>
          <li>Travel!</li>
          <li>Create!</li>
          <li>Discover!</li>
      </ul>
        </a>
      </header>
    </div>
  );
}

export default App; //in order ti use in other files always needs to be exported out
