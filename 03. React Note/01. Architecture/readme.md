## 01. Architecture
- React compailer continuously runs DOM and React DOM Code, if see any change it update instantly, like Desktop application 
- For this asynchronous behaviour we can't directly handle data update, or data fetching without using react dependency
- Example: If we fetch data without using react useEffect hook/method react compailer continuously fetch data from API
## Special Note : All react component function name must be start with capital letter
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
import Home from './pages/home'                        // Import external file's component     
function App() {
 const style = {border:'1px solid purple',borderRadius:'10px',padding:'5px'}
 // internall CSS uses as object, and instead hype '-' uses camelCase
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
