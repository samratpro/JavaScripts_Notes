## Toggle Navigation
## Features
```
- Simple Navbar that will hide and show toggle when device is Mobile version
- When menu opens icon become cross icon from Menu icon
```
## Dependecy
```
- useState
- useEffect
- Click event

## App.js
```js
import PropTypes from 'prop-types'
import { useState } from 'react'
import './App.css'
import Navbar from './component/navbar'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <h1>Hello</h1>
    </>
  )
}
export default App
```
## component/navbar.jsx
```js
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const routes = [
    {id:1, path: '/', component: 'Home'},
    {id:2, path: '/about', component: 'About'},
    {id:3, path: '/contact', component: 'Contact'},
    {id:4, path: '*', component: 'NotFound'},
  ];


export default function Navbar(){
    const[open, setOpen] = useState(true);

    return(
        <>
        <nav className="bg-purple-800">
            <div onClick={()=>{setOpen(!open)}} className=" py-2 px-3 md:hidden">   {/* Menu section */}
                <AiOutlineClose className={`text-2xl ${!open ? '':'hidden'}`}></AiOutlineClose > {/* close icon */}
                <HiMenu className={`text-2xl ${open ? '':'hidden'}`}> </HiMenu>  {/* Menu icon */}
            </div>
           <div className={`${!open?'':'hidden'} md:flex`}>  {/* Menu items */}
            {
                routes.map(route=><li key={route.id} className="list-none mx-3 my-2"><a href={route.path}> {route.component} </a></li>)
                }
           </div>
 
        </nav>
        </>
    )
}
```


