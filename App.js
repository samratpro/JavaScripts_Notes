import './App.css';                                   // Add CSS file with App
import Home from './pages/home'                       // Import external file's component     

function App() {
  return (
    <div className="App">                             // Everyrhing should be under ` App ` class
    
        <h1 className="simple">Hello React</h1>

         <Home />                                     // Placing Home function component

    </div>
  );
}

export default App;                                   // export default ` function name `
