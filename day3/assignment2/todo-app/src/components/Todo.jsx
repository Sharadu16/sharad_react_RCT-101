import React, { useState } from 'react'
import TodoList from './TodoList';

const Todo = () => {
      
      const [data, setData] = useState("");
      const [todo, setTodo] = useState([]);
       
      const changeInput = (event) => {
          setData(event.target.value);
      }

      const changeValue = () => {
          setTodo((prevData) => {
            return [...prevData, data];
          })
          setData("");
      }

      const inputTag = {
          padding:"25px 120px",
          fontSize:"25px",
          borderRadius:"17px"
      }

      const buttonTag = {
         padding:"25px 30px",
         marginLeft:"30px",
         borderRadius:"17px"
      }

      const mainDiv= {
          width:"720px",
          height:"600px",
         boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
         marginLeft:"350px",
         backgroundColor:"teal"
      }
      const heading = {
          paddingTop:"20px"
      }

  return (
    <div>
        <div style={mainDiv}>
            <h1 style={heading}>My Todo List</h1>
            <br/>
            <div>
                <input style={inputTag} type="text" value={data} placeholder='Write Something' onChange={changeInput} />
                <button style={buttonTag} onClick={changeValue}><span class="material-symbols-outlined">add</span></button>
            </div>
            <div>
                {
                todo.map((val,index) => {
                    return <TodoList val={val} key={index} />
                }) 
                }
            </div>
        </div>
    </div>
  )
}

export default Todo;