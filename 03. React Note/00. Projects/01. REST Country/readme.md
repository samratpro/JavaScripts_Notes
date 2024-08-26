# REST Country
## Features

- fetch all country data from ` https://restcountries.com/v3.1/all `
- Rendering all country data as grid layout
- Conditional Rendering visited or not visited country with ternary operator
- handleVisit even for visited or not visited country

## Dependecy

- useState
- useEffect
- props passing
- handleVisit
- handleVisitedCountry


## App.jsx
```js
import './App.css'
import './Country.css'
import { useState, useEffect } from 'react'

// root app comonent
export default function App() {

  const[countryList, setCountry] = useState([])
  const[visitedCountry, setVisited] = useState([])

  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>setCountry(data)) // update data in countryList state
  },[])  // calling add countries data 


  // function decleared in parent component 
  // that will pass as props in Single Countries  component
  const handleVisitedCountry = (country) =>{
        let findCountry = visitedCountry.includes(country) // check exist or dosen't exist
        findCountry || setVisited([...visitedCountry, country]) // push visited  country in reactive way
        // ternary logic will update visitedCountry State when ensure dosen't exist in visited
  }

  return (
    <>
      <h1> REST Countries </h1>
      <p>Visited Country Count : {visitedCountry.length} </p>
      <h3>Visited Countries:</h3>
      <ul>
        {visitedCountry.map(
          country=>
          <li>
            {country}
          </li>
          )}
      </ul>
      <div className='country-root'>
        {countryList.map(
          country=>
          <Countries 
            key={country.cca2} 
            handleVisitedCountry={handleVisitedCountry} 
            country={country}
          >                                                      
          </Countries>)
          }
      </div>
    </>

  )
}


// Child Countries component
function Countries({country, handleVisitedCountry}){
  const{name,flags,population}=country
  const[isVisit, setVisit] = useState(false)
  const[visitText, setVistText] = useState('Not Visited')

  const handleVisit = () =>{
    setVisit(!isVisit)
    !isVisit ? setVistText('Visited') : setVistText('Not Visited')
    handleVisitedCountry(name.common)
  }

  return(
    <>
      <div className='country-box' style={{color: isVisit?'red':'white'}}>
        <p>Name : {name.common}</p>
        <p>Population : {population}</p>
        <img style={{width:'100px'}} src={flags.png} alt="" />
        {/* <button onClick={()=>handleVisitedCountry(name.common)}>Mark Visited</button> */}
        <button onClick={handleVisit}>{visitText}</button> {isVisit ? ' Visited':' Want to go'}
      </div>
    </>
  )
}
```
