import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'


import Navbar from './components/Navbar'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'


function App() {



  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/> <Home/></> 
    },
    {
      path: "/about",
      element: <><Navbar/> <About/></> 
    },
    {
      path: "/contact",
      element: <><Navbar/> <Contact/></> 
    },
  ]);

  const [count, setCount] = useState(0)

  return (
    <>
    <RouterProvider router={router} />
      
    </>
  )
}

export default App
