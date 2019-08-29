import React, { memo } from "react";
import axios from 'axios';

import {
  ListItem,
  Checkbox,
  IconButton,
  ListItemText,
  ListItemSecondaryAction
} from "@material-ui/core";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";

import EditTodo from './EditTodo';

const TodoListItem = memo(props => {
  const deleteNote = () => {
    axios.delete(`https://wunderlist-2.herokuapp.com/api/todos/${props.id}`, { id: props.id })
      .then(res => {
        props.getTodos();
        alert(res.data.message);
      })
      .catch(err => console.error(err));
  }

  return (<ListItem divider={props.divider}>
    <Checkbox
      onClick={props.onCheckBoxToggle}
      checked={props.checked}
      disableRipple />
    <div style={{flexDirection: 'row'}}>
      <ListItemText secondary={props.title} />
      <ListItemText primary={props.task} />
    </div>
    <ListItemSecondaryAction>
      <EditTodo />
      <IconButton aria-label="Delete Todo" onClick={deleteNote}>
        <DeleteOutlined />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>)
});

export default TodoListItem;
