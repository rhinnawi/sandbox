import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>HEADER GOES HERE</h1>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </main>

        <footer></footer>
      </div>
    </Router>
  );
}

export default App;
