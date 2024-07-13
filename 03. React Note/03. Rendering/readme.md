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




