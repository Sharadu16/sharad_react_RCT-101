import React, { useState } from 'react'

const Counter = (props) => {

    const [count, setCount] = useState(props.initialValue);

    const val = count;
    const cssStyle = {};

    if(val===0)
    {
      cssStyle.color="black";
    }
    else if(val%2===1)
    {
        cssStyle.color="red";
    }else{
        cssStyle.color="green";
    }

    const button = {
        height: "40px",
        width:"120px",
        backgroundColor:"teal",
        fontSize:"15px",
        marginLeft:"10px",
        fontWeight:"bolder"
    }

  return (
    <div>
        <h1 style={cssStyle}>Counter : {count}</h1>
        <div>
            <button style={button} onClick={()=> setCount(count+1)}>Increment</button>
            <button style={button} onClick={()=> {if(count>0){setCount(count-1)}} }>Decrement</button>
            <button style={button} onClick={()=> setCount(count*2)}>Double</button>
        </div>
    </div>
  )
}

export default Counter