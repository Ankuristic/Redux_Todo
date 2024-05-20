import React from 'react'
import TodoForm from "../src/TodoForm/TodoForm"
import { Provider } from "react-redux";
import { useDispatch, useSelector } from 'react-redux';
import { store } from "./Redux/store";


// import { useDispatch } from "react-redux";

function App() {
  // const dispatch = useDispatch();
  return (
    <>
    <Provider store ={store}>
           <TodoForm/>
    </Provider>
    
    </>
  )
}

export default App