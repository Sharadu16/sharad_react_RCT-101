import React from 'react'
import styles from "./Card.module.css";
const Card = (props) => {
  return (
    <div>
        <div className={styles.mainDiv}>
            <div className={styles.Div1}>
                <div className={styles.date}><h3>{props.date}</h3></div>
                <div className={styles.icon1}><i class={props.icon1}></i></div>
            </div>
            <div className={styles.Div2}>{props.about}</div>
            <div className={styles.Div3}><h1>{props.heading1}</h1></div>
            <div className={styles.Div4}><h1>{props.heading2}</h1></div>
            <div className={styles.Div5}>
                <div><h3>{props.media}</h3></div>
                <div className={styles.icon2}><i class={props.icon2}></i></div>
            </div>
        </div>
    </div>
  )
}

export default Card