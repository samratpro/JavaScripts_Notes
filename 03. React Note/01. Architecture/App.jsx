import './App.css';                                   // Add CSS file with App
import Home from './pages/home'                        // Import external file's component     
function App() {
 const style = {border:'1px solid purple',borderRadius:'10px',padding:'5px'}   // internall CSS uses as object, and instead hype '-' uses camelCase
  return (
    <></>  // blank wrapper can be used to wrapping mutiple html component
    <div className="App">                                      // Everyrhing should be under ` App ` class
        <h1 style={style} >Hello React</h1>                    // id is id but class is className
         <h2 style={{paddingTop:'20px'}}> H2 Hello </h2>       // {{}} first curly bracket is for JSX second is for object
         <Home/>                                               // Placing Home function component
         <Home></Home>                                         // Another way Placing Home function component
    </div>
  );
}
export default App;                                   // export default ` function name `
