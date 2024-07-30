## 00. Rules about props passing
```
- For list elements must be pass a key={value}, each value should be unique
- As a props we can pass a variable, array, object, or a function
- props will go by default as a Object
- props can be recive general function (props) or with Object destructing ({arg1, arg2})
- PropTypes used to debuge or define data type

```
## 01. Simple Props
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
// or const {name} = Props;
    return(
          <h2> Hello from  File and {name} Props </h2>
        )}
```

## 02. Pass Object as Props
```js
// Send props
// App.jsx
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
  // or const {name, age} = data;
    return(
        <>
          <h2> Name : {data.name} </h2>
          <h2> Age : {data.age} </h2>
        </>
    )
}
export default AnotherFun;
```
## 03. Pass props as a function
```js
// App.jsx
export default function App() {
  const handleVisitedCountry = (country) =>{
            ....
  }
return (
    <>
      <Countries handleVisitedCountry={handleVisitedCountry} > </Countries>
    </>
  )
}
// Country.jsx
function Countries({country, handleVisitedCountry}){
  return(
    <>
        <button onClick={()=>handleVisitedCountry(arg)}>Mark Visited</button>
    </>
  )
}
```
## 04. Props Drilling Simple Way
```js
// Props drilling is a term to handle props from multi root to child level
// Root - Level
// App.jsx
export default function App() {
return (
    <>
      <Countries name={'BD'} population={'100K'} > </Countries>
    </>
  )
}

// Child of Root - Level
export default function Countries({name, population}) {
return (
    <>
      <Countries name={name} population={population} > </Countries>
    </>
  )
}

// Child - Level
export default function Country({name, population}) {
return (
    <>
      <Country name={name} population={population} > </Country>
    </>
  )
}
```
## 05. Props Drilling Standered Way
```js
// Props drilling is a term to handle props from multi root to child level
// Root - Level
// App.jsx
export default function App() {
return (
    <>
      <Countries name={'BD'} population={'100K'} > </Countries>
    </>
  )
}

// Child of Root - Level
export default function Countries(Props) {
return (
    <>
      <Countries {...Props} > </Countries>
    </>
  )
}

// Child - Level
export default function CountryData({name, population}) {
return (
    <>
      <CountryData name={name} population={population} > </CountryData>
    </>
  )
}

```

