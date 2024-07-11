import React ,{useState} from 'react'
import File1 from './File1'
import { counterContext } from './contextAPI/context'

const Problem3 = () => {
  const [first, setfirst] = useState(0)
  return (
    <div>
    <counterContext.Provider value={{first,setfirst}}>
    <button onClick={()=>setfirst(first+1)}>Value :   {first}</button>
    <File1 />
    </counterContext.Provider>
    

    </div>
  )
}

export default Problem3 