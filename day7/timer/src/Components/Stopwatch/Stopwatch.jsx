import React, { useRef, useState } from "react";
import styles from "./Stopwatch.module.css";

const Stopwatch = ({isVisible}) => {
    const [time, setTime] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const refTimer = useRef(null);

    if ( !isVisible ) return null;
    
    const startTimer = () => {
        if ( refTimer.current ) return;
        setIsActive(true);
        refTimer.current = setInterval(()=> {
            setTime( prev => prev+1);
        }, 10);
    }

    const stopTimer = () => {
        setIsActive(false);
        if ( !refTimer.current ) return;
        clearInterval(refTimer.current);
        refTimer.current = null;
    }

    const resetTimer = () => {
        stopTimer();
        setTime(0);
    }

    return(
        <div className={styles.main}>
                <div className={styles.time}>
                    <div className={styles.secs}>{Math.floor(time/100)}</div>
                    <div className={styles.ms}>{time%100}</div>
                </div>
            <div className={styles.btns}>
                { isActive ? ( 
                    <button 
                        className={styles.stop}
                        onClick={stopTimer}
                    >
                        Stop
                    </button> 
                ) : (
                    <button 
                        className={styles.start}
                        onClick={startTimer}
                    >
                        Start
                    </button>  
                ) }
                <button 
                    className={styles.reset}
                    onClick={resetTimer}
                >
                    Reset
                </button>
            </div>
        </div>
        
    )
}

export default Stopwatch;