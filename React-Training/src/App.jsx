import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Index1 from './components/React1';
import DateItem from './components/DateItem.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <br />
        <p>
          <code>hello</code> 
        </p> <br />
       
      </div>

      
      <Index1 name="Opinder Singh" ></Index1> 
      <DateItem day="19" year="2004"></DateItem> 
      <Index1 name="xyz"></Index1> 
      <DateItem day="20" year="2024"></DateItem> 
      
    </>
  )
}

export default App
