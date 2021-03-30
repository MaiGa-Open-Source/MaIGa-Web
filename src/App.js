import './App.css';
import { ClickExample } from './example/click_sample';


const element = <Welcome name="Sara" />;

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {element}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ClickExample />
      </header>
    </div>
  );
}

export default App;
