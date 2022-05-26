
import React, { useEffect, useState } from 'react'
import Styles from "./Timer.module.css";

const Timer = () => {

    const [time, setTime] = useState(0);
    const [timerOn, setTimerOn] = useState(false);

    useEffect(() => {
       let interval = null;
       
       if(timerOn)
       {
         interval = setInterval(() => {
          setTime(prevTime => prevTime+10)
         }, 10);
       }else{
         clearInterval(interval);
       }

       return () => clearInterval(interval);
    }, [timerOn]);
 

  return (
    <div> 
       <div className={Styles.timerContainer}>
           <span className={Styles.timer}>{("0" + Math.floor((time/60000) % 60)).slice(-2)}:</span>
           <span className={Styles.timer}>{("0" + Math.floor((time/1000) % 60)).slice(-2)}:</span>
           <span className={Styles.timer}>{("0" + ((time/10) % 100)).slice(-2)}</span>
       </div>
       <div>
          {!timerOn && time===0 && (
            <button className={Styles.btn} onClick={() => setTimerOn(true)}>Start</button>
          )}
          {timerOn && (
            <button className={Styles.btn} onClick={() => setTimerOn(false)}>Stop</button>
          )}   
          {!timerOn && time !== 0 && (
            <button className={Styles.btn} onClick={() => setTimerOn(true)}>Resume</button>
          )}   
          {!timerOn && time>0 && (
            <button className={Styles.btn} onClick={() => setTime(0)}>Reset</button>
          )}   
       </div>
    </div>
  )
}

export default Timer