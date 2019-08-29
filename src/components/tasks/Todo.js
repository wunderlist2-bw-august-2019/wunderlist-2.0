import React, { useState, memo, useEffect } from "react";
import axios from 'axios';
import { useInputValue, useTodos } from "../Hooks/CustomHooks";
import Layout from "./Layout";
import NewTodo from "./NewTodo";
import TodoList from "./TodoList";
import "./todoList.css";

const TodoApp = memo(props => {
  // const { inputValue, changeInput, clearInput, keyInput } = useInputValue();
  // const { todos, addTodo, checkTodo, removeTodo } = useTodos();

  // const clearInputAndAddTodo = _ => {
  //   clearInput();
  //   addTodo(inputValue);
  // };
  // let todoCount = todos.length;

  // if (todoCount = 0) {
  //   return (
  //     <div className= "todoList">
  //       <h3>Are you being lazy or productive? we ask because you have nothing to do. </h3>
  //     </div>
  //   )
  // }

  const [todos, setTodos] = useState([]);
  
  const getTodos = () => {
    axios.get('https://wunderlist-2.herokuapp.com/api/todos/')
      .then(res => {
        setTodos(res.data.filter(todo => `${todo.user_id}` === localStorage.getItem("user_id")));
      })
  }

  useEffect(() => {
    getTodos();
  }, [])


return (      

    <Layout>
      <NewTodo />
<div className="todoList">
      <TodoList
        items={todos}
        // onItemCheck={idx => checkTodo(idx)}
        // onItemRemove={idx => removeTodo(idx)}
      />
      </div>
    </Layout>
 
  );
});

export default TodoApp;
