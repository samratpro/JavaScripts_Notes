## App.jsx
```js
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
## evenHandle.jsx
```js
export default function HandleClick(){
    let name = prompt('What is your name:')
    alert(`your name is : ${name}`);
}
```
