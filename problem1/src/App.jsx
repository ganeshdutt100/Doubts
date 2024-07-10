import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Problem1 from './components/Problem1/Problem1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Problem1/>
    </>
  )
}

export default App
