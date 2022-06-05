import React, { useEffect, useState } from 'react'
import TodoItem from './TodoItem';

const Todo = () => {
    const [newTodo, setNewTodo] = useState("");
    const [todo, setTodo] = useState([]);
   
    const saveInfo = () => {
        fetch("http://localhost:8080/todos" ,{
            method:"POST",
            headers: {
                "content-type" : "application/json",
            },
            body : JSON.stringify({
                text: newTodo,
                isCompleted: false,
            }),
        })
        .then((res)=> res.json())
        .then((data) => {
            setTodo([...todo, data])
            setNewTodo("");
        });

    };


    useEffect(() => {
        fetch("http://localhost:8080/todos")
        .then((res)=> res.json())
        .then((data) => {
            setTodo(data);
          console.log(data);
        });

    },[]);

  return (
    <div>
    Todo
    <div>
        <input type="text" value={newTodo} onChange={({target}) => setNewTodo(target.value)} />
        <button onClick={saveInfo}>add Todo</button>
        {
            todo.map((todo) =>(
                <TodoItem key={todo.id} todo={todo.text}/>
            ))
        }
    </div>
    </div>
  )
}

export default Todo