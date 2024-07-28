## Watch Shop
## Features
```
- fetch all watches data from watches.json file, 
- Rendering all country data as grid layout
- Conditional Rendering visited or not visited country with ternary operator
- handleVisit even for visited or not visited country
```
## Dependecy
```
- useState
- useEffect
- props passing
- handleVisit
- handleVisitedCountry

```
## public/watches.json
```json
[
    {
        "id":1,
        "name":"Samsung",
        "price":100,
        "country":"South Korea"
    },
    {
        "id":2,
        "name":"Apple",
        "price":500,
        "country":"USA"
    }
]
```
## App.jsx
```js
import './App.css'
import Wathces from './component/Wathces'

function App() {
  return (
    <>
     <Wathces></Wathces>
    </>
  )
}
export default App;
```
## component/Watch.jsx
```js
import './Watch.css'
import {useState} from 'react'
function Watch({watch, handleAddCart}){
    const{name, price, country} = watch
    return(
        <div className={'watch-box'}>
            <h4> Name : {name} </h4>
            <p>Country : {country}</p>
            <p>Price : ${price}</p>
            <button onClick={()=>handleAddCart(watch)}>Buy Now</button>
        </div>
    )
}
export default Watch;
```
## component/Watches.jsx
```js
import { useState, useEffect } from "react"
import Watch from "./Watch"
import './Watch.css'
import { saveIdInLocal, getLocalCart, deleteInLocal } from "../utils/localdb" 

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
    },[watchs])  // This effect is tiggered with main products State

    // function decleared in parent component 
    // that will pass as props in Single Watch component
    const handleAddCart = watch => {
            // Update cart in state label
            setCartInState([...CartInState,watch])  
            console.log('handleAddCart CartInState : ', CartInState)
            // Also save cart id in Local db
            saveIdInLocal(watch.id)  

        }
    
    const handleCartDelete = id =>{
            deleteInLocal(id)
            const updateCart = CartInState.filter(data=>data.id!=id)
            setCartInState(updateCart);
            console.log('handleCartDelete updateCart : ', updateCart)
            console.log('handleCartDelete  CartInState : ', CartInState)
        }
        
    return(
        <>
            <h1> {watchs.length} Watches </h1>
            <span className={'item'}>items : {CartInState.length}</span>
            <ul id={'cart-list'}>
               {CartInState.map(data=>
               <li key={data.id}> 
                {data.name}
                <button onClick={()=>handleCartDelete(data.id)}>
                    Remove
                 </button>
                </li>)
                }
            </ul>

            <span className={'item'}> Total Price :  </span>

            <div className='watch-container'>
            {watchs.map(watch=>
                <Watch 
                    key={watch.id} 
                    watch={watch}
                    handleAddCart={handleAddCart}
                ></Watch>)}
        </div>
        </>
    )
}
```
## component/Watch.css
```css
.watch-container{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 30px;
    margin-bottom: 200px;
}

.watch-box{
    border:1px solid purple;
    border-radius: 10px;
    margin: 5px;
    padding: 10px;
}
.item{
    border:1px solid purple;
    padding: 10px;
    margin-top: 150px;
    border-radius: 8px;
    padding-right: 20px;
}
#cart-list{
    text-align: left;
    list-style-type: disclosure-closed;
    margin: 30px 30px;
}

.watch-box button{
    margin-bottom: 20px;
    }
```
## utils/localdb.js
```js

// Return cart object from Local DB
function getLocalCart(){
    let existingCart = localStorage.getItem('cart')
    if(existingCart){
        return JSON.parse(existingCart) // return after parsing string to Array or object
    }
    return []
}  // retrun after creating new or existing cart


// Save product Id in cart object
function saveIdInLocal(Id){
    const cartList = getLocalCart()          // Get existing or empty cart list
    cartList.push(Id)                 // push id 
    localStorage.setItem('cart', JSON.stringify(cartList))  
    // set cart list again as string in localdb
}


// This function will iterate and store all unmatched items with matching of inputed Id
// Then it will update localdb cart object with all unmatched items
// this way delete data from local db
function deleteInLocal(Id){
    const cartList = getLocalCart()
    const updateCartList = cartList.filter(idx=>idx!=Id)
    localStorage.setItem('cart', JSON.stringify(updateCartList))
    }

// function deleteInLocal(Id){
//         const cartList = getLocalCart()
//         cartList.delete(Id)
//         localStorage.setItem('cart', JSON.stringify(cartList))
//         }

export {saveIdInLocal, getLocalCart, deleteInLocal}
```

