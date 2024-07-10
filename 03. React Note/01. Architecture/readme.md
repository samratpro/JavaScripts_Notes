## 01. Architecture
```
src-|
    |- App.css
    |- App.jsx
    |- anotherFile.js
    |- index.css
    |- main.jsx
```
## 02. Code Fundamental
```js
import './App.css';                                   // Add CSS file with App
import Home from './pages/home'                       // Import external file's component     
function App() {
  return (
    <div className="App">                             // Everyrhing should be under ` App ` class
        <h1 id="simple">Hello React</h1>              // id is id but class is className
         <Home/>                                      // Placing Home function component
         <Home></Home>                                // Another way Placing Home function component
    </div>
  );
}
export default App;                                   // export default ` function name `
```
## 03. Export Import
### Import file
```js
// App.jsx
import './App.css'
import AnotherFun from './another'
function App() {

  return (
    <>
      <h1> Hello from App JSX </h1>
      <AnotherFun></AnotherFun>
    </>

  )
}


export default App
```
### Export file
```js
//another.jsx
export default function AnotherFun(){

    return(
        <>
          <h2> Hello from Another </h2>
        </>

    )

}

/*
function AnotherFun(){
   return <>Hello from Another</>
}
export default AnotherFun
*/
```
