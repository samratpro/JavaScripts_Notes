## 01. Architecture
```
src-|
    |- App.css
    |- App.jsx
    |- anotherFile.js
    |- index.css
    |- main.jsx
```

## 02. Export Import
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
