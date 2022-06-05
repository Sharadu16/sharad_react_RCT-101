import React, { useReducer } from 'react'

const reducer = (state, {type, payload}) => {
   switch(type){
     case "INCREMENT" : {
         return state+payload;
     }
     case "DECREMENT" : {
        return state-payload;
     }
     default : {
        return state;
     }
   }
};

const Counter = () => {

    const [state, dispatch] = useReducer(reducer,  1);
  return (
    <div>
      <h1>Counter : {state}</h1>
    <div>
        <button style={{padding:"0px 20px", fontSize:"50px"}} onClick={() => dispatch({type:"INCREMENT", payload: 5})}>+</button>
        <button style={{padding:"0px 20px", fontSize:"50px"}} onClick={() => dispatch({type:"DECREMENT", payload: 1})}>-</button>
    </div>
    </div>
  )
}

export default Counter
