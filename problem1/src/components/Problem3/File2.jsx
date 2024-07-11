import React ,{useContext} from 'react'
import File3 from './File3'
import { counterContext } from './contextAPI/context'

const File2 = () => {

    const value  = useContext(counterContext)
  return (
    <div>
        File 2 and import file file 3 : <button onClick={()=>value.setfirst((count)=>(count+1))} >{value.first} </button>  <span><File3  /></span>
    </div>
  )
}

export default File2