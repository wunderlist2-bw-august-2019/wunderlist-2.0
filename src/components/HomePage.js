import React, { useState } from 'react';
import Todo from './tasks/Todo';
import SearchBar from './Menu';
import axios from 'axios';
import { Header, Icon } from 'semantic-ui-react';
import  '../index.css';


function HomePage({ welcomeMessage }) {
  const [todos, setTodos] = useState([]);
  const getTodos = () => {
    axios.get('https://wunderlist-2.herokuapp.com/api/todos/')
      .then(res => {
        setTodos(res.data.filter(todo => `${todo.user_id}` === localStorage.getItem("user_id")));
      })
  }


  return (
    <div>
      <SearchBar getTodos={getTodos} welcomeMessage={welcomeMessage} />
      <Header as="h1">Wunderlist 2.0 <Icon name="file alternate outline" /></Header>
      {todos.length ? <Todo getTodos={getTodos} todos={todos}/> : <Header as="h3">Don't be lazy. Add some todos!</Header>}
    </div>
  )
}

export default HomePage;