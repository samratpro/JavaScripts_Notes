
## Simple Props
```js
// Send props
// App.jsx
import './App.css'
import AnotherFun from './another'
export default function App() {
  return (
    <>
      <h1> Hello from App JSX </h1>
      <AnotherFun name="Samrat" ></AnotherFun>
    </>
  )
}
```
```js
// Recive Props
// another.jsx
export default function AnotherFun(Props){         // Props is just an object argument
    return(
          <h2> Hello from  File and {Props.name} Props </h2>
        )}
```
```js
// Recive Props with destructure
// another.jsx
export default function AnotherFun({name}){      // props argument by defaut a object type so need to destructure
    return(
          <h2> Hello from  File and {name} Props </h2>
        )}
```

## Pass Object as Props
```js
// Send props
// App.jsx
import './App.css'
import AnotherFun from './another'
export default function App() {
  return (
    <>
      <h1> Hello from App JSX </h1>
      <AnotherFun data={{name:"Samrat",age:25}} ></AnotherFun>
    </>
  )
}
```
```js
// Recive Props with destructure
// another.jsx
function AnotherFun({data}){
    return(
        <>
          <h2> Name : {data.name} </h2>
          <h2> Age : {data.age} </h2>
        </>
    )
}
export default AnotherFun;
```


