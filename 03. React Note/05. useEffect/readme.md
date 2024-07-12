## 01. Simple Data fetch by useEffect
```js
import './App.css'
import { useState } from 'react'
import { useEffect } from 'react'

export default function App() {
const[userData, setUserdata] = useState([]) 
useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=>res.json())
  .then(data=>setUserdata(data))
},[])

  return (
    <>
      <h1> Users Data Fetch </h1>
      {userData.map(data=><Users data={data}></Users>)}
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
