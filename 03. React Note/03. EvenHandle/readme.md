
## Even Handle without Arguments
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
## Even Handle with Arguments
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
