import React, { useState, memo } from 'react';
import Todo from './tasks/Todo';
import SearchBar from './Menu';
import  '../index.css';

function HomePage(props) {
  return (
    <div>
      <SearchBar />
      <Todo />
    </div>
  )
}

export default HomePage;