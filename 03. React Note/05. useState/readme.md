## 01. Simple Count App Using React useState
```js
import './App.css'
import { useState } from 'react'
export default function App() {

const[count, setCount] = useState(0) // Zero is ensuring here,
                                    // usState must be in function
                                  // it will take only number argument,
                               // example: for number Number/0, for array Array/[], for str str/'', for object Object/{}

// useState is a abstraction function that return a array 
// first index of array is invoked value and second index is a function 
// function can change invoked value (value can be any data type, str, number, array, object etc)
// Here with a destraction count is define to recive value and setCount is for function

function handleClick(){
  let update=count+1
  setCount(update)   // setCount is updating count value and returnig to React virtual DOM
}

function handleReduece(){
  let update=count-1
  setCount(update)      // setCount is updating count value and returnig to React virtual DOM
}

  return (
    <>
      <h1> Hello from React </h1>
      <h2> Count: {count} </h2>
      <button style={{marginRight:'10px'}} onClick={handleClick}> Increase </button>
      <button style={{marginLeft:'10px'}} onClick={handleReduece}> Reduce </button>
    </>

  )
}
```
## 02. useState with clickHandler with ternary operator
```js
function Countries({country}){
  const{name,flags,population}=country

  const[isVisit, setVisit] = useState(false)
  const handleVisit = () =>{
    setVisit(!isVisit)
  }
  
  return(
    <>
      <div className='country-box'>
        <p>Name : {name.common}</p>
        <p>Population : {population}</p>
        <img style={{width:'100px'}} src={flags.png} alt="" />
        <p>{isVisit && 'Going'}</p>
        <button onClick={handleVisit}>Visit</button> {isVisit ? ' Visited':' Want to go'}
      </div>
    </>
  )
}
```
