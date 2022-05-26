
import React, { useEffect, useState } from 'react'

const Timer = () => {

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    // const [hours, setHours] = useState(0);

    var timer ;
    useEffect(() => {
       
       timer = setInterval(() => {
            setSeconds(seconds+1);
            if(seconds===59)
            {
               setMinutes(minutes+1)
               setSeconds(0);
            }   
            
        },1000)

        return () => clearInterval(timer);
    })
 

  return (
    <div>
       <div className='timer-container'>
           <div className='timer'>
                <h1>Timer</h1>
                <h1>{minutes<10 ? "0" + minutes : minutes} : {seconds<10 ? "0" + seconds : seconds}</h1>
           </div>
       </div>
    </div>
  )
}

export default Timer