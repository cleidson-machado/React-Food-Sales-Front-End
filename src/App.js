import logo from "./logo.svg";
import "./App.css";

function App() {
  //## React project very slow npm run start
  //https://stackoverflow.com/questions/71770298/npm-start-taking-way-too-long
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>By Cleidson P. Machado</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
