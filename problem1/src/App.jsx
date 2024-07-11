import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Problem1 from './components/Problem1/Problem1'
import Problem2 from './components/Problem2/Problem2'
import Problem3 from './components/Problem3/Problem3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Problem1/> */}
     {/* <Problem2/> */}
     <Problem3/>
    </>
  )
}

export default App
