import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


 function HandleClick(){
    let name = prompt('What is your name:')
    alert(`your name is : ${name}`);
 }

  return (
    <>
      <button onClick={HandleClick}>Click Me</button>

    </>

  )
}
