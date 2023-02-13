import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Navbar from "./common/Navbar";

export default function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Navbar />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </main>

        <footer>
          <p>Footer goes here.</p>
        </footer>
      </div>
    </Router>
  );
}
