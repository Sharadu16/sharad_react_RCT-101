import React, { useState } from 'react';
import Todo from './Todo';

const TodoList = (props) => {

    const [line, setLine] = useState(false);
    
    const lineAdd = () => {

        setLine(true);
    }

    const output = {
        display:"flex",
        marginLeft:"100px",
        height:"45px"
    }

    const deleteIcon ={
        paddingTop:"28px",
        cursor:"pointer"
    }

    // const pTag = {
    //     marginLeft:"40px",
    //     fontSize:"23px",
    //     textDecoration:"lineThrough"
    // }

  return (
    <div>
        <div style={output}>
            <br/>
            <span style={deleteIcon} onClick={lineAdd} class="material-symbols-outlined">delete_forever</span>
            <p style={{marginLeft:"40px",fontSize:"23px", textDecoration: line ? "line-through" : "none" }}>{props.val}</p>
        </div>
    </div>
  )
}

export default TodoList;