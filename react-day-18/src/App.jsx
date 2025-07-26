import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import './index.css';

function App() {
  const[count, setCount]=useState(0);
  function decHandler(){
    setCount(count-1);

  }
  function incHandler(){
     setCount(count+1);

  }
  function resetHandler(){
    setCount(0);
  }
  return(
    <div className=" w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
      <div className='text-[#0398d4] font-medium text-2xl'>Decrement && Increment  </div>
     
     <div className="bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
      <button onClick={decHandler}>
        -
      </button>
      <div className='bg-red'>
          {count}
      </div>
      <button onClick={incHandler} >
        +
      </button>
     </div>
     <button onClick={resetHandler}>Reset</button>
    </div>
  )
}

export default App
