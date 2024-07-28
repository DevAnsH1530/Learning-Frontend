import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  //count is the value
  // setCount is the function where we will write logic

  return (
    <>
      <h1>Counter = {count}</h1>
      <h2>creating a project where COUNTER MUST BE GREATER THAN OR EQUAL TO 0</h2>
      <div className="card">
        <button onClick={()=>{
          setCount(count+1);
        }}>
          Add value
        </button>
        <button onClick={()=>{
          if(count>=1){
            count--;
            setCount(count);
          }
        }}>
          decrease value
        </button>
        {/* <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
      </div>
    </>
  )
}

function func(){

}
export default App
