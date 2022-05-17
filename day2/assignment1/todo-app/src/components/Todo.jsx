import React, { useState } from 'react'
import styles from "./todo.module.css";

const Todo = () => {

    const [input, setInput] = useState("");
    const [items, setItems] = useState([]);

    const changeInput = (event) => {
        setInput(event.target.value);
    }

    const listOfItems = (e) => {
        setItems((oldItems)=> {
            return [...oldItems, input];
        }); 
        setInput("") ;
    }

  return (
    <div>
        <div className={styles.mainDiv}>
            <div className={styles.heading}>
               <h1>ToDo List</h1>
            </div>
            <div className={styles.innerDiv}>
                <input className={styles.inputTag} type='text' placeholder='Write Something' value={input} onChange={changeInput}  />
                <button className={styles.buttonTag} onClick={listOfItems}> <span class="material-symbols-outlined">add</span> </button>
            </div>
            <div className={styles.output}>
                {
                    items.map((elem)=> {
                        return (
                            <div >
                                <p>{elem}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Todo