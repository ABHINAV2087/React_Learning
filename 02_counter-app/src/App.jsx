import { useState } from 'react'

import './App.css'

function App() {
 

  let [counter,setCounter] = useState(15)

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1 );
    }
  }
  const removeValue = () => {
    
    if (counter > 0) {
      setCounter(counter - 1 );
    }
  }
  console.log(counter);
  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter Value : {counter}</h2>
      <hr />
      <br />
      <button onClick={removeValue} >Remove</button>
      <button onClick={addValue}>Add </button>
    </>
  )
}

export default App
