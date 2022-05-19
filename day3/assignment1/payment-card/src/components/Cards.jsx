import React from 'react'
import Card from './Card'
import styles from "./Cards.module.css";

const data = [
    {
        date:"28/10/2020",
        icon1:"fa-brands fa-amazon",
        about:"Case Study",
        heading1:"Amazon Gift",
        heading2:"Pay",
        media:"Desktop - Mobile",
        icon2:"fa-solid fa-arrow-right"
    },

    {
        date:"17 Sep 2020",
        icon1:"fa-brands fa-apple",
        about:"Case Study",
        heading1:"Apple Gift",
        heading2:"Payment",
        media:"MacOS - Mobile",
        icon2:"fa-solid fa-arrow-right"
    }
];

const Cards = () => {
  return (
    <div className={styles.mainDiv}>
       <div  className={styles.innerDiv1}>
          <Card date ={data[0].date}
              icon1 ={data[0].icon1}
              about ={data[0].about}
              heading1={data[0].heading1}
              heading2={data[0].heading2}
              media={data[0].media}
              icon2={data[0].icon2}
          />
       </div>
       <div className={styles.innerDiv2} >
             <Card date ={data[1].date}
              icon1 ={data[1].icon1}
              about ={data[1].about}
              heading1={data[1].heading1}
              heading2={data[1].heading2}
              media={data[1].media}
              icon2={data[1].icon2}
           />
       </div>
    </div>
  )
}

export default Cards