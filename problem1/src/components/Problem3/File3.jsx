import React, { useContext } from 'react'
import { counterContext } from './contextAPI/context'


const File3 = () => {
    const value = useContext(counterContext)
  return (
    <div>File3 <button onClick={()=> value.setfirst((count)=> count+1)} >Value : {value.first} </button> </div>
  )
}

export default File3