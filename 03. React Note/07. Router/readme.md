## App.js
```js
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Home from './pages/home'
import About from './pages/about';
import Nav from './pages/nav'
import Dashboard from "./pages/Dashboard";

const isLoggedIn = false; // mock auth

function ProtectedRoute({ children }) {
  return isLoggedIn ? children : <Navigate to="/" />;
}

function App() {
  return (
    <div className="App">
         <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </Routes>
          </BrowserRouter>    
    </div>
  );
}

export default App;
```
## home.js
```js
import React from "react";     // Importing ` React `

import '../App.css'            // Importing CSS file `.. ` two dot means one back folder

function Home(){
    return(
          <div className="container">
             <h1> This data from Home Page </h1>
          </div>
    )
}
export default Home            // export default ` function name `
```
## About.js (Access route param)
```js
import { useParams } from "react-router-dom";
import React from "react";

export default function About() {
  const { id } = useParams();
  return <h2>About Page – ID: {id}</h2>;
}
```
## nav.js
```js
import React from "react";
import { Link } from "react-router-dom";   // Link is for Router instead of ` a ` tag

function Nav(){
    return(  
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to='/'> Navbar </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home Page</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/about'>About</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </div>
                </div>
            </nav>   
    )
}

export default Nav;
```


