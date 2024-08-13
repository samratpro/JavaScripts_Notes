## 01. Simple if else
```js
function Users({condition, data}){
  if(condition==true){
    return(<>Work Done : {data}</>)
  }else{
    return(<>Uncompleted : {data}</>)
  }
}
```
## 02. Simple if without else
```js
function Users({condition, data}){
  if(condition==true){
    return(<>Work Done : {data}</>)
  }
  return(<>Uncompleted : {data}</>)
}
```
## 03. Ternary if operator
```js
// if condition==true 'Work Done' without else
function Users({condition, data}){
  return(
    <>
    {condition==true && 'Work Done'} {data}
    </>
  )
}
```
## 04. Ternary if not operator
```js
// if condition==false 'Uncompleted', if condition==true nothing show
function Users({condition, data}){
  return(
    <>
    {condition==false || 'Uncompleted'} {data}
    </>
  )
}
```
## 05. Using ternary if, else operator
```js
// if condition true 'work done' else 'Uncompleted', express in one line
function Users({condition, data}){
  return(
    <>
    {condition==true ? 'Work Done':'Uncompleted'} {data}
    </>
  )
}
```
## 07. Conditional CSS Rendering
```js
// 01. Example 1
export default function Navbar(){
    const[open, setOpen] = useState(true);
    return(
        <>
        <nav>
            <div onClick={()=>{setOpen(!open)}}>
                <AiOutlineClose className={`text-2xl ${open==true ? '':'hidden'}`}></AiOutlineClose >
                <HiMenu className={`text-2xl ${open==false ? '':'hidden'}`}> </HiMenu> 
            </div>
        </nav>
        </>
    )
}

// 02. Example 2
function Countries({country}){
  const[isVisit, setVisit] = useState(false)

  const handleVisit = () =>{
    setVisit(!isVisit)
    !isVisit ? setVistText('Visited') : setVistText('Not Visited')
  }

  return(
    <>
      <div className='country-box' style={{color: isVisit?'red':'white'}}>
        <p>Name : {name.common}</p>
        <button onClick={handleVisit}>{visitText}</button> {isVisit ? ' Visited':' Want to go'}
      </div>
    </>
  )
}

```




