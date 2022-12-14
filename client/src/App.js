import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Browse from "./Components/Browse";
import MyLib from "./Components/MyLib";
import Wishlist from "./Components/Wishlist";

function App() {
  return (
    <Router>
    <div className="app">
      <h1>VINYLIB</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Browse">Browse Vinyls</Link></li>
          <li><Link to="/MyLib">Library</Link></li>
          <li><Link to="/Wishlist">Wishlist</Link></li>
        </ul>
      </nav>
        <Routes>
          <Route exact path='/' element ={<Home />}></Route>
          <Route exact path='/Browse' element={<Browse />}></Route>
          <Route exact path='/MyLib' element={<MyLib />}></Route>
          <Route path='/Wishlist' element = {<Wishlist />}></Route>
        </Routes>
    </div>
    </Router>
  );
}

export default App;
