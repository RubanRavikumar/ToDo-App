import "./App.css";
import React, {useLayoutEffect } from "react";
import Todo from "./Pages/Todo";
import { Routes, Route, Link } from "react-router-dom";
function App() {
   useLayoutEffect(() => {
    console.log("Layout Effect");
  }, []);

  return (
    <div className="App">
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">Navbar</span>
          <ul className="nav">
            <Link to="/todo" className="nav-item">
              <p>Todo App</p>
            </Link>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/todo" Component={Todo} />
      </Routes>
    </div>
  );
}

export default App;
