## 00. Rules about even handling in large project
```
- When a even work for multiple section then even will declear in root level of all section
- If an even triggered in child but executes or change in root then even declear in root, child consume as a props passing
- In general we can declear even as a component or utilities file and use it after importing
```

## 01. Even Handle without Arguments
```js
// App.jsx
import './App.css'
import HandleClick from './evenHandles'
function App() {
  return (
    <>
      <button onClick={HandleClick}>Click Me</button>
    </>
  )
}
export default App
```
```js
// evenHandle.jsx
export default function HandleClick(){
    let name = prompt('What is your name:')
    alert(`your name is : ${name}`);
}
```
## 02. Even Handle with Arguments
```js
// App.jsx
import './App.css'
import HandleClick from './evenHandles'
function App() {
  return (
    <>
     <button onClick={()=>HandleClick('Biswas')}>Click Me</button>
    </>
  )
}
export default App
```
```js
// evenHandle.jsx
export default function HandleClick(arg){
    let name = prompt('What is your name:')
    alert(`your name is : ${name} ${arg}`);
}
```
## 03. Handle Even from Passed argument as a function
```js
// App.jsx
export default function App() {
  const handleVisitedCountry = (country) =>{
        let findCountry = visitedCountry.includes(country) // check exist or dosen't exist
        findCountry || setVisited([...visitedCountry, country]) // push visited  country in reactive way
  }
return (
    <>
      {countryList.map(country=> <Countries handleVisitedCountry={handleVisitedCountry} country={country}> </Countries>)}
    </>
  )
}
// Country.jsx
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
        {/* <button onClick={()=>handleVisitedCountry(name.common)}>Mark Visited</button> */}
        <button onClick={handleVisit}>{visitText}</button> {isVisit ? ' Visited':' Want to go'}
      </div>
    </>
  )
}
```
