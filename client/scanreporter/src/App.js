import React, {useEffect,useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [data, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/results')
      .then(res => res.json())
      .then(
        (result) => {
        //  setIsLoaded(true);
          setItems(result.data);
          console.log(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
        //  setIsLoaded(true);
        //  setError(error);
        }
      )
  }, []);


  console.log(JSON.stringify(data));
  console.log(data);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <form className="form-one">
  First name:
  <input type="text" name="firstname"></input><span />
  Last name:
  <input type="text" name="lastname"></input>
    </form>

    </div>
  );
}

export default App;
