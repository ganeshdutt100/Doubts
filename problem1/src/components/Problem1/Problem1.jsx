import React ,{useState , useEffect}from 'react'

const Problem1 = () => {
    const [time, setTime] = useState('')

     useEffect(()=>{
         const time = setInterval(()=>{
         const realTime  = new Date().toLocaleTimeString();
         setTime(realTime)
         },1000)
     },[]);
  return (
    <div>

        <h1>Bharat  <span style={{color:'Yellow'}}>Clock</span> </h1>
        <h3 style={{color:'yellow'}}>{time}</h3>
    </div>
  )
}

export default Problem1