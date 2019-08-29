import React, { useState, memo } from 'react';
import Todo from './tasks/Todo';
import SearchBar from './Menu';
import  '../index.css';
import TodoList from './tasks/TodoList'
import NewTodo from './tasks/NewTodo'

function HomePage(props) {
  return (
    <div>
      <SearchBar />
      <Todo />

    </div>
  )
}

export default HomePage;