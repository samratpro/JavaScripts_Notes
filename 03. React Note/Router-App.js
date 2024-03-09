import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home'
import About from './pages/about';
import Nav from './pages/nav'

function App() {
  return (
    <div className="App">
         <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
          </BrowserRouter>    
    </div>
  );
}

export default App;
