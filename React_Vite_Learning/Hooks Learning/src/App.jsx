import { useState } from 'react'
import Scroll from './Scroll'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  //count is the value
  // setCount is the function where we will write logic

  return (
    <>
      <div className='bg-green-400 rounded-2xl'>
        <h1>Counter = {count}</h1>
        <div className='snap-x w-1/12 overflow-hidden'> 
        <h2 className='snap-center'>creating a project where COUNTER MUST BE GREATER THAN OR EQUAL TO 0</h2>
        </div>
        <div className="card">
          <button onClick={ ()=> setCount(++count)} className='bg-white rounded-xl'>
            Add value
          </button>
          <button onClick={()=>{
            if(count>=1){
              // count--;
              setCount(--count);
            }
          }} className='bg-white rounded-xl hover:bg-blue-400 shadow-lg transition-transform'>
            decrease value
          </button>
        </div>
        <Scroll/>
        
      </div>
    </>
  )
}

function func(){

}
export default App
