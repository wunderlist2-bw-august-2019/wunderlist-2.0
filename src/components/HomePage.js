import React, { useState, memo } from 'react';
import Todo from './tasks/Todo';
import SearchBar from './Menu';
import  '../index.css';
import TodoList from './tasks/TodoList'
import NewTodo from './tasks/NewTodo'
import axios from 'axios';


function HomePage(props) {
  const [todos, setTodos] = useState([]);
  const getTodos = () => {
    axios.get('https://wunderlist-2.herokuapp.com/api/todos/')
      .then(res => {
        setTodos(res.data.filter(todo => `${todo.user_id}` === localStorage.getItem("user_id")));
      })
  }


  return (
    <div>
  <SearchBar getTodos={getTodos}/>
      <Todo getTodos={getTodos} todos={todos}/>
    </div>
  )
}

export default HomePage;