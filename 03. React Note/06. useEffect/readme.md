## 00. useEffect Rules
```
- useEffect is a way of handling event in React Component, that takes two argument
- first argument is synchronous call back task, second argument is when task will happen
- second argument is an array [] cause it can tiggered with many state's or non state's data
- if second argument is empty then inputed task will happen once
- useEffect uses cause react always monitor virtual DOM, at this time task without useEffect will execute infinity times

```

## 01. Simple Data fetch by useEffect
```js
import { useState, useEffect } from 'react'

export default function App() {
const[userData, setUserdata] = useState([]) // state will take only Array argument, we can do also 'Array'
useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=>res.json())
  .then(data=>setUserdata(data)) // data is invoking state's function and updating state's userData
},[])  // Empty dependency array ensures this runs only once 

 // For data fetching without using useEffect, react DOM will contiously fetch data from API

  return (
    <>
      <h1> Users Data Fetch </h1>
      {userData.map(data=><Users key={data.id} data={data}></Users>)}  {/* must be pass a key=value otherwise console return error */}
      {/* map is traversing userData array creating Users component, with passing Props */}
    </>
  )
}

function Users({data}){
  return(
    <>
     <div style={{display:'block',border:'1px solid purple',borderRadius:'10px',marginTop:'5px'}}> 
      <p style={{display:'inline-block',margin:'10px'}}>Name : {data.name}</p>
      <p style={{display:'inline-block',margin:'10px'}}>Email : {data.email}</p>
     </div>
    </>
  )
}
```
## useEffect with dependency
```js
export default function(){
    const[watchs, setWatchs] = useState([])
    const[CartInState, setCartInState] = useState([])

    // Load products from watches.json that existed in public folder
    useEffect(()=>{
        fetch('watches.json')
        .then(res=>res.json())
        .then(data=>setWatchs(data))
        },[])

    // Load cart id's from LocalDB and Update in state label
    // This effect happen when refresh tab or reopen browser again
    useEffect(()=>{
        // wait until load main data
        if(watchs.length){
            const getStoredCart = getLocalCart()  // get Cart from Local DB
            // Loop will match with id and return product list
            const savedCart = []
            for(const id of getStoredCart){
                const watch = watchs.find(watch=>watch.id == id)
                if(watch){
                savedCart.push(watch)
                }
            }
            setCartInState(savedCart)  // Update loaded localdb cart in state 

        }
    },[watchs])  // This effect is tiggered with watchs, means executive again when any change in watchs
```
