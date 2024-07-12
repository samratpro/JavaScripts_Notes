## 01. Simple Data fetch by useEffect
```js
import './App.css'
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
      {userData.map(data=><Users data={data}></Users>)}  
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
