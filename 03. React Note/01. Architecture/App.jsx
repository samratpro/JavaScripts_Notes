import './App.css'
import HandleClick from './evenHandles'
import test from './another'
import Test from './another'
import AnotherFun from './another'
function App() {

  return (
    <>
      <h1> Hello from App JSX </h1>
      <AnotherFun></AnotherFun>
      <button onClick={HandleClick}>Click Me</button>

    </>

  )
}


export default App
