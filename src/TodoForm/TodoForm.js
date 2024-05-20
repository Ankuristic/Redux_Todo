// import React ,{useState} from 'react'

// function TodoForm() {
//     const [input, setInput] =useState('')
//     const [todos, setTodos] = useState([]);


//     const handleChange =(e) =>{
//         setInput(e.target.value);

//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Add your submit logic here
//         console.log('Form submitted with input:', input);
//         if (input.trim()) {
//             setTodos([...todos, input]);
//             setInput('');
//           }
//         // setInput('');
//       };


//   return (
//     <>
//      <form onSubmit={handleSubmit}>
//         <input type = "text"  value ={input} onChange={handleChange} 
//         placeholder="Add a todo"/>
//         <button type = "submit"> click Me </button>
//         </form>
//         {/* <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>{todo}</li>
//         ))}
//       </ul> */}

//       {todos.map((todo) => (
//           <li key={todo.id}>
//             {todo.text}
//             <button onClick={() => handleDelete(todo.id)}>Delete</button>
//           </li>
//         ))}
//       <button type = "submit"> Delete  Me </button>

//     </>
//   )
// }

// export default TodoForm



import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import {addTodo} from '../Redux/Action/action'



function TodoForm() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const dispatch =useDispatch()


  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      const newTodo = {
        id: Date.now(),
        text: input,
      };
      setTodos([...todos, newTodo]);
      dispatch(addTodo(input));

      setInput('');
    }
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Add a todo"
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default TodoForm