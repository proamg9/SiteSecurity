import React, { useEffect, useState } from "react";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

const arr = [{ firstname: "jon", secondname: "andy", id: "769" }];

{
  /*const ListItems = () => {
  return (
    <table style={{ border: "1px solid black" }}>
      <tbody>
        <tr>
          <th>test </th>
          <td style={{ color: "black" }}>"name" </td>
          <td> "smith"</td>
        </tr>
        <>
          {arr.map((item, i) => {
            return (
              <tr key={item.id}>
                <td> {i}</td>
                <td> {item.id} </td>
              </tr>
            );
          })}
        </>
      </tbody>
    </table>
  );
};*/
}

function App() {
  const [data, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/results")
      .then((res) => res.json())
      .then(
        (res) => {
          //  setIsLoaded(true);
          setItems(res);
          console.log(res);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          //  setIsLoaded(true);
          //  setError(error);
        }
      );
  }, []);

  //if (data) console.log(JSON.stringify(data));

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        {/*  <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"></img>
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
        </header>*/}
      </div>
    </Router>
  );
}

export default App;
