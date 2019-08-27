import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import TodoList from './tasks/TodoList';
import AddTodo from './tasks/AddTodo';
import Layout from './tasks/Layout';
import { useInputValue , useTodos } from './Hooks/CustomHooks';
import Todo from './tasks/Todo';
import SearchBar from '../components/SearchBar';
import  '../index.css';

function HomePage(props) {
  return (
    <div>
  < SearchBar />
  <Todo />
  </div>
  )
}

export default HomePage;